import {
	Box,
	Button,
	H2,
	Label,
	MessageBox,
	Pagination,
	Text,
} from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin, useNotice } from 'adminjs'
import { useEffect, useMemo, useState } from 'react'

const api = new ApiClient()

const inputStyle = {
	width: '100%',
	maxWidth: '100%',
	boxSizing: 'border-box',
	padding: '10px 12px',
	borderRadius: '10px',
	border: '1px solid #cbd5e1',
	fontSize: '14px',
	fontFamily: 'inherit',
	background: '#ffffff',
}

const textAreaStyle = {
	...inputStyle,
	minHeight: '92px',
	resize: 'vertical',
}

const cardStyle = {
	padding: '18px',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const newBadgeStyle = {
	display: 'inline-flex',
	alignItems: 'center',
	padding: '2px 10px',
	borderRadius: '999px',
	background: '#dcfce7',
	color: '#166534',
	fontSize: '12px',
	fontWeight: 700,
}

const queueTypeBadgeStyle = {
	display: 'inline-flex',
	alignItems: 'center',
	gap: '6px',
	padding: '4px 9px',
	borderRadius: '999px',
	fontSize: '11px',
	fontWeight: 700,
	border: '1px solid transparent',
	whiteSpace: 'nowrap',
	lineHeight: 1,
}

const statusDotStyle = color => ({
	width: '7px',
	height: '7px',
	borderRadius: '999px',
	background: color,
	flexShrink: 0,
})

const PAGE_SIZE = 20

const tableWrapStyle = {
	overflowX: 'auto',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const tableStyle = {
	width: '100%',
	borderCollapse: 'collapse',
	minWidth: '860px',
}

const tableHeadCellStyle = {
	padding: '12px 14px',
	textAlign: 'left',
	fontSize: '12px',
	fontWeight: 700,
	color: '#475569',
	background: '#f8fafc',
	borderBottom: '1px solid #e5e7eb',
	whiteSpace: 'nowrap',
}

const tableCellStyle = {
	padding: '12px 14px',
	fontSize: '14px',
	color: '#0f172a',
	borderBottom: '1px solid #eef2f7',
	verticalAlign: 'top',
}

const rowInteractiveStyle = {
	cursor: 'pointer',
	transition: 'background 0.15s ease',
}

const detailGridStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	gap: '12px',
}

const createDocumentRow = document => ({
	id:
		String(document?.id || '').trim() ||
		`doc-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	name: String(document?.name || '').trim(),
	fileName: String(document?.fileName || '').trim(),
	url: String(document?.url || '').trim(),
	mimeType: String(document?.mimeType || '').trim(),
	content: '',
})

const toDataUrl = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.onload = () => resolve(String(reader.result || ''))
		reader.onerror = () => reject(new Error('Faylni o‘qib bo‘lmadi'))
		reader.readAsDataURL(file)
	})

const formatDate = value => {
	if (!value) {
		return '—'
	}

	const date = new Date(value)

	if (Number.isNaN(date.getTime())) {
		return value
	}

	const pad = number => String(number).padStart(2, '0')
	return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

const GENERIC_VALIDATION_NOTICE = 'thereWereValidationErrors'

const extractWorkspaceMessage = (data, fallbackMessage = '') => {
	const fieldMessages = Object.values(data?.record?.errors || {})
		.map(error => String(error?.message || '').trim())
		.filter(Boolean)
	const baseErrorMessage = String(data?.record?.baseError?.message || '').trim()
	const noticeMessage = String(data?.notice?.message || '').trim()
	const messages = [
		...new Set([baseErrorMessage, ...fieldMessages].filter(Boolean)),
	]

	if (messages.length) {
		return messages.join('. ')
	}

	if (noticeMessage && noticeMessage !== GENERIC_VALIDATION_NOTICE) {
		return noticeMessage
	}

	return fallbackMessage
}

const normalizeOrderDocuments = documents =>
	documents
		.map(document => ({
			name: String(document?.name || '').trim(),
			fileName: String(document?.fileName || '').trim(),
			url: String(document?.url || '').trim(),
			mimeType: String(document?.mimeType || '').trim(),
			content: String(document?.content || '').trim(),
		}))
		.filter(
			document =>
				document.name || document.fileName || document.url || document.content,
		)

const getClientValidationMessage = ({
	requestId,
	supplierName,
	items,
	documents,
}) => {
	if (!String(requestId || '').trim()) {
		return 'Avval ariza ID sini tanlang'
	}

	if (!String(supplierName || '').trim()) {
		return 'Qayerdan olinayotganini kiriting'
	}

	const validItems = items.filter(item =>
		String(item?.productName || '').trim(),
	)

	if (!validItems.length) {
		return 'Kamida bitta tovar nomini kiriting'
	}

	if (documents.some(document => !String(document?.name || '').trim())) {
		return 'Har bir hujjatga nom kiriting'
	}

	return ''
}

const PurchaseOrderWorkspace = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const [records, setRecords] = useState([])
	const [orderedRecords, setOrderedRecords] = useState([])
	const [availableUnits, setAvailableUnits] = useState(['dona'])
	const [selectedRequestId, setSelectedRequestId] = useState('')
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [items, setItems] = useState([])
	const [supplierName, setSupplierName] = useState('')
	const [documents, setDocuments] = useState([createDocumentRow()])
	const [showCreateForm, setShowCreateForm] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [searchText, setSearchText] = useState('')

	const canView = ['admin', 'monitoring', 'sotib_oluvchi'].includes(
		currentAdmin?.role,
	)
	const canEdit = ['admin', 'sotib_oluvchi'].includes(currentAdmin?.role)

	const applySeenState = (list, requestId) =>
		list.map(record =>
			record.id === requestId
				? {
						...record,
						buyerOrderData: {
							...(record?.buyerOrderData || {}),
							isNew: false,
							lastViewedAt: new Date().toISOString(),
							lastViewedBy:
								currentAdmin?.title ||
								currentAdmin?.organizationName ||
								currentAdmin?.username ||
								'',
							lastViewedRole: currentAdmin?.role || '',
						},
					}
				: record,
		)

	const markRecordSeen = async requestId => {
		if (!canEdit || !requestId) {
			return
		}

		const targetRecord = [...records, ...orderedRecords].find(
			record => record.id === requestId,
		)

		if (targetRecord && !targetRecord?.buyerOrderData?.isNew) {
			return
		}

		try {
			await api.recordAction({
				resourceId: 'PurchaseBuyerQueue',
				recordId: requestId,
				actionName: 'markBuyerNotificationSeen',
				data: {},
			})
			setRecords(currentRecords => applySeenState(currentRecords, requestId))
			setOrderedRecords(currentRecords =>
				applySeenState(currentRecords, requestId),
			)
		} catch {
			// no-op: badge is informational and should not interrupt the workflow
		}
	}

	const openRequest = async record => {
		if (!record?.id) {
			return
		}

		await markRecordSeen(record.id)

		if (typeof window !== 'undefined') {
			window.location.assign(
				`/admin/resources/PurchaseOrderWorkspace?recordId=${record.id}`,
			)
		}
	}

	const applyRecord = record => {
		if (!record) {
			setItems([])
			setSupplierName('')
			setDocuments([createDocumentRow()])
			return
		}

		const savedItems = Array.isArray(record?.buyerOrderData?.items)
			? record.buyerOrderData.items
			: []
		const nextItems = (savedItems.length ? savedItems : record.items || []).map(
			item => ({
				productName: String(item?.productName || '').trim(),
				features: String(item?.features || '').trim(),
				unit: String(item?.unit || availableUnits[0] || 'dona').trim(),
				quantity: Math.max(1, Number(item?.quantity || 1)),
				unitPrice: Math.max(0, Number(item?.unitPrice || 0)),
			}),
		)

		const savedDocuments = Array.isArray(record?.buyerOrderData?.documents)
			? record.buyerOrderData.documents
			: []

		setItems(nextItems)
		setSupplierName(String(record?.buyerOrderData?.supplierName || '').trim())
		setDocuments(
			savedDocuments.length
				? savedDocuments.map(document => createDocumentRow(document))
				: [createDocumentRow()],
		)
	}

	const loadWorkspace = async preferredRequestId => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseBuyerQueue',
				actionName: 'buyerWorkspace',
			})

			const nextRecords = response?.data?.records || []
			const nextOrderedRecords = response?.data?.orderedRecords || []
			const nextUnits = response?.data?.availableUnits || ['dona']
			const queueRecords = [...nextRecords, ...nextOrderedRecords]
			const resolvedRequestId =
				preferredRequestId &&
				queueRecords.some(record => record.id === preferredRequestId)
					? preferredRequestId
					: selectedRequestId &&
						  queueRecords.some(record => record.id === selectedRequestId)
						? selectedRequestId
						: ''

			setAvailableUnits(nextUnits)
			setRecords(nextRecords)
			setOrderedRecords(nextOrderedRecords)
			setSelectedRequestId(resolvedRequestId)

			if (preferredRequestId) {
				setShowCreateForm(true)
			}

			if (resolvedRequestId) {
				const resolvedRecord =
					queueRecords.find(record => record.id === resolvedRequestId) || null
				applyRecord(resolvedRecord)

				if (preferredRequestId && resolvedRecord?.buyerOrderData?.isNew) {
					void markRecordSeen(resolvedRequestId)
				}
			} else {
				applyRecord(null)
			}
		} catch (error) {
			setRecords([])
			setOrderedRecords([])
			setSelectedRequestId('')
			applyRecord(null)
			addNotice({
				message: extractWorkspaceMessage(
					error?.response?.data,
					'Buyurtma sahifasi ma’lumotlarini yuklab bo‘lmadi',
				),
				type: 'error',
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const initialRequestId =
			typeof window !== 'undefined'
				? new URLSearchParams(window.location.search).get('recordId') || ''
				: ''

		loadWorkspace(initialRequestId)
	}, [])

	const combinedRecords = useMemo(() => {
		const recordMap = new Map()

		;[...records, ...orderedRecords].forEach(record => {
			if (record?.id) {
				recordMap.set(record.id, record)
			}
		})

		const getTimestamp = record => {
			const value =
				record?.buyerOrderData?.notificationUpdatedAt ||
				record?.buyerOrderData?.savedAt ||
				record?.updatedAt ||
				record?.createdAt ||
				0
			const parsed = new Date(value).getTime()
			return Number.isNaN(parsed) ? 0 : parsed
		}

		return Array.from(recordMap.values()).sort(
			(left, right) => getTimestamp(right) - getTimestamp(left),
		)
	}, [records, orderedRecords])

	const filteredRecords = useMemo(() => {
		const query = String(searchText || '')
			.trim()
			.toLowerCase()

		if (!query) {
			return combinedRecords
		}

		return combinedRecords.filter(record => {
			const itemText = (record?.items || [])
				.map(item => `${item?.productName || ''} ${item?.features || ''}`)
				.join(' ')
			const searchableText = [
				record?.requestNumber,
				record?.status,
				record?.selectedUserNames,
				record?.buyerOrderData?.supplierName,
				itemText,
			]
				.join(' ')
				.toLowerCase()

			return searchableText.includes(query)
		})
	}, [combinedRecords, searchText])

	const allQueueRecords = useMemo(() => combinedRecords, [combinedRecords])

	const selectedRecord = useMemo(
		() =>
			allQueueRecords.find(record => record.id === selectedRequestId) || null,
		[allQueueRecords, selectedRequestId],
	)
	const selectedRecordIsDispatched = Boolean(
		String(selectedRecord?.warehouseDispatchData?.dispatchedAt || '').trim(),
	)
	const canEditSelectedRecord = canEdit && !selectedRecordIsDispatched

	useEffect(() => {
		const totalPages = Math.max(
			1,
			Math.ceil(filteredRecords.length / PAGE_SIZE),
		)
		setCurrentPage(current => Math.min(current, totalPages))
	}, [filteredRecords.length])

	const updateItem = (index, field, value) => {
		setItems(currentItems =>
			currentItems.map((item, currentIndex) =>
				currentIndex === index
					? {
							...item,
							[field]:
								field === 'quantity'
									? Math.max(1, Number(value || 1))
									: field === 'unitPrice'
										? Math.max(0, Number(value || 0))
										: value,
						}
					: item,
			),
		)
	}

	const updateDocument = (index, field, value) => {
		setDocuments(currentDocuments =>
			currentDocuments.map((document, currentIndex) =>
				currentIndex === index
					? {
							...document,
							[field]: value,
						}
					: document,
			),
		)
	}

	const handleSelectRequest = async event => {
		const nextRequestId = String(event.target.value || '')
		const nextRecord =
			records.find(record => record.id === nextRequestId) || null

		setSelectedRequestId(nextRequestId)
		applyRecord(nextRecord)
		await markRecordSeen(nextRequestId)
	}

	const handleStartNewOrder = async () => {
		if (!records.length) {
			return
		}

		const nextRequestId = selectedRequestId || records[0]?.id || ''
		const nextRecord =
			records.find(record => record.id === nextRequestId) || null
		await openRequest(nextRecord)
	}

	const handleCloseNewOrder = () => {
		setShowCreateForm(false)
		setSelectedRequestId('')
		if (typeof window !== 'undefined') {
			window.location.assign('/admin/resources/PurchaseOrderWorkspace')
		}
	}

	const handleFileChange = async (index, event) => {
		if (!canEditSelectedRecord) {
			return
		}

		const file = event.target.files?.[0]

		if (!file) {
			return
		}

		try {
			const content = await toDataUrl(file)
			setDocuments(currentDocuments =>
				currentDocuments.map((document, currentIndex) =>
					currentIndex === index
						? {
								...document,
								fileName: file.name,
								mimeType: file.type,
								content,
							}
						: document,
				),
			)
		} catch (error) {
			addNotice({
				message: error.message || 'Faylni yuklashda xatolik bo‘ldi',
				type: 'error',
			})
		}
	}

	const addDocumentRow = () => {
		if (!canEditSelectedRecord) {
			return
		}

		setDocuments(currentDocuments => [...currentDocuments, createDocumentRow()])
	}

	const removeDocumentRow = index => {
		if (!canEditSelectedRecord) {
			return
		}
		setDocuments(currentDocuments => {
			const nextDocuments = currentDocuments.filter(
				(_, currentIndex) => currentIndex !== index,
			)
			return nextDocuments.length ? nextDocuments : [createDocumentRow()]
		})
	}

	const saveOrder = async () => {
		if (!canEditSelectedRecord) {
			if (selectedRecordIsDispatched) {
				addNotice({
					message:
						'Bu buyurtma omborga jo‘natilgan. Endi bu yerda faqat ko‘rish mumkin.',
					type: 'info',
				})
			}
			return
		}

		const normalizedDocuments = normalizeOrderDocuments(documents)
		const validationMessage = getClientValidationMessage({
			requestId: selectedRequestId,
			supplierName,
			items,
			documents: normalizedDocuments,
		})

		if (validationMessage) {
			addNotice({
				message: validationMessage,
				type: 'error',
			})
			return
		}

		setSaving(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseBuyerQueue',
				actionName: 'buyerWorkspace',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					requestId: selectedRequestId,
					supplierName: supplierName.trim(),
					items,
					documents: normalizedDocuments,
				},
			})

			const responseNotice = response?.data?.notice
			const responseMessage = extractWorkspaceMessage(response?.data)

			if (responseNotice?.type === 'error') {
				addNotice({
					...responseNotice,
					message:
						responseMessage ||
						'Buyurtma ma’lumotlarini tekshirib, qayta saqlang',
				})
				return
			}

			if (responseNotice) {
				addNotice({
					...responseNotice,
					message: responseMessage || responseNotice.message,
				})
			}

			setShowCreateForm(false)
			await loadWorkspace('')
		} catch (error) {
			addNotice({
				message: extractWorkspaceMessage(
					error?.response?.data,
					'Buyurtma ma’lumotlarini saqlab bo‘lmadi',
				),
				type: 'error',
			})
		} finally {
			setSaving(false)
		}
	}

	const renderQueueTable = ({ rows, emptyText }) => {
		if (!rows.length) {
			return <Text color='grey60'>{emptyText}</Text>
		}

		const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
		const safePage = Math.min(currentPage, totalPages)
		const startIndex = (safePage - 1) * PAGE_SIZE
		const paginatedRows = rows.slice(startIndex, startIndex + PAGE_SIZE)

		return (
			<Box>
				<Box style={tableWrapStyle}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={tableHeadCellStyle}>#</th>
								<th style={tableHeadCellStyle}>Status</th>
								<th style={tableHeadCellStyle}>Ariza</th>
								<th style={tableHeadCellStyle}>Tuzilmalar</th>
								<th style={tableHeadCellStyle}>Tovar / manba</th>
								<th style={tableHeadCellStyle}>Sana</th>
							</tr>
						</thead>
						<tbody>
							{paginatedRows.map((record, index) => {
								const rowDate =
									record?.buyerOrderData?.notificationUpdatedAt ||
									record?.buyerOrderData?.savedAt ||
									record?.updatedAt ||
									record?.createdAt
								const hasSavedOrder = Boolean(
									record?.buyerOrderData?.savedAt ||
									record?.buyerOrderData?.supplierName ||
									(Array.isArray(record?.buyerOrderData?.items) &&
										record.buyerOrderData.items.length),
								)
								const typeMeta = hasSavedOrder
									? {
											label: 'Qilingan',
											dotColor: '#0057d9',
											style: {
												...queueTypeBadgeStyle,
												background: '#eff6ff',
												color: '#0057d9',
												borderColor: '#b7d3ff',
											},
										}
									: {
											label: 'Qilinmagan',
											dotColor: '#dc2626',
											style: {
												...queueTypeBadgeStyle,
												background: '#fef2f2',
												color: '#dc2626',
												borderColor: '#fecaca',
											},
										}

								return (
									<tr
										key={record.id}
										onClick={() => void openRequest(record)}
										style={
											selectedRequestId === record.id
												? { ...rowInteractiveStyle, background: '#f8fbff' }
												: rowInteractiveStyle
										}
									>
										<td style={tableCellStyle}>{startIndex + index + 1}</td>
										<td style={tableCellStyle}>
											<Box display='flex' flexDirection='column' gap='xs'>
												<Box as='span' style={typeMeta.style}>
													<span style={statusDotStyle(typeMeta.dotColor)} />
													<span>{typeMeta.label}</span>
												</Box>
												{record?.buyerOrderData?.isNew ? (
													<Box as='span' style={newBadgeStyle}>
														Yangi
													</Box>
												) : null}
											</Box>
										</td>
										<td style={tableCellStyle}>
											<Text fontWeight='bold'>
												{record.requestNumber || record.id}
											</Text>
											<Text mt='xs' color='grey60'>
												{record.status || '—'}
											</Text>
										</td>
										<td style={tableCellStyle}>
											{record.selectedUserNames || '—'}
										</td>
										<td style={tableCellStyle}>
											<Text>
												{record?.buyerOrderData?.supplierName
													? `Manba: ${record.buyerOrderData.supplierName}`
													: `${record?.items?.length || 0} ta tovar`}
											</Text>
										</td>
										<td style={tableCellStyle}>{formatDate(rowDate)}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</Box>

				{totalPages > 1 ? (
					<Text mt='xl' textAlign='center'>
						<Pagination
							page={safePage}
							perPage={PAGE_SIZE}
							total={rows.length}
							onChange={page => setCurrentPage(page)}
						/>
					</Text>
				) : null}
			</Box>
		)
	}

	if (!canView) {
		return (
			<Box>
				<Box bg='white' p='xxl' borderRadius='xl'>
					<H2>Buyurtma qilish</H2>
					<MessageBox variant='danger' mt='xl'>
						<Text>Bu bo‘lim sizning rolingiz uchun yopiq.</Text>
					</MessageBox>
				</Box>
			</Box>
		)
	}

	return (
		<Box>
			<Box bg='white' p='xxl' borderRadius='xl'>
				<H2>Buyurtma qilish</H2>
				<Text mt='sm' color='grey60'>
					Jadval qatorini bossangiz, tanlangan ariza uchun buyurtma ish oynasi
					ochiladi. Buyurtma saqlangandan keyin uni alohida{' '}
					<strong>Buyurtmani jo‘natish</strong> sahifasidan omborga yuborasiz.
				</Text>
				<Box
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '16px 18px',
						marginTop: '16px',
						marginBottom: '20px',
					}}
				>
					<Button
						as='a'
						href='/admin/resources/PurchaseDispatchWorkspace'
						variant='outlined'
						style={{ minWidth: '170px', justifyContent: 'center' }}
					>
						Buyurtmani jo‘natish
					</Button>
					<Button
						as='a'
						href='/admin/resources/WarehouseOverview'
						variant='outlined'
						style={{ minWidth: '170px', justifyContent: 'center' }}
					>
						Omborlar
					</Button>
				</Box>

				{loading ? (
					<Text>Ma’lumotlar yuklanmoqda...</Text>
				) : (
					<Box style={{ display: 'grid', gap: '16px' }}>
						{showCreateForm ? null : (
							<Box style={cardStyle}>
								<Box
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									gap='default'
									flexWrap='wrap'
								>
									<Box>
										<Text fontWeight='bold'>Barcha buyurtmalar</Text>
										<Text mt='xs' color='grey60'>
											{searchText.trim()
												? `Filter natijasida ${filteredRecords.length} ta buyurtma topildi.`
												: combinedRecords.length
													? `Yangi, navbatdagi va saqlangan buyurtmalar bir jadvalda ${filteredRecords.length} ta holatda ko‘rinmoqda.`
													: 'Hozircha buyurtma va arizalar yo‘q.'}
										</Text>
									</Box>

									{combinedRecords.length ? (
										<Text color='grey60'>
											Qizil — buyurtma qilinmagan, ko‘k — buyurtma qilingan
										</Text>
									) : null}
								</Box>

								<input
									type='text'
									value={searchText}
									onChange={event => {
										setSearchText(event.target.value)
										setCurrentPage(1)
									}}
									placeholder='Ariza, tuzilma, manba yoki tovar nomi bo‘yicha filter'
									style={{ ...inputStyle, marginTop: '16px' }}
								/>

								<Box mt='lg'>
									{renderQueueTable({
										rows: filteredRecords,
										emptyText: searchText.trim()
											? 'Filter bo‘yicha buyurtma topilmadi.'
											: 'Buyurtmalar hali yo‘q.',
									})}
								</Box>
							</Box>
						)}

						{showCreateForm ? (
							<Box style={{ display: 'grid', gap: '16px' }}>
								<Box style={cardStyle}>
									<Box
										display='flex'
										justifyContent='space-between'
										alignItems='center'
										gap='default'
										flexWrap='wrap'
									>
										<Box>
											<Text fontWeight='bold'>Tanlangan ariza detali</Text>
											<Text mt='xs' color='grey60'>
												Tovarlar, manba va hujjatlar shu blok ichida aniq
												ko‘rinadi.
											</Text>
										</Box>

										<Box display='flex' gap='default' flexWrap='wrap'>
											{selectedRecord?.buyerOrderData?.isNew ? (
												<Box as='span' style={newBadgeStyle}>
													Yangi
												</Box>
											) : null}
											<Button
												type='button'
												variant='outlined'
												size='sm'
												onClick={handleCloseNewOrder}
											>
												Ro‘yxatga qaytish
											</Button>
										</Box>
									</Box>
								</Box>

								{selectedRecord ? (
									<>
										<Box style={detailGridStyle}>
											<Box style={cardStyle}>
												<Text fontWeight='bold' color='grey100'>
													Ariza raqami
												</Text>
												<Text mt='sm'>
													{selectedRecord.requestNumber || '—'}
												</Text>
											</Box>
											<Box style={cardStyle}>
												<Text fontWeight='bold' color='grey100'>
													Holati
												</Text>
												<Text mt='sm'>{selectedRecord.status || '—'}</Text>
											</Box>
											<Box style={cardStyle}>
												<Text fontWeight='bold' color='grey100'>
													Tuzilmalar
												</Text>
												<Text mt='sm'>
													{selectedRecord.selectedUserNames || '—'}
												</Text>
											</Box>
											<Box style={cardStyle}>
												<Text fontWeight='bold' color='grey100'>
													Manba
												</Text>
												<Text mt='sm'>
													{selectedRecord?.buyerOrderData?.supplierName ||
														'Kiritilmagan'}
												</Text>
											</Box>
										</Box>

										{selectedRecordIsDispatched ? (
											<MessageBox variant='info'>
												<Text>
													Bu buyurtma{' '}
													<strong>
														{selectedRecord?.warehouseDispatchData
															?.warehouseName || 'ombor'}
													</strong>{' '}
													ga{' '}
													{formatDate(
														selectedRecord?.warehouseDispatchData?.dispatchedAt,
													)}
													da jo‘natilgan. Bu yerda endi faqat ko‘rish mumkin.
												</Text>
											</MessageBox>
										) : null}

										<Box style={cardStyle}>
											<Text fontWeight='bold' mb='lg'>
												Tovar haqida ma’lumotlar
											</Text>
											<Box style={{ display: 'grid', gap: '14px' }}>
												{items.map((item, index) => (
													<Box
														key={`${selectedRequestId}-item-${index}`}
														p='lg'
														style={{
															border: '1px solid #dbe3f0',
															borderRadius: '12px',
															background: '#f8fbff',
														}}
													>
														<Text fontWeight='bold' mb='default'>
															Tovar #{index + 1}
														</Text>

														<Box style={{ display: 'grid', gap: '10px' }}>
															<input
																type='text'
																value={item.productName || ''}
																onChange={event =>
																	updateItem(
																		index,
																		'productName',
																		event.target.value,
																	)
																}
																style={inputStyle}
																disabled={!canEditSelectedRecord}
																placeholder='Tovar nomi'
															/>

															<textarea
																value={item.features || ''}
																onChange={event =>
																	updateItem(
																		index,
																		'features',
																		event.target.value,
																	)
																}
																style={textAreaStyle}
																disabled={!canEditSelectedRecord}
																placeholder='Xususiyatlari'
															/>

															<Box
																style={{
																	display: 'grid',
																	gridTemplateColumns:
																		'repeat(auto-fit, minmax(160px, 1fr))',
																	gap: '10px',
																}}
															>
																<select
																	value={item.unit || 'dona'}
																	onChange={event =>
																		updateItem(
																			index,
																			'unit',
																			event.target.value,
																		)
																	}
																	style={inputStyle}
																	disabled={!canEditSelectedRecord}
																>
																	{availableUnits.map(unit => (
																		<option key={unit} value={unit}>
																			{unit}
																		</option>
																	))}
																</select>

																<input
																	type='number'
																	min='1'
																	value={item.quantity ?? 1}
																	onChange={event =>
																		updateItem(
																			index,
																			'quantity',
																			event.target.value,
																		)
																	}
																	style={inputStyle}
																	disabled={!canEditSelectedRecord}
																	placeholder='Soni'
																/>

																<input
																	type='number'
																	min='0'
																	step='100'
																	value={item.unitPrice ?? 0}
																	onChange={event =>
																		updateItem(
																			index,
																			'unitPrice',
																			event.target.value,
																		)
																	}
																	style={inputStyle}
																	disabled={!canEditSelectedRecord}
																	placeholder='Dona narxi (UZS)'
																/>
															</Box>
														</Box>
													</Box>
												))}
											</Box>
										</Box>

										<Box style={cardStyle}>
											<Label required>Qayerdan olinmoqda</Label>
											<input
												type='text'
												value={supplierName}
												onChange={event => setSupplierName(event.target.value)}
												style={{ ...inputStyle, marginTop: '8px' }}
												disabled={!canEditSelectedRecord}
												placeholder='Masalan: Artel servis, Texnomart, mahalliy bozordan'
											/>
										</Box>

										<Box style={cardStyle}>
											<Text fontWeight='bold' mb='lg'>
												Hujjatlar
											</Text>
											<Box style={{ display: 'grid', gap: '14px' }}>
												{documents.map((document, index) => (
													<Box
														key={document.id}
														p='lg'
														style={{
															border: '1px solid #dbe3f0',
															borderRadius: '12px',
															background: '#f8fbff',
														}}
													>
														<input
															type='text'
															value={document.name}
															onChange={event =>
																updateDocument(
																	index,
																	'name',
																	event.target.value,
																)
															}
															style={inputStyle}
															disabled={!canEditSelectedRecord}
															placeholder='Hujjat nomi'
														/>

														<input
															type='file'
															onChange={event => handleFileChange(index, event)}
															style={{ marginTop: '10px', maxWidth: '100%' }}
															disabled={!canEditSelectedRecord}
														/>

														{document.fileName ? (
															<Text mt='sm'>
																Tanlangan fayl: {document.fileName}
															</Text>
														) : null}

														{document.url ? (
															<Box mt='sm'>
																<a
																	href={document.url}
																	target='_blank'
																	rel='noreferrer'
																>
																	Oldingi yuklangan hujjatni ochish
																</a>
															</Box>
														) : null}

														{canEdit ? (
															<Box mt='default'>
																<Button
																	type='button'
																	variant='outlined'
																	size='sm'
																	onClick={() => removeDocumentRow(index)}
																>
																	Qatorni olib tashlash
																</Button>
															</Box>
														) : null}
													</Box>
												))}
											</Box>

											{canEdit ? (
												<Box
													mt='lg'
													display='flex'
													gap='default'
													flexWrap='wrap'
												>
													<Button
														type='button'
														variant='outlined'
														onClick={addDocumentRow}
														disabled={!canEditSelectedRecord}
													>
														+ Hujjat qo‘shish
													</Button>
												</Box>
											) : null}
										</Box>

										{canEdit ? (
											<Box display='flex' gap='default' flexWrap='wrap'>
												<Button
													type='button'
													onClick={saveOrder}
													disabled={saving || !canEditSelectedRecord}
												>
													{selectedRecordIsDispatched
														? 'Omborga jo‘natilgan'
														: saving
															? 'Saqlanmoqda...'
															: 'Saqlash'}
												</Button>
											</Box>
										) : null}
									</>
								) : (
									<MessageBox variant='info'>
										<Text>Jadvaldan ariza tanlang.</Text>
									</MessageBox>
								)}
							</Box>
						) : null}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default PurchaseOrderWorkspace
