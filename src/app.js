import 'dotenv/config'

import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import AdminJS, { ValidationError } from 'adminjs'
import express from 'express'
import fs from 'node:fs'
import path from 'node:path'

import { Components, componentLoader } from './admin/component-loader.js'
import { customSidebarPages } from './admin/page-data.js'
import { ruTranslations, uzTranslations } from './admin/translations.js'
import { connectDatabase } from './config/db.js'
import PurchaseRequest, {
	DECISION_STATUSES,
	ITEM_UNITS,
	REQUEST_STATUSES,
} from './models/PurchaseRequest.js'
import User from './models/User.js'
import createDefaultAdmin from './seed/createDefaultAdmin.js'
import {
	buildPurchaseRequestFilename,
	generatePurchaseRequestDocx,
	generatePurchaseRequestPdf,
} from './utils/purchaseRequestExport.js'

AdminJS.registerAdapter({
	Resource: AdminJSMongoose.Resource,
	Database: AdminJSMongoose.Database,
})

const PORT = Number(process.env.PORT || 3000)
const HOST = process.env.HOST || '0.0.0.0'
const SESSION_SECRET = process.env.SESSION_SECRET || 'zaxira-maxfiy-kalit'
const SESSION_MAX_AGE = 1000 * 60 * 60 * 24 * 90
const USERS_SECTION_ROLES = ['admin', 'monitoring']
const GLOBAL_PURCHASE_VIEW_ROLES = ['admin', 'monitoring']
const ADMINJS_CACHE_DIR = '.adminjs'
const BUYER_UPLOAD_DIR = path.join(
	process.cwd(),
	'public',
	'uploads',
	'buyurtma',
)

const canSeeUsersSection = currentAdmin =>
	USERS_SECTION_ROLES.includes(currentAdmin?.role)

const hasGlobalPurchaseViewAccess = currentAdmin =>
	GLOBAL_PURCHASE_VIEW_ROLES.includes(currentAdmin?.role)

const getRecordId = record => record?.param('id') || record?.param('_id')

const isOwnProfile = ({ currentAdmin, record }) =>
	Boolean(
		currentAdmin?.id &&
		record &&
		String(getRecordId(record)) === String(currentAdmin.id),
	)

const canEditUser = ({ currentAdmin, record }) =>
	currentAdmin?.role === 'admin' || isOwnProfile({ currentAdmin, record })

const FINAL_APPROVAL_STATUSES = [
	'tasdiqlandi',
	'tasdiqlangan',
	'qisman tasdiqlandi',
	'rad etildi',
	'sotib olish kerak',
	'sotib olinmoqda',
]
const BUYER_VISIBLE_STATUSES = [
	'tasdiqlandi',
	'tasdiqlangan',
	'qisman tasdiqlandi',
	'sotib olish kerak',
	'sotib olinmoqda',
]
const BUYER_WORKSPACE_STATUSES = ['sotib olish kerak', 'sotib olinmoqda']
const BUYER_QUEUE_STAGES = ['yakunlandi', 'sotib_olish']
const WAREHOUSE_ROLE = 'tuzilmalar'

const getStatusOptionLabel = status => {
	const normalized = String(status || '')
		.trim()
		.toLowerCase()

	const labels = {
		'ko‘rilmoqda': 'Ko‘rilmoqda',
		'tuzilmalar tasdig‘ida': 'Ko‘rilmoqda',
		tasdiqlanmoqda: 'Tasdiqlanmoqda',
		'boshliq tasdig‘ida': 'Tasdiqlanmoqda',
		tasdiqlangan: 'Tasdiqlangan',
		tasdiqlandi: 'Tasdiqlangan',
		'qisman tasdiqlandi': 'Qisman tasdiqlandi',
		'sotib olish kerak': 'Sotib olish kerak',
		'sotib olinmoqda': 'Sotib olinmoqda',
		'rad etildi': 'Rad etildi',
	}

	return labels[normalized] || status
}

const isPurchaseRequestCreator = ({ currentAdmin, record }) =>
	Boolean(
		currentAdmin?.id &&
		record &&
		String(record.param('createdBy')) === String(currentAdmin.id),
	)

const isPurchaseRequestApprover = ({ currentAdmin, record }) =>
	Boolean(
		currentAdmin?.id &&
		record &&
		String(record.param('approver')) === String(currentAdmin.id),
	)

const parseJsonArray = value => {
	if (Array.isArray(value)) {
		return value
	}

	if (!value) {
		return []
	}

	try {
		const parsed = JSON.parse(value)
		return Array.isArray(parsed) ? parsed : []
	} catch {
		return []
	}
}

const parseJsonObject = value => {
	if (value && typeof value === 'object' && !Array.isArray(value)) {
		return value
	}

	if (!value) {
		return {}
	}

	try {
		const parsed = JSON.parse(value)
		return parsed && typeof parsed === 'object' && !Array.isArray(parsed)
			? parsed
			: {}
	} catch {
		return {}
	}
}

const normalizeIds = value =>
	Array.from(
		new Set(
			parseJsonArray(value)
				.map(item => String(item))
				.filter(Boolean),
		),
	)

const isPurchaseRequestAssignee = ({ currentAdmin, record }) =>
	Boolean(
		currentAdmin?.id &&
		record &&
		normalizeIds(record.param('selectedUsers')).includes(
			String(currentAdmin.id),
		),
	)

const isPurchaseRequestBuyerTarget = ({ currentAdmin, record }) =>
	Boolean(
		currentAdmin?.role === 'sotib_oluvchi' &&
		record &&
		BUYER_VISIBLE_STATUSES.includes(String(record.param('status') || '')) &&
		BUYER_QUEUE_STAGES.includes(String(record.param('currentStage') || '')),
	)

const canViewPurchaseRequest = context => {
	const { currentAdmin } = context || {}

	if (!currentAdmin) {
		return false
	}

	if (hasGlobalPurchaseViewAccess(currentAdmin)) {
		return true
	}

	return (
		isPurchaseRequestApprover(context) ||
		isPurchaseRequestCreator(context) ||
		isPurchaseRequestAssignee(context) ||
		isPurchaseRequestBuyerTarget(context)
	)
}

const canEditPurchaseRequest = ({ currentAdmin, record }) =>
	Boolean(
		record &&
		(currentAdmin?.role === 'admin' ||
			isPurchaseRequestCreator({ currentAdmin, record })),
	)

const canReviewPurchaseRequest = ({ currentAdmin, record }) => {
	if (!currentAdmin || !record) {
		return false
	}

	const status = String(record.param('status') || '')
	const currentStage = String(record.param('currentStage') || 'tuzilmalar')

	if (FINAL_APPROVAL_STATUSES.includes(status)) {
		return false
	}

	if (
		currentAdmin.role !== 'admin' &&
		isPurchaseRequestCreator({ currentAdmin, record })
	) {
		return false
	}

	if (currentAdmin.role === 'admin') {
		return true
	}

	if (currentStage === 'tuzilmalar') {
		return (
			currentAdmin.role === 'tuzilmalar' &&
			isPurchaseRequestAssignee({ currentAdmin, record })
		)
	}

	if (currentStage === 'monitoring') {
		return (
			currentAdmin.role === 'monitoring' &&
			isPurchaseRequestApprover({ currentAdmin, record })
		)
	}

	return false
}

const buildUserDisplayLabel = user =>
	user.organizationName ||
	user.displayName ||
	[user.firstName, user.lastName].filter(Boolean).join(' ').trim() ||
	user.username ||
	'Noma’lum tuzilma'

const buildActorLabel = user =>
	user?.organizationName ||
	user?.title ||
	[user?.firstName, user?.lastName].filter(Boolean).join(' ').trim() ||
	user?.username ||
	'Foydalanuvchi'

const normalizeWarehouseIdentity = value =>
	String(value || '')
		.trim()
		.toLowerCase()

const buildWarehouseOption = user => ({
	id: String(user?._id || user?.id || '').trim(),
	name:
		String(user?.organizationName || '').trim() || buildUserDisplayLabel(user),
	description:
		[user?.firstName, user?.lastName].filter(Boolean).join(' ').trim() ||
		String(user?.username || '').trim() ||
		buildUserDisplayLabel(user),
})

const loadWarehouseStructures = async () => {
	const users = await User.find({ role: WAREHOUSE_ROLE })
		.sort({
			updatedAt: -1,
			createdAt: -1,
			organizationName: 1,
			firstName: 1,
			lastName: 1,
			username: 1,
		})
		.lean()

	const warehouseMap = new Map()

	for (const user of users) {
		const warehouse = buildWarehouseOption(user)
		const identityKey =
			normalizeWarehouseIdentity(warehouse.name) || warehouse.id

		if (!warehouseMap.has(identityKey)) {
			warehouseMap.set(identityKey, warehouse)
		}
	}

	return [...warehouseMap.values()].sort((firstWarehouse, secondWarehouse) =>
		String(firstWarehouse?.name || '').localeCompare(
			String(secondWarehouse?.name || ''),
			'uz',
		),
	)
}

const normalizePurchaseItems = value =>
	parseJsonArray(value)
		.map(item => ({
			productName: String(item?.productName || '').trim(),
			features: String(item?.features || '').trim(),
			unit: ITEM_UNITS.includes(item?.unit) ? item.unit : ITEM_UNITS[0],
			quantity: Math.max(1, Number(item?.quantity || 0)),
		}))
		.filter(item => item.productName)

const buildItemsSummary = items =>
	items
		.map(item => `${item.productName} (${item.quantity} ${item.unit})`)
		.join('; ')

const hasItemChanges = (previousItems, nextItems) =>
	JSON.stringify(normalizePurchaseItems(previousItems)) !==
	JSON.stringify(normalizePurchaseItems(nextItems))

const buildSafeFileName = value =>
	String(value || 'hujjat')
		.normalize('NFKD')
		.replace(/[^\w.-]+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-|-$/g, '')
		.toLowerCase() || 'hujjat'

const getFileExtension = (fileName, mimeType = '') => {
	const explicitExtension = path.extname(String(fileName || '')).slice(0, 10)

	if (explicitExtension) {
		return explicitExtension
	}

	const mimeExtensions = {
		'application/pdf': '.pdf',
		'image/png': '.png',
		'image/jpeg': '.jpg',
		'image/jpg': '.jpg',
		'image/webp': '.webp',
		'text/plain': '.txt',
		'application/msword': '.doc',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
			'.docx',
		'application/vnd.ms-excel': '.xls',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
			'.xlsx',
	}

	return mimeExtensions[mimeType] || ''
}

const normalizeBuyerDocuments = value =>
	parseJsonArray(value)
		.map((item, index) => ({
			id:
				String(item?.id || '').trim() ||
				`doc-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
			name: String(item?.name || '').trim(),
			fileName: String(item?.fileName || item?.originalName || '').trim(),
			url: String(item?.url || item?.existingUrl || '').trim(),
			mimeType: String(item?.mimeType || '').trim(),
			content: String(item?.content || '').trim(),
			uploadedAt: item?.uploadedAt,
		}))
		.filter(item => item.name || item.fileName || item.url || item.content)

const saveBuyerDocument = async (document, requestNumber = 'buyurtma') => {
	if (document.url && !document.content) {
		return {
			id: document.id,
			name: document.name || document.fileName || 'Hujjat',
			fileName: document.fileName || document.name || 'document',
			url: document.url,
			mimeType: document.mimeType,
			uploadedAt: document.uploadedAt || new Date().toISOString(),
		}
	}

	const matchedContent = String(document.content || '').match(
		/^data:(.*?);base64,(.+)$/,
	)

	if (!matchedContent) {
		throw new ValidationError({
			documents: {
				message: 'Yuklangan hujjat formatini o‘qib bo‘lmadi',
			},
		})
	}

	fs.mkdirSync(BUYER_UPLOAD_DIR, { recursive: true })

	const extension = getFileExtension(document.fileName, matchedContent[1])
	const storedName = `${buildSafeFileName(requestNumber)}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${extension}`
	const absolutePath = path.join(BUYER_UPLOAD_DIR, storedName)

	await fs.promises.writeFile(
		absolutePath,
		Buffer.from(matchedContent[2], 'base64'),
	)

	return {
		id: document.id,
		name: document.name || document.fileName || 'Hujjat',
		fileName: document.fileName || storedName,
		url: `/uploads/buyurtma/${storedName}`,
		mimeType: document.mimeType || matchedContent[1],
		uploadedAt: new Date().toISOString(),
	}
}

const buildBuyerOrderSummary = data => {
	const parts = []
	const supplier = String(data?.supplierName || '').trim()
	const itemCount = Array.isArray(data?.items) ? data.items.length : 0
	const documentCount = Array.isArray(data?.documents)
		? data.documents.length
		: 0

	if (supplier) {
		parts.push(`Manba: ${supplier}`)
	}

	if (itemCount) {
		parts.push(`${itemCount} ta tovar`)
	}

	if (documentCount) {
		parts.push(`${documentCount} ta hujjat`)
	}

	return parts.join(' • ')
}

const getDateTimestamp = value => {
	if (!value) {
		return 0
	}

	const date = new Date(value)
	return Number.isNaN(date.getTime()) ? 0 : date.getTime()
}

const getBuyerNotificationTimestamp = buyerOrderData =>
	String(buyerOrderData?.notificationUpdatedAt || '').trim()

const isBuyerRecordNew = buyerOrderData => {
	const notificationUpdatedAt = getBuyerNotificationTimestamp(buyerOrderData)

	if (!notificationUpdatedAt) {
		return false
	}

	const lastViewedAt = String(buyerOrderData?.lastViewedAt || '').trim()

	if (!lastViewedAt) {
		return true
	}

	return (
		getDateTimestamp(lastViewedAt) < getDateTimestamp(notificationUpdatedAt)
	)
}

const getBuyerRecordSortTime = record => {
	const buyerOrderData = parseJsonObject(record?.buyerOrderData)

	return Math.max(
		getDateTimestamp(buyerOrderData?.notificationUpdatedAt),
		getDateTimestamp(buyerOrderData?.savedAt),
		getDateTimestamp(buyerOrderData?.submittedAt),
		getDateTimestamp(record?.updatedAt),
		getDateTimestamp(record?.createdAt),
		0,
	)
}

const sortBuyerWorkspaceRecords = records =>
	[...(records || [])].sort(
		(firstRecord, secondRecord) =>
			getBuyerRecordSortTime(secondRecord) -
			getBuyerRecordSortTime(firstRecord),
	)

const serializeBuyerWorkspaceRecord = record => {
	const buyerOrderData = parseJsonObject(record?.buyerOrderData)
	const warehouseDispatchData = getWarehouseDispatchData(record)

	return {
		id: String(record?._id || ''),
		requestNumber: String(record?.requestNumber || ''),
		status: String(record?.status || ''),
		currentStage: String(record?.currentStage || ''),
		selectedUserNames: String(record?.selectedUserNames || ''),
		items: normalizePurchaseItems(buyerOrderData.items || record?.items),
		buyerOrderData: {
			supplierName: String(buyerOrderData?.supplierName || '').trim(),
			documents: normalizeBuyerDocuments(buyerOrderData.documents),
			originalItems: normalizePurchaseItems(
				buyerOrderData.originalItems || record?.items,
			),
			savedAt: buyerOrderData?.savedAt || '',
			savedBy: String(buyerOrderData?.savedBy || '').trim(),
			savedByRole: String(buyerOrderData?.savedByRole || '').trim(),
			workflowState: String(buyerOrderData?.workflowState || 'ready').trim(),
			submittedAt: buyerOrderData?.submittedAt || '',
			changeNote: String(buyerOrderData?.changeNote || '').trim(),
			returnedAt: buyerOrderData?.returnedAt || '',
			returnedBy: String(buyerOrderData?.returnedBy || '').trim(),
			notificationUpdatedAt: getBuyerNotificationTimestamp(buyerOrderData),
			lastViewedAt: String(buyerOrderData?.lastViewedAt || '').trim(),
			lastViewedBy: String(buyerOrderData?.lastViewedBy || '').trim(),
			lastViewedRole: String(buyerOrderData?.lastViewedRole || '').trim(),
			isNew: isBuyerRecordNew(buyerOrderData),
		},
		warehouseDispatchData: {
			warehouseId: String(warehouseDispatchData?.warehouseId || '').trim(),
			warehouseName: String(warehouseDispatchData?.warehouseName || '').trim(),
			warehouseDescription: String(
				warehouseDispatchData?.warehouseDescription || '',
			).trim(),
			dispatchedAt: String(warehouseDispatchData?.dispatchedAt || '').trim(),
			dispatchedBy: String(warehouseDispatchData?.dispatchedBy || '').trim(),
			dispatchedByRole: String(
				warehouseDispatchData?.dispatchedByRole || '',
			).trim(),
			receivedAt: String(warehouseDispatchData?.receivedAt || '').trim(),
			receivedBy: String(warehouseDispatchData?.receivedBy || '').trim(),
			receivedByRole: String(
				warehouseDispatchData?.receivedByRole || '',
			).trim(),
		},
		warehouseDispatchSummary: String(
			record?.warehouseDispatchSummary || '',
		).trim(),
		buyerOrderSummary: String(record?.buyerOrderSummary || '').trim(),
		createdAt: record?.createdAt,
		updatedAt: record?.updatedAt,
	}
}

const getWarehouseOption = (warehouseId, warehouses = []) =>
	(warehouses || []).find(
		warehouse => warehouse.id === String(warehouseId || '').trim(),
	) || null

const getWarehouseDispatchData = record =>
	parseJsonObject(record?.warehouseDispatchData)

const hasWarehouseDispatch = record =>
	Boolean(String(getWarehouseDispatchData(record)?.dispatchedAt || '').trim())

const hasWarehouseReceipt = record =>
	Boolean(String(getWarehouseDispatchData(record)?.receivedAt || '').trim())

const matchesWarehouseReceiver = ({ record, currentAdmin }) => {
	if (currentAdmin?.role !== WAREHOUSE_ROLE) {
		return true
	}

	const dispatchData = getWarehouseDispatchData(record)
	const warehouseId = String(dispatchData?.warehouseId || '').trim()
	const warehouseName = normalizeWarehouseIdentity(dispatchData?.warehouseName)
	const currentWarehouseId = String(currentAdmin?.id || '').trim()
	const currentWarehouseName = normalizeWarehouseIdentity(
		currentAdmin?.organizationName || buildUserDisplayLabel(currentAdmin),
	)

	return Boolean(
		(warehouseId && warehouseId === currentWarehouseId) ||
		(warehouseName &&
			currentWarehouseName &&
			warehouseName === currentWarehouseName),
	)
}

const isDispatchReadyRecord = record => {
	const buyerOrderData = parseJsonObject(record?.buyerOrderData)
	const dispatchData = getWarehouseDispatchData(record)

	return (
		String(record?.status || '') === 'sotib olinmoqda' &&
		String(record?.currentStage || '') === 'sotib_olish' &&
		String(buyerOrderData?.workflowState || '').trim() === 'submitted' &&
		!String(dispatchData?.dispatchedAt || '').trim()
	)
}

const getDispatchSortTime = record => {
	const buyerOrderData = parseJsonObject(record?.buyerOrderData)
	const dispatchData = getWarehouseDispatchData(record)

	return Math.max(
		getDateTimestamp(dispatchData?.receivedAt),
		getDateTimestamp(dispatchData?.dispatchedAt),
		getDateTimestamp(buyerOrderData?.submittedAt),
		getDateTimestamp(buyerOrderData?.savedAt),
		getDateTimestamp(record?.updatedAt),
		getDateTimestamp(record?.createdAt),
		0,
	)
}

const sortDispatchWorkspaceRecords = records =>
	[...(records || [])].sort(
		(firstRecord, secondRecord) =>
			getDispatchSortTime(secondRecord) - getDispatchSortTime(firstRecord),
	)

const serializeDispatchWorkspaceRecord = record => {
	const buyerOrderData = parseJsonObject(record?.buyerOrderData)
	const dispatchData = getWarehouseDispatchData(record)

	return {
		id: String(record?._id || ''),
		requestNumber: String(record?.requestNumber || ''),
		status: String(record?.status || ''),
		currentStage: String(record?.currentStage || ''),
		selectedUserNames: String(record?.selectedUserNames || '').trim(),
		items: normalizePurchaseItems(
			dispatchData?.itemsSnapshot || buyerOrderData?.items || record?.items,
		),
		buyerOrderData: {
			supplierName: String(
				dispatchData?.supplierName || buyerOrderData?.supplierName || '',
			).trim(),
			savedAt: String(buyerOrderData?.savedAt || '').trim(),
			submittedAt: String(buyerOrderData?.submittedAt || '').trim(),
			workflowState: String(buyerOrderData?.workflowState || '').trim(),
		},
		warehouseDispatchData: {
			warehouseId: String(dispatchData?.warehouseId || '').trim(),
			warehouseName: String(dispatchData?.warehouseName || '').trim(),
			warehouseDescription: String(
				dispatchData?.warehouseDescription || '',
			).trim(),
			dispatchedAt: String(dispatchData?.dispatchedAt || '').trim(),
			dispatchedBy: String(dispatchData?.dispatchedBy || '').trim(),
			dispatchedByRole: String(dispatchData?.dispatchedByRole || '').trim(),
			receivedAt: String(dispatchData?.receivedAt || '').trim(),
			receivedBy: String(dispatchData?.receivedBy || '').trim(),
			receivedByRole: String(dispatchData?.receivedByRole || '').trim(),
		},
		warehouseDispatchSummary: String(
			record?.warehouseDispatchSummary || '',
		).trim(),
		createdAt: record?.createdAt,
		updatedAt: record?.updatedAt,
	}
}

const buildWarehouseOverviewData = (records, warehouses = []) => {
	const warehouseMap = new Map(
		(warehouses || []).map(warehouse => [
			warehouse.id,
			{
				...warehouse,
				totalQuantity: 0,
				itemCount: 0,
				requestCount: 0,
				updatedAt: '',
				items: [],
			},
		]),
	)
	const warehouseList = [...warehouseMap.values()]

	for (const record of records || []) {
		const dispatchData = getWarehouseDispatchData(record)
		const receivedAt = String(dispatchData?.receivedAt || '').trim()
		const warehouse =
			warehouseMap.get(String(dispatchData?.warehouseId || '').trim()) ||
			warehouseList.find(
				item =>
					normalizeWarehouseIdentity(item?.name) ===
					normalizeWarehouseIdentity(dispatchData?.warehouseName),
			)

		if (!warehouse || !receivedAt) {
			continue
		}

		const buyerOrderData = parseJsonObject(record?.buyerOrderData)
		const items = normalizePurchaseItems(
			dispatchData?.itemsSnapshot || buyerOrderData?.items || record?.items,
		)
		const supplierName = String(
			dispatchData?.supplierName || buyerOrderData?.supplierName || '',
		).trim()

		if (items.length) {
			warehouse.requestCount += 1
		}

		if (getDateTimestamp(receivedAt) > getDateTimestamp(warehouse.updatedAt)) {
			warehouse.updatedAt = receivedAt
		}

		for (const item of items) {
			const quantity = Math.max(1, Number(item?.quantity || 1))
			warehouse.totalQuantity += quantity
			warehouse.itemCount += 1
			warehouse.items.push({
				productName: String(item?.productName || '').trim(),
				features: String(item?.features || '').trim(),
				unit: String(item?.unit || ITEM_UNITS[0] || 'dona').trim(),
				quantity,
				requestId: String(record?._id || '').trim(),
				requestNumber: String(record?.requestNumber || '').trim(),
				supplierName,
				receivedAt,
			})
		}
	}

	return (warehouses || []).map(warehouse => {
		const currentWarehouse = warehouseMap.get(warehouse.id)

		return {
			...currentWarehouse,
			items: [...(currentWarehouse?.items || [])].sort(
				(firstItem, secondItem) =>
					getDateTimestamp(secondItem?.receivedAt) -
					getDateTimestamp(firstItem?.receivedAt),
			),
		}
	})
}

const buildApprovalSummary = ({ selectedUserIds, structureApprovals }) => {
	const reviewedCount = (selectedUserIds || []).filter(userId =>
		(structureApprovals || []).some(
			item => String(item?.userId) === String(userId) && item?.decision,
		),
	).length

	return `${reviewedCount}/${selectedUserIds?.length || 0} ta`
}

const getExportLanguage = request => {
	const source = String(
		request.query?.lang || request.headers?.['accept-language'] || 'uz',
	).toLowerCase()
	return source.includes('ru') ? 'ru' : 'uz'
}

const preparePurchaseRequestPayload = async (request, context) => {
	if (request.method !== 'post') {
		return request
	}

	const payload = { ...(request.payload || {}) }
	const selectedUserIds = normalizeIds(payload.selectedUsers)
	const approverId = String(
		payload.approver || context.record?.param('approver') || '',
	).trim()
	const items = normalizePurchaseItems(payload.items)
	const comment = String(payload.comment || '').trim()
	const existingHistory = parseJsonArray(
		context.record?.param('approvalHistory'),
	)
	const existingSelectedUserIds = normalizeIds(
		context.record?.param('selectedUsers'),
	)
	const existingApproverId = String(
		context.record?.param('approver') || '',
	).trim()
	const existingItems = normalizePurchaseItems(context.record?.param('items'))
	const existingComment = String(context.record?.param('comment') || '').trim()
	const existingStructureApprovals = parseJsonArray(
		context.record?.param('structureApprovals'),
	).filter(item => selectedUserIds.includes(String(item?.userId || '')))
	const selectedUsersChanged =
		JSON.stringify(existingSelectedUserIds) !== JSON.stringify(selectedUserIds)
	const approverChanged = Boolean(
		context.record && existingApproverId !== approverId,
	)
	const requestContentChanged = Boolean(
		context.record &&
		(selectedUsersChanged ||
			approverChanged ||
			hasItemChanges(existingItems, items) ||
			existingComment !== comment),
	)
	const allStructuresReviewed =
		selectedUserIds.length > 0 &&
		selectedUserIds.every(userId =>
			existingStructureApprovals.some(
				item =>
					String(item?.userId) === String(userId) &&
					['tasdiqlandi', 'qisman tasdiqlandi'].includes(item?.decision),
			),
		)

	if (!selectedUserIds.length || !approverId || !items.length || !comment) {
		throw new ValidationError({
			selectedUsers: !selectedUserIds.length
				? { message: 'Kamida bitta tuzilmani tanlang' }
				: undefined,
			approver: !approverId
				? { message: 'Monitoring rolidagi tasdiqlovchini tanlang' }
				: undefined,
			comment: !comment ? { message: 'Izoh kiritilishi shart' } : undefined,
			items: !items.length
				? { message: 'Kamida bitta tovar qo‘shilishi kerak' }
				: undefined,
		})
	}

	const [users, approver] = await Promise.all([
		User.find({ _id: { $in: selectedUserIds }, role: 'tuzilmalar' })
			.select('displayName username organizationName firstName lastName')
			.lean(),
		User.findOne({ _id: approverId, role: 'monitoring' })
			.select('displayName username organizationName firstName lastName')
			.lean(),
	])

	if (users.length !== selectedUserIds.length) {
		throw new ValidationError({
			selectedUsers: {
				message: 'Faqat tuzilma rolidagi foydalanuvchilarni tanlang',
			},
		})
	}

	if (!approver) {
		throw new ValidationError({
			approver: {
				message: 'Tanlangan boshliq monitoring rolida bo‘lishi kerak',
			},
		})
	}

	const userMap = new Map(users.map(user => [String(user._id), user]))
	const orderedUsers = selectedUserIds
		.map(userId => userMap.get(String(userId)))
		.filter(Boolean)

	payload.selectedUsers = JSON.stringify(selectedUserIds)
	payload.selectedUserNames = orderedUsers.map(buildUserDisplayLabel).join(', ')
	payload.approver = String(approver._id)
	payload.approverName = buildUserDisplayLabel(approver)
	payload.comment = comment
	payload.items = JSON.stringify(items)
	payload.itemsSummary = buildItemsSummary(items)
	payload.createdBy =
		context.record?.param('createdBy') ||
		payload.createdBy ||
		context.currentAdmin?.id
	payload.requestNumber =
		context.record?.param('requestNumber') || payload.requestNumber

	const nextStructureApprovals = context.record
		? existingStructureApprovals
		: []
	const nextHistory = requestContentChanged
		? [
				...existingHistory,
				{
					userId: String(context.currentAdmin?.id || payload.createdBy || ''),
					userName: buildActorLabel(context.currentAdmin),
					role: context.currentAdmin?.role || '',
					stage: 'updated',
					decision: 'yangilandi',
					comment,
					decidedAt: new Date().toISOString(),
				},
			].slice(-60)
		: existingHistory

	payload.currentStage = context.record?.param('currentStage') || 'tuzilmalar'
	payload.status = context.record?.param('status') || 'ko‘rilmoqda'

	if (!context.record) {
		payload.currentStage = 'tuzilmalar'
		payload.status = 'ko‘rilmoqda'
	} else if (selectedUsersChanged || approverChanged) {
		payload.currentStage = allStructuresReviewed ? 'monitoring' : 'tuzilmalar'
		payload.status = allStructuresReviewed ? 'tasdiqlanmoqda' : 'ko‘rilmoqda'
	}

	payload.structureApprovals = JSON.stringify(nextStructureApprovals)
	payload.approvalHistory = JSON.stringify(nextHistory)
	payload.lastComment = context.record
		? String(context.record?.param('lastComment') || '').trim()
		: ''
	payload.approvalSummary = buildApprovalSummary({
		selectedUserIds,
		structureApprovals: nextStructureApprovals,
	})

	request.payload = payload
	return request
}

const handlePurchaseApproval = async (request, _response, context) => {
	const { currentAdmin, record, resource } = context

	if (!record) {
		return { record: null }
	}

	if (request.method !== 'post') {
		return {
			record: record.toJSON(currentAdmin),
		}
	}

	const decision = String(request.payload?.decision || '').trim()
	const comment = String(request.payload?.comment || '').trim()

	if (!DECISION_STATUSES.includes(decision)) {
		throw new ValidationError({
			decision: { message: 'Tasdiqlash qarorini tanlang' },
		})
	}

	if (decision !== 'tasdiqlandi' && !comment) {
		throw new ValidationError({
			comment: {
				message: 'Qisman tasdiqlash va rad etishda izoh kiritish shart',
			},
		})
	}

	const purchaseRequest = await PurchaseRequest.findById(getRecordId(record))

	if (!purchaseRequest) {
		return {
			record: record.toJSON(currentAdmin),
			notice: {
				message: 'Ariza topilmadi',
				type: 'error',
			},
		}
	}

	if (FINAL_APPROVAL_STATUSES.includes(purchaseRequest.status)) {
		throw new ValidationError({
			decision: {
				message: 'Bu ariza bo‘yicha tasdiqlash allaqachon yakunlangan',
			},
		})
	}

	if (!['tuzilmalar', 'monitoring'].includes(purchaseRequest.currentStage)) {
		throw new ValidationError({
			decision: {
				message: 'Bu ariza endi sotib olish jarayoniga o‘tgan',
			},
		})
	}

	const selectedUserIds = normalizeIds(purchaseRequest.selectedUsers)
	const isAssignedStructure = selectedUserIds.includes(String(currentAdmin?.id))
	const isAssignedApprover =
		String(purchaseRequest.approver || '') === String(currentAdmin?.id || '')

	if (
		purchaseRequest.currentStage === 'tuzilmalar' &&
		currentAdmin?.role !== 'admin' &&
		!(currentAdmin?.role === 'tuzilmalar' && isAssignedStructure)
	) {
		throw new ValidationError({
			decision: {
				message:
					'Bu bosqich faqat tanlangan tuzilma foydalanuvchilari uchun ochiq',
			},
		})
	}

	if (
		purchaseRequest.currentStage === 'monitoring' &&
		currentAdmin?.role !== 'admin' &&
		!(currentAdmin?.role === 'monitoring' && isAssignedApprover)
	) {
		throw new ValidationError({
			decision: {
				message: 'Bu bosqich faqat tasdiqlovchi boshliq uchun ochiq',
			},
		})
	}

	const users = await User.find({ _id: { $in: selectedUserIds } })
		.select('displayName username organizationName firstName lastName')
		.lean()
	const history = parseJsonArray(purchaseRequest.approvalHistory)
	const structureApprovals = parseJsonArray(purchaseRequest.structureApprovals)
	const existingBuyerOrderData = parseJsonObject(purchaseRequest.buyerOrderData)
	const historyEntry = {
		userId: String(currentAdmin?.id || ''),
		userName: buildActorLabel(currentAdmin),
		role: currentAdmin?.role || '',
		stage: purchaseRequest.currentStage || 'tuzilmalar',
		decision,
		comment,
		decidedAt: new Date().toISOString(),
	}

	if (purchaseRequest.currentStage === 'tuzilmalar') {
		const nextApprovals = structureApprovals.filter(
			item => String(item?.userId) !== String(currentAdmin?.id || ''),
		)
		nextApprovals.push(historyEntry)
		purchaseRequest.structureApprovals = JSON.stringify(nextApprovals)

		if (decision === 'rad etildi') {
			purchaseRequest.status = 'rad etildi'
			purchaseRequest.currentStage = 'yakunlandi'
			purchaseRequest.lastComment = comment
		} else {
			const allStructuresReviewed = selectedUserIds.every(userId =>
				nextApprovals.some(
					item =>
						String(item?.userId) === String(userId) &&
						['tasdiqlandi', 'qisman tasdiqlandi'].includes(item?.decision),
				),
			)

			purchaseRequest.currentStage = allStructuresReviewed
				? 'monitoring'
				: 'tuzilmalar'
			purchaseRequest.status = allStructuresReviewed
				? 'tasdiqlanmoqda'
				: 'ko‘rilmoqda'
			purchaseRequest.lastComment = comment || purchaseRequest.lastComment || ''
		}
	} else if (purchaseRequest.currentStage === 'monitoring') {
		if (decision === 'rad etildi') {
			purchaseRequest.currentStage = 'yakunlandi'
			purchaseRequest.status = 'rad etildi'
		} else {
			purchaseRequest.currentStage = 'sotib_olish'
			purchaseRequest.status = 'sotib olish kerak'
			purchaseRequest.buyerOrderData = JSON.stringify({
				...existingBuyerOrderData,
				originalItems: normalizePurchaseItems(
					existingBuyerOrderData.originalItems || purchaseRequest.items,
				),
				originalItemsSummary:
					String(existingBuyerOrderData.originalItemsSummary || '').trim() ||
					purchaseRequest.itemsSummary,
				workflowState: 'ready',
				notificationUpdatedAt: historyEntry.decidedAt,
				lastViewedAt: '',
				lastViewedBy: '',
				lastViewedRole: '',
			})
		}
		purchaseRequest.lastComment = comment || purchaseRequest.lastComment || ''
	}

	purchaseRequest.approvalHistory = JSON.stringify(
		[...history, historyEntry].slice(-60),
	)
	purchaseRequest.approvalSummary = buildApprovalSummary({
		selectedUserIds,
		structureApprovals: parseJsonArray(purchaseRequest.structureApprovals),
	})

	await purchaseRequest.save()

	const updatedRecord = await resource.findOne(String(purchaseRequest._id))

	const currentResourceId =
		typeof resource?.id === 'function'
			? resource.id()
			: resource?.id || 'PurchaseRequest'

	return {
		record: updatedRecord.toJSON(currentAdmin),
		notice: {
			message: 'Tasdiqlash qarori saqlandi',
			type: 'success',
		},
		redirectUrl: `/admin/resources/${currentResourceId}/records/${purchaseRequest._id}/show`,
	}
}

const pages = Object.fromEntries(
	customSidebarPages.map(page => [
		page.id,
		{
			label: page.label,
			icon: page.icon,
			component: Components.PlaceholderPage,
		},
	]),
)

const canAccessApprovalSection = ({ currentAdmin }) =>
	['admin', 'monitoring', 'tuzilmalar'].includes(currentAdmin?.role)

const canViewBuyerWorkspace = ({ currentAdmin }) =>
	['admin', 'monitoring', 'sotib_oluvchi'].includes(currentAdmin?.role)

const canEditBuyerWorkspace = ({ currentAdmin }) =>
	['admin', 'sotib_oluvchi'].includes(currentAdmin?.role)

const canViewDispatchWorkspace = context => canViewBuyerWorkspace(context)
const canEditDispatchWorkspace = context => canEditBuyerWorkspace(context)
const canViewReceiveWorkspace = ({ currentAdmin }) =>
	['admin', WAREHOUSE_ROLE].includes(currentAdmin?.role)
const canEditReceiveWorkspace = ({ currentAdmin }) =>
	['admin', WAREHOUSE_ROLE].includes(currentAdmin?.role)
const canViewWarehouseSection = ({ currentAdmin }) =>
	['admin', 'monitoring', 'sotib_oluvchi', WAREHOUSE_ROLE].includes(
		currentAdmin?.role,
	)
const canViewMyWarehouse = ({ currentAdmin }) =>
	['admin', WAREHOUSE_ROLE].includes(currentAdmin?.role)

const canAccessBuyerSection = context => canViewBuyerWorkspace(context)

const canProcessBuyerRequest = ({ currentAdmin, record }) => {
	if (!record || !currentAdmin) {
		return false
	}

	const status = String(record.param('status') || '')
	const currentStage = String(record.param('currentStage') || '')

	return (
		['admin', 'sotib_oluvchi'].includes(currentAdmin.role) &&
		BUYER_QUEUE_STAGES.includes(currentStage) &&
		BUYER_VISIBLE_STATUSES.includes(status) &&
		status !== 'sotib olinmoqda' &&
		status !== 'rad etildi'
	)
}

const canOpenBuyerOrderPage = ({ currentAdmin, record }) => {
	if (!record || !['admin', 'sotib_oluvchi'].includes(currentAdmin?.role)) {
		return false
	}

	const buyerOrderData = parseJsonObject(record.param('buyerOrderData'))

	return (
		String(record.param('status') || '') === 'sotib olinmoqda' &&
		String(record.param('currentStage') || '') === 'sotib_olish' &&
		String(buyerOrderData?.workflowState || 'ready') !== 'submitted'
	)
}

const canOpenDispatchPage = ({ currentAdmin, record }) => {
	if (!record || !['admin', 'sotib_oluvchi'].includes(currentAdmin?.role)) {
		return false
	}

	const buyerOrderData = parseJsonObject(record.param('buyerOrderData'))
	const warehouseDispatchData = parseJsonObject(
		record.param('warehouseDispatchData'),
	)

	return (
		['sotib olinmoqda', 'tasdiqlandi', 'tasdiqlangan'].includes(
			String(record.param('status') || ''),
		) &&
		['sotib_olish', 'yakunlandi'].includes(
			String(record.param('currentStage') || ''),
		) &&
		(String(buyerOrderData?.workflowState || '').trim() === 'submitted' ||
			Boolean(String(warehouseDispatchData?.dispatchedAt || '').trim()))
	)
}

const canOpenReceivePage = ({ currentAdmin, record }) => {
	if (!record || !['admin', WAREHOUSE_ROLE].includes(currentAdmin?.role)) {
		return false
	}

	const warehouseDispatchData = parseJsonObject(
		record.param('warehouseDispatchData'),
	)

	if (!String(warehouseDispatchData?.dispatchedAt || '').trim()) {
		return false
	}

	if (currentAdmin?.role === WAREHOUSE_ROLE) {
		return (
			String(warehouseDispatchData?.warehouseId || '').trim() ===
			String(currentAdmin?.id || '').trim()
		)
	}

	return true
}

const canReturnBuyerOrder = ({ currentAdmin, record }) => {
	if (currentAdmin?.role !== 'admin' || !record) {
		return false
	}

	const buyerOrderData = parseJsonObject(record.param('buyerOrderData'))

	return (
		String(record.param('status') || '') === 'sotib olinmoqda' &&
		String(record.param('currentStage') || '') === 'sotib_olish' &&
		String(buyerOrderData?.workflowState || '') === 'submitted'
	)
}

const applyOutgoingPurchaseFilters = async (request, context) => {
	if (
		hasGlobalPurchaseViewAccess(context.currentAdmin) ||
		!context.currentAdmin?.id
	) {
		return request
	}

	request.query = {
		...(request.query || {}),
		['filters.createdBy']: context.currentAdmin.id,
	}

	return request
}

const applyApprovalQueueFilters = async (request, context) => {
	if (context.currentAdmin?.role === 'tuzilmalar') {
		request.query = {
			...(request.query || {}),
			['filters.selectedUsers']: context.currentAdmin.id,
		}
	}

	return request
}

const removeOwnRequestsFromResponse = async (response, _request, context) => {
	if (!context.currentAdmin?.id || !Array.isArray(response?.records)) {
		return response
	}

	if (hasGlobalPurchaseViewAccess(context.currentAdmin)) {
		return response
	}

	const currentUserId = String(context.currentAdmin.id)
	const filteredRecords = response.records.filter(
		record => String(record?.params?.createdBy || '') !== currentUserId,
	)
	const removedCount = response.records.length - filteredRecords.length

	return {
		...response,
		records: filteredRecords,
		meta: response.meta
			? {
					...response.meta,
					total: Math.max(
						0,
						Number(response.meta.total || filteredRecords.length) -
							removedCount,
					),
				}
			: response.meta,
	}
}

const filterOutgoingPurchaseResponse = async (response, _request, context) => {
	if (!Array.isArray(response?.records) || !context.currentAdmin) {
		return response
	}

	if (hasGlobalPurchaseViewAccess(context.currentAdmin)) {
		return response
	}

	const currentUserId = String(context.currentAdmin.id || '')
	const filteredRecords = response.records.filter(
		record => String(record?.params?.createdBy || '') === currentUserId,
	)

	return {
		...response,
		records: filteredRecords,
		meta: response.meta
			? {
					...response.meta,
					total: filteredRecords.length,
				}
			: response.meta,
	}
}

const filterBuyerQueueResponse = async (response, _request, context) => {
	if (!Array.isArray(response?.records) || !context.currentAdmin) {
		return response
	}

	if (!canAccessBuyerSection(context)) {
		return {
			...response,
			records: [],
			meta: response.meta
				? {
						...response.meta,
						total: 0,
					}
				: response.meta,
		}
	}

	const filteredRecords = response.records.filter(record => {
		const status = String(record?.params?.status || '')
		const currentStage = String(record?.params?.currentStage || '')

		return (
			BUYER_VISIBLE_STATUSES.includes(status) &&
			BUYER_QUEUE_STAGES.includes(currentStage)
		)
	})

	return {
		...response,
		records: filteredRecords,
		meta: response.meta
			? {
					...response.meta,
					total: filteredRecords.length,
				}
			: response.meta,
	}
}

const handleBuyerWorkspace = async (request, _response, context) => {
	const { currentAdmin } = context
	const canView = canViewBuyerWorkspace(context)
	const canEdit = canEditBuyerWorkspace(context)
	const requestMethod = String(request?.method || 'get').toLowerCase()

	if (!canView) {
		return {
			availableUnits: ITEM_UNITS,
			canEdit: false,
			currentRole: currentAdmin?.role || '',
			records: [],
			notice: {
				message: 'Bu bo‘lim sizning rolingiz uchun yopiq',
				type: 'error',
			},
		}
	}

	if (requestMethod === 'post') {
		if (!canEdit) {
			throw new ValidationError({
				requestId: {
					message:
						'Monitoring foydalanuvchisi bu yerda faqat ma’lumotlarni ko‘ra oladi',
				},
			})
		}

		const requestId = String(request.payload?.requestId || '').trim()
		const supplierName = String(request.payload?.supplierName || '').trim()
		const items = normalizePurchaseItems(request.payload?.items)
		const documents = normalizeBuyerDocuments(request.payload?.documents)

		if (!requestId || !supplierName || !items.length) {
			throw new ValidationError({
				requestId: !requestId
					? { message: 'Ariza ID sini tanlang' }
					: undefined,
				supplierName: !supplierName
					? { message: 'Qayerdan olinayotganini kiriting' }
					: undefined,
				items: !items.length
					? { message: 'Kamida bitta tovar bo‘lishi kerak' }
					: undefined,
			})
		}

		const purchaseRequest = await PurchaseRequest.findById(requestId)
		const existingBuyerOrderData = parseJsonObject(
			purchaseRequest?.buyerOrderData,
		)
		const existingWarehouseDispatchData = parseJsonObject(
			purchaseRequest?.warehouseDispatchData,
		)

		if (!purchaseRequest) {
			throw new ValidationError({
				requestId: { message: 'Tanlangan ariza topilmadi' },
			})
		}

		if (String(existingWarehouseDispatchData?.dispatchedAt || '').trim()) {
			throw new ValidationError({
				requestId: {
					message: 'Bu buyurtma omborga jo‘natilgan, endi faqat ko‘rish mumkin',
				},
			})
		}

		if (
			!BUYER_WORKSPACE_STATUSES.includes(
				String(purchaseRequest.status || ''),
			) ||
			String(purchaseRequest.currentStage || '') !== 'sotib_olish'
		) {
			throw new ValidationError({
				requestId: {
					message: 'Bu ariza hali buyurtma qilish bosqichiga o‘tmagan',
				},
			})
		}

		const savedDocuments = []

		for (const document of documents) {
			if (!String(document.name || '').trim()) {
				throw new ValidationError({
					documents: { message: 'Har bir hujjatga nom kiriting' },
				})
			}

			savedDocuments.push(
				await saveBuyerDocument(document, purchaseRequest.requestNumber),
			)
		}

		const originalItems = normalizePurchaseItems(
			existingBuyerOrderData.originalItems || purchaseRequest.items,
		)
		const previousSupplierName = String(
			existingBuyerOrderData?.supplierName || '',
		).trim()
		const savedAt = new Date().toISOString()
		const isChanged =
			hasItemChanges(originalItems, items) ||
			(previousSupplierName && previousSupplierName !== supplierName)
		const buyerOrderData = {
			...existingBuyerOrderData,
			originalItems,
			originalItemsSummary:
				String(existingBuyerOrderData.originalItemsSummary || '').trim() ||
				purchaseRequest.itemsSummary,
			supplierName,
			items,
			documents: savedDocuments,
			savedAt,
			savedBy: buildActorLabel(currentAdmin),
			savedByRole: currentAdmin?.role || '',
			workflowState: 'submitted',
			submittedAt: savedAt,
			submittedBy: buildActorLabel(currentAdmin),
			changeNote: isChanged
				? `${buildActorLabel(currentAdmin)} buyurtma ma’lumotlarini o‘zgartirdi`
				: String(existingBuyerOrderData.changeNote || '').trim(),
			returnedAt: '',
			returnedBy: '',
			notificationUpdatedAt:
				String(existingBuyerOrderData.notificationUpdatedAt || '').trim() ||
				savedAt,
			lastViewedAt: savedAt,
			lastViewedBy: buildActorLabel(currentAdmin),
			lastViewedRole: currentAdmin?.role || '',
		}
		const history = parseJsonArray(purchaseRequest.approvalHistory)
		const historyEntry = {
			userId: String(currentAdmin?.id || ''),
			userName: buildActorLabel(currentAdmin),
			role: currentAdmin?.role || '',
			stage: 'sotib_olish',
			decision: 'buyurtma saqlandi',
			comment: `Manba: ${supplierName}`,
			decidedAt: savedAt,
		}

		purchaseRequest.items = JSON.stringify(items)
		purchaseRequest.itemsSummary = buildItemsSummary(items)
		purchaseRequest.status = 'sotib olinmoqda'
		purchaseRequest.currentStage = 'sotib_olish'
		purchaseRequest.buyerOrderData = JSON.stringify(buyerOrderData)
		purchaseRequest.buyerOrderSummary = buildBuyerOrderSummary(buyerOrderData)
		purchaseRequest.lastComment = buyerOrderData.changeNote
			? `${buyerOrderData.changeNote}. Manba: ${supplierName}`
			: `Buyurtma saqlandi. Manba: ${supplierName}`
		purchaseRequest.approvalHistory = JSON.stringify(
			[...history, historyEntry].slice(-60),
		)

		await purchaseRequest.save()
	}

	const queueRecords = await PurchaseRequest.find({
		status: {
			$in: [...BUYER_WORKSPACE_STATUSES, 'tasdiqlandi', 'tasdiqlangan'],
		},
		currentStage: { $in: ['sotib_olish', 'yakunlandi'] },
	})
		.sort({ updatedAt: -1, createdAt: -1 })
		.lean()

	const serializedRecords = sortBuyerWorkspaceRecords(
		queueRecords.map(serializeBuyerWorkspaceRecord),
	)
	const orderedRecords = sortBuyerWorkspaceRecords(
		serializedRecords.filter(
			record =>
				record?.buyerOrderData?.workflowState === 'submitted' ||
				Boolean(
					String(record?.warehouseDispatchData?.dispatchedAt || '').trim(),
				),
		),
	)
	const availableRecords = sortBuyerWorkspaceRecords(
		serializedRecords.filter(
			record =>
				record?.buyerOrderData?.workflowState !== 'submitted' &&
				!String(record?.warehouseDispatchData?.dispatchedAt || '').trim(),
		),
	)

	return {
		availableUnits: ITEM_UNITS,
		canEdit,
		currentRole: currentAdmin?.role || '',
		records: availableRecords,
		orderedRecords,
		notice:
			requestMethod === 'post'
				? {
						message: 'Buyurtma ma’lumotlari saqlandi',
						type: 'success',
					}
				: undefined,
	}
}

const handleBuyerSeen = async (request, _response, context) => {
	const { currentAdmin, record, resource } = context

	if (!record) {
		return { record: null }
	}

	const requestMethod = String(request?.method || 'get').toLowerCase()

	if (!['get', 'post'].includes(requestMethod)) {
		return {
			record: record.toJSON(currentAdmin),
		}
	}

	const purchaseRequest = await PurchaseRequest.findById(getRecordId(record))

	if (!purchaseRequest) {
		return {
			record: record.toJSON(currentAdmin),
			notice: {
				message: 'Ariza topilmadi',
				type: 'error',
			},
		}
	}

	if (
		!BUYER_QUEUE_STAGES.includes(String(purchaseRequest.currentStage || ''))
	) {
		throw new ValidationError({
			status: {
				message: 'Bu ariza hali sotib olish bosqichiga kelmagan',
			},
		})
	}

	if (String(purchaseRequest.status || '') === 'sotib olinmoqda') {
		const updatedRecord = await resource.findOne(String(purchaseRequest._id))
		return {
			record: updatedRecord.toJSON(currentAdmin),
			notice: {
				message: 'Ariza allaqachon sotib olinmoqda holatida',
				type: 'info',
			},
		}
	}

	const history = parseJsonArray(purchaseRequest.approvalHistory)
	const historyEntry = {
		userId: String(currentAdmin?.id || ''),
		userName: buildActorLabel(currentAdmin),
		role: currentAdmin?.role || '',
		stage: 'sotib_olish',
		decision: 'ko‘rildi',
		comment: 'Sotib olish jarayoniga o‘tkazildi',
		decidedAt: new Date().toISOString(),
	}
	const now = historyEntry.decidedAt

	const existingBuyerOrderData = parseJsonObject(purchaseRequest.buyerOrderData)
	const originalItems = normalizePurchaseItems(
		existingBuyerOrderData.originalItems || purchaseRequest.items,
	)

	purchaseRequest.currentStage = 'sotib_olish'
	purchaseRequest.status = 'sotib olinmoqda'
	purchaseRequest.buyerOrderData = JSON.stringify({
		...existingBuyerOrderData,
		originalItems,
		originalItemsSummary:
			String(existingBuyerOrderData.originalItemsSummary || '').trim() ||
			purchaseRequest.itemsSummary,
		workflowState: 'ready',
		submittedAt: '',
		submittedBy: '',
		changeNote: String(existingBuyerOrderData.changeNote || '').trim(),
		lastViewedAt: now,
		lastViewedBy: buildActorLabel(currentAdmin),
		lastViewedRole: currentAdmin?.role || '',
	})
	purchaseRequest.lastComment = historyEntry.comment
	purchaseRequest.approvalHistory = JSON.stringify(
		[...history, historyEntry].slice(-60),
	)

	await purchaseRequest.save()

	const updatedRecord = await resource.findOne(String(purchaseRequest._id))
	const currentResourceId =
		typeof resource?.id === 'function'
			? resource.id()
			: resource?.id || 'PurchaseBuyerQueue'

	return {
		record: updatedRecord.toJSON(currentAdmin),
		notice: {
			message: 'Ariza sotib olinmoqda holatiga o‘tkazildi',
			type: 'success',
		},
		redirectUrl: `/admin/resources/PurchaseBuyerQueue/records/${purchaseRequest._id}/show`,
	}
}

const handleMarkBuyerNotificationSeen = async (request, _response, context) => {
	const { currentAdmin, record, resource } = context

	if (!record) {
		return { record: null }
	}

	if (String(request?.method || 'get').toLowerCase() !== 'post') {
		return {
			record: record.toJSON(currentAdmin),
		}
	}

	if (!canEditBuyerWorkspace(context)) {
		throw new ValidationError({
			requestId: {
				message: 'Faqat sotib oluvchi yoki admin yangi belgini yopishi mumkin',
			},
		})
	}

	const purchaseRequest = await PurchaseRequest.findById(getRecordId(record))

	if (!purchaseRequest) {
		return {
			record: record.toJSON(currentAdmin),
			notice: {
				message: 'Ariza topilmadi',
				type: 'error',
			},
		}
	}

	if (
		!BUYER_QUEUE_STAGES.includes(String(purchaseRequest.currentStage || ''))
	) {
		const updatedRecord = await resource.findOne(String(purchaseRequest._id))
		return {
			record: updatedRecord.toJSON(currentAdmin),
		}
	}

	const buyerOrderData = parseJsonObject(purchaseRequest.buyerOrderData)
	purchaseRequest.buyerOrderData = JSON.stringify({
		...buyerOrderData,
		lastViewedAt: new Date().toISOString(),
		lastViewedBy: buildActorLabel(currentAdmin),
		lastViewedRole: currentAdmin?.role || '',
	})

	await purchaseRequest.save()

	const updatedRecord = await resource.findOne(String(purchaseRequest._id))

	return {
		record: updatedRecord.toJSON(currentAdmin),
	}
}

const handleOpenBuyerOrderPage = async (_request, _response, context) => ({
	record: context.record?.toJSON(context.currentAdmin),
	redirectUrl: `/admin/resources/PurchaseOrderWorkspace?recordId=${getRecordId(context.record)}`,
})

const handleOpenDispatchPage = async (_request, _response, context) => ({
	record: context.record?.toJSON(context.currentAdmin),
	redirectUrl: `/admin/resources/PurchaseDispatchWorkspace?recordId=${getRecordId(context.record)}`,
})

const handleOpenReceivePage = async (_request, _response, context) => ({
	record: context.record?.toJSON(context.currentAdmin),
	redirectUrl: `/admin/resources/PurchaseReceiveWorkspace?recordId=${getRecordId(context.record)}`,
})

const handleOpenBuyerWorkspacePage = async (_request, _response, context) => ({
	records: [],
	redirectUrl: '/admin/resources/PurchaseOrderWorkspace',
	notice: {
		message: 'Buyurtma qilish sahifasi ochildi',
		type: 'success',
	},
})

const handleBackToBuyerQueuePage = async () => ({
	records: [],
	redirectUrl: '/admin/resources/PurchaseBuyerQueue',
})

const handleRefreshBuyerWorkspacePage = async () => ({
	records: [],
	redirectUrl: '/admin/resources/PurchaseOrderWorkspace',
})

const handleDispatchWorkspace = async (request, _response, context) => {
	const { currentAdmin } = context
	const canView = canViewDispatchWorkspace(context)
	const canEdit = canEditDispatchWorkspace(context)
	const requestMethod = String(request?.method || 'get').toLowerCase()
	const warehouses = await loadWarehouseStructures()

	if (!canView) {
		return {
			canEdit: false,
			currentRole: currentAdmin?.role || '',
			warehouses,
			records: [],
			sentRecords: [],
			notice: {
				message: 'Bu bo‘lim sizning rolingiz uchun yopiq',
				type: 'error',
			},
		}
	}

	if (requestMethod === 'post') {
		if (!canEdit) {
			throw new ValidationError({
				requestId: {
					message:
						'Faqat sotib oluvchi yoki admin buyurtmani omborga jo‘nata oladi',
				},
			})
		}

		const requestId = String(request.payload?.requestId || '').trim()
		const warehouseId = String(request.payload?.warehouseId || '').trim()
		const warehouse = getWarehouseOption(warehouseId, warehouses)

		if (!requestId || !warehouse) {
			throw new ValidationError({
				requestId: !requestId
					? { message: 'Buyurtma arizasini tanlang' }
					: undefined,
				warehouseId: !warehouse
					? {
							message:
								'Tarkibiy tuzilma nomidan qaysi omborga jo‘natilishini tanlang',
						}
					: undefined,
			})
		}

		const purchaseRequest = await PurchaseRequest.findById(requestId)

		if (!purchaseRequest) {
			throw new ValidationError({
				requestId: { message: 'Tanlangan buyurtma topilmadi' },
			})
		}

		if (!isDispatchReadyRecord(purchaseRequest)) {
			throw new ValidationError({
				requestId: {
					message: 'Bu buyurtma hali omborga jo‘natishga tayyor emas',
				},
			})
		}

		const buyerOrderData = parseJsonObject(purchaseRequest.buyerOrderData)
		const itemsSnapshot = normalizePurchaseItems(
			buyerOrderData.items || purchaseRequest.items,
		)
		const now = new Date().toISOString()
		const history = parseJsonArray(purchaseRequest.approvalHistory)

		purchaseRequest.warehouseDispatchData = JSON.stringify({
			warehouseId: warehouse.id,
			warehouseName: warehouse.name,
			warehouseDescription: warehouse.description,
			dispatchedAt: now,
			dispatchedBy: buildActorLabel(currentAdmin),
			dispatchedByRole: currentAdmin?.role || '',
			receivedAt: '',
			receivedBy: '',
			receivedByRole: '',
			supplierName: String(buyerOrderData?.supplierName || '').trim(),
			itemsSnapshot,
		})
		purchaseRequest.warehouseDispatchSummary = `${warehouse.name} • ${itemsSnapshot.length} ta tovar • qabul kutilmoqda`
		purchaseRequest.status = 'tasdiqlandi'
		purchaseRequest.currentStage = 'yakunlandi'
		purchaseRequest.lastComment = `${warehouse.name} tarkibiy tuzilma omboriga jo‘natildi. Qabul qilinishi kutilmoqda`
		purchaseRequest.approvalHistory = JSON.stringify(
			[
				...history,
				{
					userId: String(currentAdmin?.id || ''),
					userName: buildActorLabel(currentAdmin),
					role: currentAdmin?.role || '',
					stage: 'yakunlandi',
					decision: 'omborga jo‘natildi',
					comment: `${warehouse.name} tarkibiy tuzilma omboriga jo‘natildi. Qabul qilinishi kutilmoqda`,
					decidedAt: now,
				},
			].slice(-60),
		)

		await purchaseRequest.save()
	}

	const workspaceRecords = await PurchaseRequest.find({
		status: { $in: ['sotib olinmoqda', 'tasdiqlandi', 'tasdiqlangan'] },
		currentStage: { $in: ['sotib_olish', 'yakunlandi'] },
	})
		.sort({ updatedAt: -1, createdAt: -1 })
		.lean()

	const serializedRecords = sortDispatchWorkspaceRecords(
		workspaceRecords.map(serializeDispatchWorkspaceRecord),
	)

	return {
		canEdit,
		currentRole: currentAdmin?.role || '',
		warehouses,
		records: serializedRecords.filter(record => isDispatchReadyRecord(record)),
		sentRecords: serializedRecords.filter(record =>
			String(record?.warehouseDispatchData?.dispatchedAt || '').trim(),
		),
		notice:
			requestMethod === 'post'
				? {
						message:
							'Buyurtma tanlangan tuzilma omboriga jo‘natildi. Endi tuzilma uni qabul qiladi',
						type: 'success',
					}
				: undefined,
	}
}

const handleReceiveWorkspace = async (request, _response, context) => {
	const { currentAdmin } = context
	const canView = canViewReceiveWorkspace(context)
	const canEdit = canEditReceiveWorkspace(context)
	const requestMethod = String(request?.method || 'get').toLowerCase()

	if (!canView) {
		return {
			canEdit: false,
			currentRole: currentAdmin?.role || '',
			records: [],
			receivedRecords: [],
			notice: {
				message: 'Bu bo‘lim sizning rolingiz uchun yopiq',
				type: 'error',
			},
		}
	}

	if (requestMethod === 'post') {
		if (!canEdit) {
			throw new ValidationError({
				requestId: {
					message:
						'Faqat admin yoki tuzilma foydalanuvchisi buyurtmani qabul qila oladi',
				},
			})
		}

		const requestId = String(request.payload?.requestId || '').trim()

		if (!requestId) {
			throw new ValidationError({
				requestId: { message: 'Qabul qilinadigan buyurtmani tanlang' },
			})
		}

		const purchaseRequest = await PurchaseRequest.findById(requestId)

		if (!purchaseRequest) {
			throw new ValidationError({
				requestId: { message: 'Tanlangan buyurtma topilmadi' },
			})
		}

		const dispatchData = getWarehouseDispatchData(purchaseRequest)

		if (!String(dispatchData?.dispatchedAt || '').trim()) {
			throw new ValidationError({
				requestId: {
					message: 'Bu buyurtma hali tuzilma omboriga jo‘natilmagan',
				},
			})
		}

		if (String(dispatchData?.receivedAt || '').trim()) {
			throw new ValidationError({
				requestId: {
					message: 'Bu buyurtma allaqachon omborga qabul qilingan',
				},
			})
		}

		if (!matchesWarehouseReceiver({ record: purchaseRequest, currentAdmin })) {
			throw new ValidationError({
				requestId: {
					message: 'Bu buyurtma boshqa tuzilma omboriga biriktirilgan',
				},
			})
		}

		const itemsSnapshot = normalizePurchaseItems(dispatchData?.itemsSnapshot)
		const now = new Date().toISOString()
		const history = parseJsonArray(purchaseRequest.approvalHistory)
		const warehouseName = String(dispatchData?.warehouseName || 'Ombor').trim()

		purchaseRequest.warehouseDispatchData = JSON.stringify({
			...dispatchData,
			receivedAt: now,
			receivedBy: buildActorLabel(currentAdmin),
			receivedByRole: currentAdmin?.role || '',
			itemsSnapshot,
		})
		purchaseRequest.warehouseDispatchSummary = `${warehouseName} • ${itemsSnapshot.length} ta tovar • qabul qilindi`
		purchaseRequest.lastComment = `${warehouseName} omboriga qabul qilindi`
		purchaseRequest.approvalHistory = JSON.stringify(
			[
				...history,
				{
					userId: String(currentAdmin?.id || ''),
					userName: buildActorLabel(currentAdmin),
					role: currentAdmin?.role || '',
					stage: 'yakunlandi',
					decision: 'omborga qabul qilindi',
					comment: `${warehouseName} omboriga qabul qilindi`,
					decidedAt: now,
				},
			].slice(-60),
		)

		await purchaseRequest.save()
	}

	const workspaceRecords = await PurchaseRequest.find({
		status: { $in: ['sotib olinmoqda', 'tasdiqlandi', 'tasdiqlangan'] },
		currentStage: { $in: ['yakunlandi'] },
	})
		.sort({ updatedAt: -1, createdAt: -1 })
		.lean()

	const serializedRecords = sortDispatchWorkspaceRecords(
		workspaceRecords.map(serializeDispatchWorkspaceRecord),
	)
	const visibleRecords = serializedRecords.filter(record =>
		matchesWarehouseReceiver({ record, currentAdmin }),
	)

	return {
		canEdit,
		currentRole: currentAdmin?.role || '',
		records: visibleRecords.filter(
			record => hasWarehouseDispatch(record) && !hasWarehouseReceipt(record),
		),
		receivedRecords: visibleRecords.filter(record =>
			hasWarehouseReceipt(record),
		),
		notice:
			requestMethod === 'post'
				? {
						message:
							'Buyurtma tuzilma omboriga qabul qilindi va ombor qoldig‘iga qo‘shildi',
						type: 'success',
					}
				: undefined,
	}
}

const handleWarehouseOverview = async (_request, _response, context) => {
	const { currentAdmin } = context

	if (!canViewWarehouseSection(context)) {
		return {
			currentRole: currentAdmin?.role || '',
			warehouses: [],
			notice: {
				message: 'Bu bo‘lim sizning rolingiz uchun yopiq',
				type: 'error',
			},
		}
	}

	const warehouses = await loadWarehouseStructures()
	const visibleWarehouses =
		currentAdmin?.role === WAREHOUSE_ROLE
			? [buildWarehouseOption(currentAdmin)]
			: warehouses
	const dispatchedRecords = await PurchaseRequest.find({
		currentStage: 'yakunlandi',
	})
		.sort({ updatedAt: -1, createdAt: -1 })
		.lean()

	return {
		currentRole: currentAdmin?.role || '',
		warehouses: buildWarehouseOverviewData(
			dispatchedRecords,
			visibleWarehouses,
		),
	}
}

const handleReturnBuyerOrder = async (request, _response, context) => {
	const { currentAdmin, record, resource } = context

	if (!record) {
		return { record: null }
	}

	if (String(request?.method || 'get').toLowerCase() !== 'post') {
		return {
			record: record.toJSON(currentAdmin),
		}
	}

	const purchaseRequest = await PurchaseRequest.findById(getRecordId(record))

	if (!purchaseRequest) {
		return {
			record: record.toJSON(currentAdmin),
			notice: {
				message: 'Ariza topilmadi',
				type: 'error',
			},
		}
	}

	const buyerOrderData = parseJsonObject(purchaseRequest.buyerOrderData)
	const now = new Date().toISOString()
	const history = parseJsonArray(purchaseRequest.approvalHistory)

	purchaseRequest.buyerOrderData = JSON.stringify({
		...buyerOrderData,
		workflowState: 'ready',
		returnedAt: now,
		returnedBy: buildActorLabel(currentAdmin),
		submittedAt: '',
		submittedBy: '',
		notificationUpdatedAt: now,
		lastViewedAt: '',
		lastViewedBy: '',
		lastViewedRole: '',
	})
	purchaseRequest.lastComment = 'Admin buyurtmani qayta ishlash uchun qaytardi'
	purchaseRequest.approvalHistory = JSON.stringify(
		[
			...history,
			{
				userId: String(currentAdmin?.id || ''),
				userName: buildActorLabel(currentAdmin),
				role: currentAdmin?.role || '',
				stage: 'sotib_olish',
				decision: 'qaytarildi',
				comment: 'Admin buyurtmani qayta ishlash uchun qaytardi',
				decidedAt: now,
			},
		].slice(-60),
	)

	await purchaseRequest.save()

	const updatedRecord = await resource.findOne(String(purchaseRequest._id))

	return {
		record: updatedRecord.toJSON(currentAdmin),
		notice: {
			message: 'Buyurtma admin tomonidan qaytarildi',
			type: 'success',
		},
		redirectUrl: `/admin/resources/PurchaseBuyerQueue/records/${purchaseRequest._id}/show`,
	}
}

async function startServer() {
	const app = express()
	const { uri, memory } = await connectDatabase()
	const defaultAdmin = await createDefaultAdmin()

	if (fs.existsSync(ADMINJS_CACHE_DIR)) {
		fs.rmSync(ADMINJS_CACHE_DIR, { recursive: true, force: true })
	}

	app.use(express.static('public'))

	const adminJs = new AdminJS({
		rootPath: '/admin',
		componentLoader,
		dashboard: {
			component: Components.Dashboard,
		},
		pages,
		branding: {
			companyName: 'Zaxira.uz',
			logo: false,
			favicon: '/favicon.svg',
			softwareBrothers: false,
			withMadeWithLove: false,
		},
		locale: {
			language: 'uz',
			availableLanguages: ['uz', 'ru'],
			translations: {
				uz: uzTranslations,
				ru: ruTranslations,
			},
		},
		resources: [
			{
				resource: PurchaseRequest,
				options: {
					name: 'Xarid uchun ariza',
					navigation: {
						name: 'Xarid',
						icon: 'ShoppingCart',
					},
					sort: {
						sortBy: 'updatedAt',
						direction: 'desc',
					},
					actions: {
						list: {
							isAccessible: ({ currentAdmin }) => Boolean(currentAdmin),
							before: applyOutgoingPurchaseFilters,
							after: filterOutgoingPurchaseResponse,
						},
						show: {
							component: Components.PurchaseRequestShow,
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: ({ currentAdmin }) => Boolean(currentAdmin),
						},
						new: {
							isAccessible: ({ currentAdmin }) => Boolean(currentAdmin),
							before: preparePurchaseRequestPayload,
						},
						edit: {
							isAccessible: context => canEditPurchaseRequest(context),
							isVisible: context => canEditPurchaseRequest(context),
							before: preparePurchaseRequestPayload,
						},
						downloadPdf: {
							actionType: 'record',
							icon: 'Download',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'pdf' },
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: context => canViewPurchaseRequest(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						downloadWord: {
							actionType: 'record',
							icon: 'FileText',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'word' },
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: context => canViewPurchaseRequest(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						delete: {
							isAccessible: ({ currentAdmin }) =>
								currentAdmin?.role === 'admin',
							isVisible: ({ currentAdmin }) => currentAdmin?.role === 'admin',
						},
						bulkDelete: {
							isAccessible: ({ currentAdmin }) =>
								currentAdmin?.role === 'admin',
							isVisible: ({ currentAdmin }) => currentAdmin?.role === 'admin',
						},
					},
					listProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'createdBy',
						'createdAt',
					],
					filterProperties: [
						'requestNumber',
						'selectedUserNames',
						'approver',
						'status',
						'currentStage',
						'createdBy',
						'createdAt',
					],
					editProperties: ['selectedUsers', 'comment', 'items'],
					showProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'comment',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'lastComment',
						'createdBy',
						'createdAt',
						'updatedAt',
					],
					properties: {
						requestNumber: {
							label: 'Ariza raqami',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						selectedUsers: {
							label: 'Tuzilmalar',
							components: {
								edit: Components.PurchaseUsersEdit,
							},
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: true,
							},
						},
						selectedUserNames: {
							label: 'Tanlangan tuzilmalar',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						approver: {
							label: 'Tasdiqlovchi',
							reference: 'User',
							isVisible: {
								list: false,
								filter: true,
								show: false,
								edit: false,
							},
						},
						approverName: {
							label: 'Tasdiqlovchi boshliq',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						comment: {
							label: 'Izoh',
							type: 'textarea',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							props: {
								rows: 8,
							},
						},
						items: {
							label: 'Tovarlar',
							components: {
								edit: Components.PurchaseItemsEdit,
							},
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: true,
							},
						},
						itemsSummary: {
							label: "Tovarlar ro'yxati",
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						status: {
							label: 'Holati',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: REQUEST_STATUSES.map(status => ({
								value: status,
								label: getStatusOptionLabel(status),
							})),
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						currentStage: {
							label: 'Tasdiqlash bosqichi',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: [
								{ value: 'tuzilmalar', label: 'Tuzilma' },
								{ value: 'monitoring', label: 'Boshliq' },
								{ value: 'yakunlandi', label: 'Yakunlandi' },
							],
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						approvalSummary: {
							label: 'Tasdiqlash jarayoni',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						lastComment: {
							label: 'Oxirgi izoh',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
						createdBy: {
							label: 'Arizani yaratgan',
							reference: 'User',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						createdAt: {
							label: 'Yaratilgan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						updatedAt: {
							label: 'Yangilangan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'PurchaseApprovalQueue',
					name: 'Arizalarni tasdiqlash',
					navigation: {
						name: 'Xarid',
						icon: 'ShoppingCart',
					},
					sort: {
						sortBy: 'updatedAt',
						direction: 'desc',
					},
					actions: {
						list: {
							isAccessible: context => canAccessApprovalSection(context),
							isVisible: context => canAccessApprovalSection(context),
							before: applyApprovalQueueFilters,
							after: removeOwnRequestsFromResponse,
						},
						show: {
							component: Components.PurchaseRequestShow,
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: context => canViewPurchaseRequest(context),
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						approveRequest: {
							actionType: 'record',
							icon: 'CheckCircle',
							component: Components.PurchaseApprovalAction,
							isAccessible: context => canReviewPurchaseRequest(context),
							isVisible: context => canReviewPurchaseRequest(context),
							handler: handlePurchaseApproval,
						},
						downloadPdf: {
							actionType: 'record',
							icon: 'Download',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'pdf' },
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: context => canViewPurchaseRequest(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						downloadWord: {
							actionType: 'record',
							icon: 'FileText',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'word' },
							isAccessible: context => canViewPurchaseRequest(context),
							isVisible: context => canViewPurchaseRequest(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
					listProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'createdBy',
						'createdAt',
					],
					filterProperties: [
						'requestNumber',
						'selectedUserNames',
						'approver',
						'status',
						'currentStage',
						'createdBy',
						'createdAt',
					],
					editProperties: [],
					showProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'comment',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'lastComment',
						'createdBy',
						'createdAt',
						'updatedAt',
					],
					properties: {
						requestNumber: {
							label: 'Ariza raqami',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						selectedUsers: {
							label: 'Tuzilmalar',
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: false,
							},
						},
						selectedUserNames: {
							label: 'Tanlangan tuzilmalar',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						approver: {
							label: 'Tasdiqlovchi',
							reference: 'User',
							isVisible: {
								list: false,
								filter: true,
								show: false,
								edit: false,
							},
						},
						approverName: {
							label: 'Tasdiqlovchi boshliq',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						comment: {
							label: 'Izoh',
							type: 'textarea',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							props: {
								rows: 8,
							},
						},
						items: {
							label: 'Tovarlar',
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: false,
							},
						},
						itemsSummary: {
							label: "Tovarlar ro'yxati",
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						status: {
							label: 'Holati',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: REQUEST_STATUSES.map(status => ({
								value: status,
								label: getStatusOptionLabel(status),
							})),
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						currentStage: {
							label: 'Tasdiqlash bosqichi',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: [
								{ value: 'tuzilmalar', label: 'Tuzilma' },
								{ value: 'monitoring', label: 'Boshliq' },
								{ value: 'yakunlandi', label: 'Yakunlandi' },
							],
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						approvalSummary: {
							label: 'Tasdiqlash jarayoni',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						lastComment: {
							label: 'Oxirgi izoh',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
						createdBy: {
							label: 'Arizani yaratgan',
							reference: 'User',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						createdAt: {
							label: 'Yaratilgan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						updatedAt: {
							label: 'Yangilangan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'PurchaseBuyerQueue',
					name: 'Sotib olish',
					navigation: {
						name: 'Xarid',
						icon: 'ShoppingBag',
					},
					sort: {
						sortBy: 'updatedAt',
						direction: 'desc',
					},
					actions: {
						list: {
							isAccessible: context => canAccessBuyerSection(context),
							isVisible: context => canAccessBuyerSection(context),
							after: filterBuyerQueueResponse,
						},
						openBuyerWorkspacePage: {
							actionType: 'resource',
							icon: 'ShoppingBag',
							label: 'Buyurtma qilish',
							component: false,
							isAccessible: context => canViewBuyerWorkspace(context),
							isVisible: context => canViewBuyerWorkspace(context),
							handler: handleOpenBuyerWorkspacePage,
						},
						show: {
							component: Components.PurchaseRequestShow,
							isAccessible: context => canAccessBuyerSection(context),
							isVisible: context => canAccessBuyerSection(context),
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						buyerWorkspace: {
							actionType: 'resource',
							isAccessible: context => canViewBuyerWorkspace(context),
							isVisible: false,
							handler: handleBuyerWorkspace,
						},
						markBuyerNotificationSeen: {
							actionType: 'record',
							component: false,
							isAccessible: context => canEditBuyerWorkspace(context),
							isVisible: false,
							handler: handleMarkBuyerNotificationSeen,
						},
						markBuyerSeen: {
							actionType: 'record',
							icon: 'Eye',
							label: 'Ko‘rdim, sotib olishga yo‘naltirish',
							guard: 'Ariza sotib olish jarayoniga o‘tkazilsinmi?',
							component: false,
							isAccessible: context => canProcessBuyerRequest(context),
							isVisible: context => canProcessBuyerRequest(context),
							handler: handleBuyerSeen,
						},
						openOrderPage: {
							actionType: 'record',
							icon: 'ShoppingBag',
							label: 'Buyurtma qilish',
							component: false,
							isAccessible: context => canOpenBuyerOrderPage(context),
							isVisible: context => canOpenBuyerOrderPage(context),
							handler: handleOpenBuyerOrderPage,
						},
						openDispatchPage: {
							actionType: 'record',
							icon: 'Truck',
							label: 'Buyurtmani jo‘natish',
							component: false,
							isAccessible: context => canOpenDispatchPage(context),
							isVisible: context => canOpenDispatchPage(context),
							handler: handleOpenDispatchPage,
						},
						openReceivePage: {
							actionType: 'record',
							icon: 'Package',
							label: 'Buyurtmani qabul qilish',
							component: false,
							isAccessible: context => canOpenReceivePage(context),
							isVisible: context => canOpenReceivePage(context),
							handler: handleOpenReceivePage,
						},
						returnBuyerOrder: {
							actionType: 'record',
							icon: 'Undo2',
							label: 'Qaytarish',
							guard: 'Buyurtmani qayta ishlash uchun qaytarilsinmi?',
							component: false,
							isAccessible: context => canReturnBuyerOrder(context),
							isVisible: context => canReturnBuyerOrder(context),
							handler: handleReturnBuyerOrder,
						},
						downloadPdf: {
							actionType: 'record',
							icon: 'Download',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'pdf' },
							isAccessible: context => canAccessBuyerSection(context),
							isVisible: context => canAccessBuyerSection(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						downloadWord: {
							actionType: 'record',
							icon: 'FileText',
							component: Components.PurchaseDownloadAction,
							custom: { format: 'word' },
							isAccessible: context => canAccessBuyerSection(context),
							isVisible: context => canAccessBuyerSection(context),
							handler: async (_request, _response, context) => ({
								record: context.record.toJSON(context.currentAdmin),
							}),
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
					listProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'createdBy',
						'createdAt',
					],
					filterProperties: [
						'requestNumber',
						'selectedUserNames',
						'approver',
						'status',
						'currentStage',
						'createdBy',
						'createdAt',
					],
					editProperties: [],
					showProperties: [
						'requestNumber',
						'selectedUserNames',
						'approverName',
						'comment',
						'itemsSummary',
						'status',
						'currentStage',
						'approvalSummary',
						'lastComment',
						'createdBy',
						'createdAt',
						'updatedAt',
					],
					properties: {
						requestNumber: {
							label: 'Ariza raqami',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						selectedUsers: {
							label: 'Tuzilmalar',
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: false,
							},
						},
						selectedUserNames: {
							label: 'Tanlangan tuzilmalar',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						approver: {
							label: 'Tasdiqlovchi',
							reference: 'User',
							isVisible: {
								list: false,
								filter: true,
								show: false,
								edit: false,
							},
						},
						approverName: {
							label: 'Tasdiqlovchi boshliq',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						comment: {
							label: 'Izoh',
							type: 'textarea',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							props: {
								rows: 8,
							},
						},
						items: {
							label: 'Tovarlar',
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: false,
							},
						},
						itemsSummary: {
							label: "Tovarlar ro'yxati",
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
						},
						status: {
							label: 'Holati',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: REQUEST_STATUSES.map(status => ({
								value: status,
								label: getStatusOptionLabel(status),
							})),
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						currentStage: {
							label: 'Tasdiqlash bosqichi',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							availableValues: [
								{ value: 'tuzilmalar', label: 'Tuzilma' },
								{ value: 'monitoring', label: 'Boshliq' },
								{ value: 'sotib_olish', label: 'Sotib olish' },
								{ value: 'yakunlandi', label: 'Yakunlandi' },
							],
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						approvalSummary: {
							label: 'Tasdiqlash jarayoni',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: false,
								show: true,
								edit: false,
							},
						},
						lastComment: {
							label: 'Oxirgi izoh',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
						createdBy: {
							label: 'Arizani yaratgan',
							reference: 'User',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						createdAt: {
							label: 'Yaratilgan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: true,
								filter: true,
								show: true,
								edit: false,
							},
						},
						updatedAt: {
							label: 'Yangilangan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'PurchaseOrderWorkspace',
					name: 'Buyurtma qilish',
					navigation: {
						name: 'Xarid',
						icon: 'ShoppingBag',
					},
					actions: {
						list: {
							component: Components.PurchaseOrderWorkspace,
							isAccessible: context => canViewBuyerWorkspace(context),
							isVisible: context => canViewBuyerWorkspace(context),
						},
						backToBuyerQueue: {
							actionType: 'resource',
							label: 'Sotib olish ro‘yxati',
							icon: 'ArrowLeft',
							component: false,
							isAccessible: context => canViewBuyerWorkspace(context),
							isVisible: context => canViewBuyerWorkspace(context),
							handler: handleBackToBuyerQueuePage,
						},
						refreshBuyerWorkspace: {
							actionType: 'resource',
							label: 'Yangilash',
							icon: 'RotateCw',
							component: false,
							isAccessible: context => canViewBuyerWorkspace(context),
							isVisible: context => canViewBuyerWorkspace(context),
							handler: handleRefreshBuyerWorkspacePage,
						},
						show: {
							isAccessible: () => false,
							isVisible: false,
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'PurchaseDispatchWorkspace',
					name: 'Buyurtmani jo‘natish',
					navigation: {
						name: 'Xarid',
						icon: 'Truck',
					},
					actions: {
						list: {
							component: Components.PurchaseDispatchWorkspace,
							isAccessible: context => canViewDispatchWorkspace(context),
							isVisible: context => canViewDispatchWorkspace(context),
						},
						dispatchWorkspace: {
							actionType: 'resource',
							component: false,
							isAccessible: context => canViewDispatchWorkspace(context),
							isVisible: false,
							handler: handleDispatchWorkspace,
						},
						refreshDispatchWorkspace: {
							actionType: 'resource',
							label: 'Yangilash',
							icon: 'RotateCw',
							component: false,
							isAccessible: context => canViewDispatchWorkspace(context),
							isVisible: context => canViewDispatchWorkspace(context),
							handler: async () => ({
								records: [],
								redirectUrl: '/admin/resources/PurchaseDispatchWorkspace',
							}),
						},
						show: {
							isAccessible: () => false,
							isVisible: false,
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'PurchaseReceiveWorkspace',
					name: 'Buyurtmani qabul qilish',
					navigation: {
						name: 'Xarid',
						icon: 'Package',
					},
					actions: {
						list: {
							component: Components.PurchaseReceiveWorkspace,
							isAccessible: context => canViewReceiveWorkspace(context),
							isVisible: context => canViewReceiveWorkspace(context),
						},
						receiveWorkspace: {
							actionType: 'resource',
							component: false,
							isAccessible: context => canViewReceiveWorkspace(context),
							isVisible: false,
							handler: handleReceiveWorkspace,
						},
						refreshReceiveWorkspace: {
							actionType: 'resource',
							label: 'Yangilash',
							icon: 'RotateCw',
							component: false,
							isAccessible: context => canViewReceiveWorkspace(context),
							isVisible: context => canViewReceiveWorkspace(context),
							handler: async () => ({
								records: [],
								redirectUrl: '/admin/resources/PurchaseReceiveWorkspace',
							}),
						},
						show: {
							isAccessible: () => false,
							isVisible: false,
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'WarehouseOverview',
					name: 'Omborlar',
					navigation: {
						name: 'Omborxona',
						icon: 'Archive',
					},
					actions: {
						list: {
							component: Components.WarehouseOverview,
							isAccessible: context => canViewWarehouseSection(context),
							isVisible: context => canViewWarehouseSection(context),
						},
						warehouseOverview: {
							actionType: 'resource',
							component: false,
							isAccessible: context => canViewWarehouseSection(context),
							isVisible: false,
							handler: handleWarehouseOverview,
						},
						refreshWarehouseOverview: {
							actionType: 'resource',
							label: 'Yangilash',
							icon: 'RotateCw',
							component: false,
							isAccessible: context => canViewWarehouseSection(context),
							isVisible: context => canViewWarehouseSection(context),
							handler: async () => ({
								records: [],
								redirectUrl: '/admin/resources/WarehouseOverview',
							}),
						},
						show: {
							isAccessible: () => false,
							isVisible: false,
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
				},
			},
			{
				resource: PurchaseRequest,
				options: {
					id: 'MyWarehouse',
					name: 'Mening omborim',
					navigation: {
						name: 'Omborxona',
						icon: 'Archive',
					},
					actions: {
						list: {
							component: Components.WarehouseOverview,
							isAccessible: context => canViewMyWarehouse(context),
							isVisible: context => canViewMyWarehouse(context),
						},
						warehouseOverview: {
							actionType: 'resource',
							component: false,
							isAccessible: context => canViewMyWarehouse(context),
							isVisible: false,
							handler: handleWarehouseOverview,
						},
						refreshMyWarehouse: {
							actionType: 'resource',
							label: 'Yangilash',
							icon: 'RotateCw',
							component: false,
							isAccessible: context => canViewMyWarehouse(context),
							isVisible: context => canViewMyWarehouse(context),
							handler: async () => ({
								records: [],
								redirectUrl: '/admin/resources/MyWarehouse',
							}),
						},
						show: {
							isAccessible: () => false,
							isVisible: false,
						},
						new: {
							isAccessible: () => false,
							isVisible: false,
						},
						edit: {
							isAccessible: () => false,
							isVisible: false,
						},
						delete: {
							isAccessible: () => false,
							isVisible: false,
						},
						bulkDelete: {
							isAccessible: () => false,
							isVisible: false,
						},
					},
				},
			},
			{
				resource: User,
				options: {
					name: 'Foydalanuvchilar',
					navigation: {
						name: 'Foydalanuvchilar',
						icon: 'User',
					},
					actions: {
						list: {
							isAccessible: ({ currentAdmin }) =>
								canSeeUsersSection(currentAdmin),
							isVisible: ({ currentAdmin }) => canSeeUsersSection(currentAdmin),
						},
						search: {
							isAccessible: ({ currentAdmin }) =>
								canSeeUsersSection(currentAdmin),
							isVisible: false,
						},
						picker: {
							actionType: 'resource',
							isAccessible: ({ currentAdmin }) => Boolean(currentAdmin),
							isVisible: false,
							handler: async () => {
								const records = await User.find()
									.select(
										'username organizationName firstName lastName displayName role',
									)
									.sort({ role: 1, organizationName: 1, firstName: 1 })
									.lean()

								return {
									records: records.map(user => ({
										id: String(user._id),
										title:
											user.displayName ||
											user.organizationName ||
											user.username,
										params: {
											username: user.username,
											organizationName: user.organizationName,
											firstName: user.firstName,
											lastName: user.lastName,
											displayName: user.displayName,
											role: user.role,
										},
									})),
								}
							},
						},
						show: {
							isAccessible: ({ currentAdmin, record }) =>
								canSeeUsersSection(currentAdmin) ||
								isOwnProfile({ currentAdmin, record }),
							isVisible: ({ currentAdmin, record }) =>
								canSeeUsersSection(currentAdmin) ||
								isOwnProfile({ currentAdmin, record }),
						},
						new: {
							isAccessible: ({ currentAdmin }) =>
								currentAdmin?.role === 'admin',
							isVisible: ({ currentAdmin }) => currentAdmin?.role === 'admin',
						},
						edit: {
							isAccessible: context => canEditUser(context),
							isVisible: context => canEditUser(context),
							before: async (request, context) => {
								if (request.method !== 'post') {
									return request
								}

								const payload = { ...(request.payload || {}) }

								if (!payload.password) {
									delete payload.password
								}

								if (context.currentAdmin?.role !== 'admin') {
									delete payload.role
								}

								request.payload = payload
								return request
							},
						},
						delete: {
							isAccessible: ({ currentAdmin }) =>
								currentAdmin?.role === 'admin',
							isVisible: ({ currentAdmin }) => currentAdmin?.role === 'admin',
						},
						bulkDelete: {
							isAccessible: ({ currentAdmin }) =>
								currentAdmin?.role === 'admin',
							isVisible: ({ currentAdmin }) => currentAdmin?.role === 'admin',
						},
					},
					listProperties: [
						'username',
						'organizationName',
						'firstName',
						'lastName',
						'phoneNumber',
						'role',
						'createdAt',
					],
					filterProperties: [
						'username',
						'organizationName',
						'firstName',
						'lastName',
						'phoneNumber',
						'role',
					],
					editProperties: [
						'username',
						'password',
						'organizationName',
						'firstName',
						'lastName',
						'phoneNumber',
						'role',
					],
					showProperties: [
						'username',
						'organizationName',
						'firstName',
						'lastName',
						'phoneNumber',
						'role',
						'createdAt',
						'updatedAt',
					],
					properties: {
						username: {
							label: 'Foydalanuvchi nomi',
						},
						password: {
							label: 'Parol',
							type: 'password',
							isVisible: {
								list: false,
								filter: false,
								show: false,
								edit: true,
							},
						},
						organizationName: {
							label: 'Tuzilma nomi',
						},
						firstName: {
							label: 'Ism',
						},
						lastName: {
							label: 'Familya',
						},
						displayName: {
							label: 'Foydalanuvchi / tuzilma',
							isTitle: true,
							isVisible: {
								list: false,
								filter: false,
								show: true,
								edit: false,
							},
						},
						phoneNumber: {
							label: 'Telefon raqami',
						},
						role: {
							label: 'Rol',
							availableValues: [
								{ value: 'admin', label: 'admin' },
								{ value: 'monitoring', label: 'monitoring' },
								{ value: 'tuzilmalar', label: 'tuzilmalar' },
								{ value: 'sotib_oluvchi', label: 'sotib_oluvchi' },
							],
						},
						createdAt: {
							label: 'Yaratilgan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								edit: false,
								list: true,
								show: true,
								filter: true,
							},
						},
						updatedAt: {
							label: 'Yangilangan sana',
							components: {
								list: Components.PurchaseRequestListValue,
								show: Components.PurchaseRequestListValue,
							},
							isVisible: {
								edit: false,
								list: false,
								show: true,
								filter: false,
							},
						},
					},
				},
			},
		],
	})

	if (process.env.NODE_ENV === 'production') {
		await adminJs.initialize()
	} else {
		await adminJs.watch()
	}

	const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
		adminJs,
		{
			authenticate: async (username, password) => {
				const user = await User.findOne({ username })

				if (!user) {
					return null
				}

				const isValid = await user.comparePassword(password)

				if (!isValid) {
					return null
				}

				return {
					id: String(user._id),
					username: user.username,
					role: user.role,
					firstName: user.firstName,
					lastName: user.lastName,
					organizationName: user.organizationName,
					phoneNumber: user.phoneNumber,
					title: `${user.firstName} ${user.lastName}`,
				}
			},
			cookieName: 'zaxira-session',
			cookiePassword: SESSION_SECRET,
		},
		null,
		{
			resave: false,
			saveUninitialized: false,
			rolling: true,
			secret: SESSION_SECRET,
			cookie: {
				httpOnly: true,
				secure: false,
				maxAge: SESSION_MAX_AGE,
			},
			name: 'zaxira-session',
		},
	)

	adminRouter.get(
		'/purchase-requests/:requestId/download/:format',
		async (req, res) => {
			const currentAdmin = req.session?.adminUser
			const { requestId, format } = req.params
			const lang = getExportLanguage(req)

			if (!currentAdmin) {
				return res.redirect('/admin/login')
			}

			const purchaseRequest = await PurchaseRequest.findById(requestId).lean()

			if (!purchaseRequest) {
				return res
					.status(404)
					.send(lang === 'ru' ? 'Заявка не найдена' : 'Ariza topilmadi')
			}

			const canAccess = canViewPurchaseRequest({
				currentAdmin,
				record: {
					param: key => purchaseRequest[key],
				},
			})

			if (!canAccess) {
				return res
					.status(403)
					.send(
						lang === 'ru'
							? 'У вас нет доступа к этому файлу'
							: 'Sizda bu faylni yuklab olish huquqi yo‘q',
					)
			}

			const createdByUser = purchaseRequest.createdBy
				? await User.findById(purchaseRequest.createdBy).lean()
				: null
			const createdByName = createdByUser
				? buildUserDisplayLabel(createdByUser)
				: currentAdmin?.title || currentAdmin?.username || ''
			const fileBase = buildPurchaseRequestFilename(purchaseRequest)

			if (format === 'pdf') {
				const pdfBuffer = await generatePurchaseRequestPdf(
					purchaseRequest,
					createdByName,
					lang,
				)
				res.setHeader('Content-Type', 'application/pdf')
				res.setHeader(
					'Content-Disposition',
					`attachment; filename="${fileBase}.pdf"`,
				)
				return res.send(pdfBuffer)
			}

			if (format === 'word' || format === 'docx') {
				const docxBuffer = await generatePurchaseRequestDocx(
					purchaseRequest,
					createdByName,
					lang,
				)
				res.setHeader(
					'Content-Type',
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				)
				res.setHeader(
					'Content-Disposition',
					`attachment; filename="${fileBase}.docx"`,
				)
				return res.send(docxBuffer)
			}

			return res
				.status(400)
				.send(
					lang === 'ru' ? 'Неверный формат файла' : 'Noto‘g‘ri fayl formati',
				)
		},
	)

	app.get('/', (_req, res) => {
		res.send(`
      <html lang="uz">
        <head>
          <meta charset="UTF-8" />
          <title>Zaxira.uz</title>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; background: linear-gradient(135deg, #eef4ff, #f8fbff); color: #1f2937; }
            .card { max-width: 820px; margin: 0 auto; background: white; padding: 32px; border-radius: 18px; box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
            .badge { display: inline-block; padding: 6px 12px; border-radius: 999px; background: #e0ecff; color: #1746a2; font-weight: 700; margin-bottom: 14px; }
            .lang-box { margin-top: 24px; padding-top: 18px; border-top: 1px solid #e5e7eb; }
            a { color: #1746a2; text-decoration: none; font-weight: bold; }
            code { background: #eef2ff; padding: 2px 6px; border-radius: 6px; }
            ul { line-height: 1.8; }
          </style>
        </head>
        <body>
          <div class="card">
            <span class="badge">Zaxira.uz</span>
            <h1>Omborxona nazorati uchun universal dastur</h1>
            <p>Ushbu tizim barcha rollar uchun yagona ish maydoni bo‘lib, ombor jarayonlarini tartibli va qulay boshqarishga xizmat qiladi.</p>
            <p><a href="/admin">Tizimga kirish</a></p>
            <ul>
              <li>Foydalanuvchi nomi: <code>${defaultAdmin.username}</code></li>
              <li>Parol: <code>${defaultAdmin.password}</code></li>
              <li>MongoDB turi: <code>${memory ? 'vaqtinchalik demo MongoDB' : 'tashqi MongoDB'}</code></li>
            </ul>

            <div class="lang-box">
              <h2>Русский</h2>
              <p><strong>Zaxira.uz</strong> — универсальная система для контроля склада и удобной работы всех ролей в одном месте.</p>
              <p><a href="/admin">Войти в систему</a></p>
            </div>
          </div>
        </body>
      </html>
    `)
	})

	app.use(adminJs.options.rootPath, adminRouter)

	app.listen(PORT, HOST, () => {
		console.log(`Dastur ishga tushdi: http://localhost:${PORT}`)
		console.log(`Tarmoq uchun manzil: http://<SIZNING-IP>:$PORT`)
		console.log(`Kirish sahifasi: http://localhost:${PORT}/admin`)
		console.log(`Tizim login: ${defaultAdmin.username}`)
		console.log(`Tizim parol: ${defaultAdmin.password}`)
		console.log(`Monitoring login: ${defaultAdmin.monitoring.username}`)
		console.log(`Monitoring parol: ${defaultAdmin.monitoring.password}`)
	})
}

startServer().catch(error => {
	console.error('Serverni ishga tushirishda xatolik:', error)
	process.exit(1)
})
