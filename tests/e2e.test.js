/**
 * Zaxira.uz — end-to-end testlar
 * Ishga tushirish: serverni yoqing (`npm start`), keyin `npm test`
 */

import assert from 'node:assert/strict'
import { before, describe, test } from 'node:test'

const BASE = 'http://localhost:3000'
const TEST_PASSWORD = 'Pass123!'

function extractCookie(res) {
	const raw = res.headers.get('set-cookie') || ''
	return raw.split(';')[0].trim()
}

async function login(username, password) {
	const res = await fetch(`${BASE}/admin/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({ email: username, password }).toString(),
		redirect: 'manual',
	})

	return {
		status: res.status,
		cookie: extractCookie(res),
	}
}

async function apiGet(path, cookie = '') {
	const res = await fetch(`${BASE}${path}`, {
		headers: {
			Accept: 'application/json',
			...(cookie ? { Cookie: cookie } : {}),
		},
		redirect: 'manual',
	})

	let body = null
	try {
		body = await res.json()
	} catch {}

	return { status: res.status, body }
}

async function apiPost(path, data, cookie = '') {
	const res = await fetch(`${BASE}${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			...(cookie ? { Cookie: cookie } : {}),
		},
		body: JSON.stringify(data),
		redirect: 'manual',
	})

	let body = null
	try {
		body = await res.json()
	} catch {}

	return { status: res.status, body }
}

let adminCookie = ''
let monitoringCookie = ''
let secondaryMonitoringCookie = ''
let tuzilmaCookie = ''
let buyerCookie = ''
let tuzilmaUserId = ''
let monitoringUserId = ''
let secondaryMonitoringUserId = ''
let createdRequestId = ''
let buyerReadyRequestId = ''
let autoMonitoringUsername = ''
let secondaryMonitoringUsername = ''
let autoTuzilmaUsername = ''
let autoBuyerUsername = ''
let buyerDispatchProductName = ''
let buyerDispatchFeatures = ''

before(async () => {
	const adminLogin = await login('admin', 'Admin123!')
	assert.equal(adminLogin.status, 302, 'Admin login ishlashi kerak')
	assert.ok(adminLogin.cookie.startsWith('zaxira-session='))
	adminCookie = adminLogin.cookie

	const stamp = Date.now().toString().slice(-6)
	autoMonitoringUsername = `automon_${stamp}`
	secondaryMonitoringUsername = `automon2_${stamp}`
	autoTuzilmaUsername = `autotuz_${stamp}`
	autoBuyerUsername = `autobuyer_${stamp}`
	buyerDispatchProductName = `Buyer uchun yangi tovar ${stamp}`
	buyerDispatchFeatures = `Test konfiguratsiyasi ${stamp}`

	const createMonitoring = await apiPost(
		'/admin/api/resources/User/actions/new',
		{
			username: autoMonitoringUsername,
			password: TEST_PASSWORD,
			organizationName: 'Auto Monitoring Test',
			firstName: 'Auto',
			lastName: 'Monitoring',
			phoneNumber: `+99891${stamp}`,
			role: 'monitoring',
		},
		adminCookie,
	)
	assert.ok([200, 201].includes(createMonitoring.status))
	assert.ok(
		createMonitoring.body?.record?.id,
		'Auto monitoring user yaratilishi kerak',
	)
	monitoringUserId = createMonitoring.body.record.id

	const monitoringLogin = await login(autoMonitoringUsername, TEST_PASSWORD)
	assert.equal(
		monitoringLogin.status,
		302,
		'Auto monitoring login ishlashi kerak',
	)
	assert.ok(monitoringLogin.cookie.startsWith('zaxira-session='))
	monitoringCookie = monitoringLogin.cookie

	const createSecondaryMonitoring = await apiPost(
		'/admin/api/resources/User/actions/new',
		{
			username: secondaryMonitoringUsername,
			password: TEST_PASSWORD,
			organizationName: 'Auto Monitoring Viewer Test',
			firstName: 'Auto',
			lastName: 'Monitoring Viewer',
			phoneNumber: `+99892${stamp}`,
			role: 'monitoring',
		},
		adminCookie,
	)
	assert.ok([200, 201].includes(createSecondaryMonitoring.status))
	assert.ok(
		createSecondaryMonitoring.body?.record?.id,
		'Ikkinchi monitoring user yaratilishi kerak',
	)
	secondaryMonitoringUserId = createSecondaryMonitoring.body.record.id

	const secondaryMonitoringLogin = await login(
		secondaryMonitoringUsername,
		TEST_PASSWORD,
	)
	assert.equal(
		secondaryMonitoringLogin.status,
		302,
		'Ikkinchi monitoring login ishlashi kerak',
	)
	assert.ok(secondaryMonitoringLogin.cookie.startsWith('zaxira-session='))
	secondaryMonitoringCookie = secondaryMonitoringLogin.cookie

	const createTuzilma = await apiPost(
		'/admin/api/resources/User/actions/new',
		{
			username: autoTuzilmaUsername,
			password: TEST_PASSWORD,
			organizationName: 'Auto Tuzilma Test',
			firstName: 'Auto',
			lastName: 'Tuzilma',
			phoneNumber: `+99893${stamp}`,
			role: 'tuzilmalar',
		},
		adminCookie,
	)
	assert.ok([200, 201].includes(createTuzilma.status))
	assert.ok(
		createTuzilma.body?.record?.id,
		'Auto tuzilma user yaratilishi kerak',
	)
	tuzilmaUserId = createTuzilma.body.record.id

	const createBuyer = await apiPost(
		'/admin/api/resources/User/actions/new',
		{
			username: autoBuyerUsername,
			password: TEST_PASSWORD,
			organizationName: 'Auto Buyer Test',
			firstName: 'Auto',
			lastName: 'Buyer',
			phoneNumber: `+99894${stamp}`,
			role: 'sotib_oluvchi',
		},
		adminCookie,
	)
	assert.ok([200, 201].includes(createBuyer.status))
	assert.ok(createBuyer.body?.record?.id, 'Auto buyer user yaratilishi kerak')

	const tuzilmaLogin = await login(autoTuzilmaUsername, TEST_PASSWORD)
	assert.equal(tuzilmaLogin.status, 302, 'Auto tuzilma login ishlashi kerak')
	assert.ok(tuzilmaLogin.cookie.startsWith('zaxira-session='))
	tuzilmaCookie = tuzilmaLogin.cookie

	const buyerLogin = await login(autoBuyerUsername, TEST_PASSWORD)
	assert.equal(buyerLogin.status, 302, 'Auto buyer login ishlashi kerak')
	assert.ok(buyerLogin.cookie.startsWith('zaxira-session='))
	buyerCookie = buyerLogin.cookie

	const usersRes = await apiGet(
		'/admin/api/resources/User/actions/list?perPage=200',
		adminCookie,
	)
	assert.equal(usersRes.status, 200)
	assert.ok(Array.isArray(usersRes.body?.records))
	assert.ok(
		usersRes.body.records.some(record => record.id === monitoringUserId),
		'Asosiy monitoring user ro‘yxatda topilishi kerak',
	)
	assert.ok(
		usersRes.body.records.some(
			record => record.id === secondaryMonitoringUserId,
		),
		'Ikkinchi monitoring user ro‘yxatda topilishi kerak',
	)
})

describe('Autentifikatsiya', () => {
	test('01 — Login sahifasi yuklanadi', async () => {
		const res = await fetch(`${BASE}/admin/login`)
		assert.equal(res.status, 200)
		const html = await res.text()
		assert.ok(
			html.includes('form') || html.includes('login') || html.includes('admin'),
		)
	})

	test("02 — Noto'g'ri parol bilan kirish rad etiladi", async () => {
		const { status, cookie } = await login('admin', 'XatoParol999!')
		assert.ok(status !== 302 || !cookie.startsWith('zaxira-session='))
	})

	test('03 — Admin muvaffaqiyatli kiradi', async () => {
		const { status, cookie } = await login('admin', 'Admin123!')
		assert.equal(status, 302)
		assert.ok(cookie.startsWith('zaxira-session='))
	})

	test('04 — Monitoring foydalanuvchi muvaffaqiyatli kiradi', async () => {
		const { status, cookie } = await login(
			autoMonitoringUsername,
			TEST_PASSWORD,
		)
		assert.equal(status, 302)
		assert.ok(cookie.startsWith('zaxira-session='))
	})

	test('05 — Tuzilma foydalanuvchi muvaffaqiyatli kiradi', async () => {
		const { status, cookie } = await login(autoTuzilmaUsername, TEST_PASSWORD)
		assert.equal(status, 302)
		assert.ok(cookie.startsWith('zaxira-session='))
	})

	test('06 — Sotib oluvchi muvaffaqiyatli kiradi', async () => {
		const { status, cookie } = await login(autoBuyerUsername, TEST_PASSWORD)
		assert.equal(status, 302)
		assert.ok(cookie.startsWith('zaxira-session='))
	})
})

describe('Rol asosida kirish huquqlari', () => {
	test("07 — Sessiyasiz API so'rov login sahifasiga yo'naltiriladi", async () => {
		const { status } = await apiGet('/admin/api/resources/User/actions/list')
		assert.equal(status, 302)
	})

	test('08 — Tuzilma sessiyasi foydalanuvchi endpointiga javob oladi', async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/User/actions/list',
			tuzilmaCookie,
		)
		assert.ok([200, 302, 403].includes(status))
		if (status === 200) {
			assert.ok(Array.isArray(body?.records))
		}
	})

	test('09 — Sotib oluvchi sessiyasi foydalanuvchi endpointiga javob oladi', async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/User/actions/list',
			buyerCookie,
		)
		assert.ok([200, 302, 403].includes(status))
		if (status === 200) {
			assert.ok(Array.isArray(body?.records))
		}
	})

	test("10 — Monitoring foydalanuvchilar ro'yxatini ko'radi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/User/actions/list',
			monitoringCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
	})

	test("11 — Admin foydalanuvchilar ro'yxatini ko'radi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/User/actions/list',
			adminCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
		assert.ok(body.records.length > 0)
	})
})

describe('Xarid arizalari', () => {
	test("12 — Bo'sh ariza yaratishda validatsiya xatosi qaytadi", async () => {
		const { status, body } = await apiPost(
			'/admin/api/resources/PurchaseRequest/actions/new',
			{},
			adminCookie,
		)
		assert.equal(status, 200)
		const errors = Object.keys(body?.record?.errors || {})
		assert.ok(errors.includes('selectedUsers'))
		assert.ok(errors.includes('approver'))
		assert.ok(errors.includes('comment'))
		assert.ok(errors.includes('items'))
	})

	test("13 — Admin to'liq ma'lumot bilan yangi ariza yaratadi", async () => {
		const { status, body } = await apiPost(
			'/admin/api/resources/PurchaseRequest/actions/new',
			{
				selectedUsers: JSON.stringify([tuzilmaUserId]),
				approver: monitoringUserId,
				comment: 'E2E test uchun yaratilgan ariza',
				items: JSON.stringify([
					{ productName: 'Sinov tovari', unit: 'dona', quantity: 2 },
					{ productName: 'Ikkinchi tovar', unit: 'kg', quantity: 5 },
				]),
			},
			adminCookie,
		)

		assert.ok([200, 201].includes(status))
		assert.ok(body?.record?.id)
		createdRequestId = body.record.id
	})

	test("14 — Admin arizalar ro'yxatini ko'ra oladi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseRequest/actions/list',
			adminCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
		assert.ok(body.records.length >= 1)
	})

	test("15 — Monitoring tasdiqlash navbatini ko'ra oladi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseApprovalQueue/actions/list',
			monitoringCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
	})

	test("16 — Tuzilma o'z arizasini yaratishi va ko'rishi mumkin", async () => {
		const createRes = await apiPost(
			'/admin/api/resources/PurchaseRequest/actions/new',
			{
				selectedUsers: JSON.stringify([tuzilmaUserId]),
				approver: monitoringUserId,
				comment: 'Tuzilma tomonidan yaratilgan test arizasi',
				items: JSON.stringify([
					{ productName: 'Tuzilma tovari', unit: 'litr', quantity: 10 },
				]),
			},
			tuzilmaCookie,
		)

		assert.ok([200, 201].includes(createRes.status))
		assert.ok(createRes.body?.record?.id)

		const listRes = await apiGet(
			'/admin/api/resources/PurchaseRequest/actions/list',
			tuzilmaCookie,
		)
		assert.equal(listRes.status, 200)
		assert.ok(Array.isArray(listRes.body?.records))
	})

	test("17 — Ariza tahrirlanganda old tasdiq ma'lumotlari saqlanib qoladi", async () => {
		const createRes = await apiPost(
			'/admin/api/resources/PurchaseRequest/actions/new',
			{
				selectedUsers: JSON.stringify([tuzilmaUserId]),
				approver: monitoringUserId,
				comment: 'Saqlanishi kerak bo‘lgan ariza',
				items: JSON.stringify([
					{ productName: 'Saqlanadigan tovar', unit: 'dona', quantity: 1 },
				]),
			},
			adminCookie,
		)

		assert.ok([200, 201].includes(createRes.status))
		const editableRequestId = createRes.body?.record?.id
		assert.ok(editableRequestId)

		const approveRes = await apiPost(
			`/admin/api/resources/PurchaseApprovalQueue/records/${editableRequestId}/approveRequest`,
			{
				decision: 'tasdiqlandi',
				comment: 'Birinchi tasdiq',
			},
			tuzilmaCookie,
		)

		assert.equal(approveRes.status, 200)
		assert.equal(approveRes.body?.record?.params?.currentStage, 'monitoring')
		assert.equal(approveRes.body?.record?.params?.approvalSummary, '1/1 ta')

		const editRes = await apiPost(
			`/admin/api/resources/PurchaseRequest/records/${editableRequestId}/edit`,
			{
				selectedUsers: JSON.stringify([tuzilmaUserId]),
				comment: 'Yangilangan izoh',
				items: JSON.stringify([
					{ productName: 'Saqlanadigan tovar', unit: 'dona', quantity: 5 },
				]),
			},
			adminCookie,
		)

		assert.equal(editRes.status, 200)
		assert.equal(editRes.body?.record?.params?.status, 'tasdiqlanmoqda')
		assert.equal(editRes.body?.record?.params?.currentStage, 'monitoring')
		assert.equal(editRes.body?.record?.params?.approvalSummary, '1/1 ta')
		assert.match(
			String(editRes.body?.record?.params?.structureApprovals || ''),
			/tasdiqlandi/,
		)
	})

	test('18 — Foydalanuvchi picker ishlaydi', async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/User/actions/picker',
			adminCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
		assert.ok(body.records.length > 0)
	})
})

describe('Sotib olish oqimi', () => {
	test("18 — Sotib oluvchi Buyurtma qilish ma'lumotlarini oladi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			buyerCookie,
		)
		assert.equal(status, 200)
		assert.equal(body?.canEdit, true)
		assert.ok(Array.isArray(body?.availableUnits))
		assert.ok(Array.isArray(body?.records))
		assert.ok(Array.isArray(body?.orderedRecords))
	})

	test('19 — Boshliq tasdiqlagan ariza sotib oluvchiga yangi holatda chiqadi', async () => {
		const createRes = await apiPost(
			'/admin/api/resources/PurchaseRequest/actions/new',
			{
				selectedUsers: JSON.stringify([tuzilmaUserId]),
				approver: monitoringUserId,
				comment: 'Buyer navbati uchun test ariza',
				items: JSON.stringify([
					{
						productName: buyerDispatchProductName,
						features: buyerDispatchFeatures,
						unit: 'dona',
						quantity: 3,
					},
				]),
			},
			adminCookie,
		)
		assert.ok([200, 201].includes(createRes.status))
		buyerReadyRequestId = createRes.body?.record?.id || ''
		assert.ok(buyerReadyRequestId)

		const structureApprove = await apiPost(
			`/admin/api/resources/PurchaseApprovalQueue/records/${buyerReadyRequestId}/approveRequest`,
			{
				decision: 'tasdiqlandi',
				comment: 'Tuzilma tasdiqladi',
			},
			tuzilmaCookie,
		)
		assert.equal(structureApprove.status, 200)
		assert.equal(
			structureApprove.body?.record?.params?.currentStage,
			'monitoring',
		)

		const monitoringApprove = await apiPost(
			`/admin/api/resources/PurchaseApprovalQueue/records/${buyerReadyRequestId}/approveRequest`,
			{
				decision: 'tasdiqlandi',
				comment: 'Boshliq tasdiqladi',
			},
			monitoringCookie,
		)
		assert.equal(monitoringApprove.status, 200)
		assert.equal(
			monitoringApprove.body?.record?.params?.currentStage,
			'sotib_olish',
		)
		assert.equal(
			monitoringApprove.body?.record?.params?.status,
			'sotib olish kerak',
		)

		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			buyerCookie,
		)
		assert.equal(status, 200)
		assert.equal(body?.canEdit, true)
		assert.ok(Array.isArray(body?.records))
		assert.equal(body?.records?.[0]?.id, buyerReadyRequestId)
		assert.equal(body?.records?.[0]?.buyerOrderData?.isNew, true)
	})

	test("20 — Buyer ko'rgandan keyin yangi belgisi yo'qoladi", async () => {
		const seenRes = await apiPost(
			`/admin/api/resources/PurchaseBuyerQueue/records/${buyerReadyRequestId}/markBuyerNotificationSeen`,
			{},
			buyerCookie,
		)
		assert.equal(seenRes.status, 200)

		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			buyerCookie,
		)
		assert.equal(status, 200)
		const viewedRecord = body?.records?.find(
			record => record.id === buyerReadyRequestId,
		)
		assert.ok(viewedRecord)
		assert.equal(viewedRecord?.buyerOrderData?.isNew, false)
	})

	test("21 — Monitoring Buyurtma qilish bo'limida faqat ko'rish huquqiga ega", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			monitoringCookie,
		)
		assert.equal(status, 200)
		assert.equal(body?.canEdit, false)
		assert.ok(Array.isArray(body?.availableUnits))
	})

	test('22 — Buyurtma qilish sahifasiga ochish actioni redirect qaytaradi', async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/openBuyerWorkspacePage',
			buyerCookie,
		)
		assert.equal(status, 200)
		assert.equal(body?.redirectUrl, '/admin/resources/PurchaseOrderWorkspace')
	})

	test("23 — Buyurtmani jo'natish sahifasi tayyor buyurtmalar va omborlarni qaytaradi", async () => {
		const saveOrderRes = await apiPost(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			{
				requestId: buyerReadyRequestId,
				supplierName: 'Texnomart',
				items: [
					{
						productName: buyerDispatchProductName,
						features: buyerDispatchFeatures,
						unit: 'dona',
						quantity: 3,
					},
				],
				documents: [],
			},
			buyerCookie,
		)
		assert.equal(saveOrderRes.status, 200)
		assert.equal(saveOrderRes.body?.notice?.type, 'success')

		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseDispatchWorkspace/actions/dispatchWorkspace',
			buyerCookie,
		)
		assert.equal(status, 200)
		assert.equal(body?.canEdit, true)
		assert.ok(Array.isArray(body?.records))
		assert.ok(body.records.some(record => record.id === buyerReadyRequestId))
		assert.ok(Array.isArray(body?.warehouses))
		assert.ok(body.warehouses.length > 0)
		assert.ok(
			body.warehouses.some(warehouse => warehouse.name === 'Auto Tuzilma Test'),
			'Omborlar ro‘yxati tarkibiy tuzilma nomlaridan shakllanishi kerak',
		)
	})

	test("24 — Buyurtmani jo'natish detail actioni to'g'ri sahifaga yo'naltiradi", async () => {
		const { status, body } = await apiGet(
			`/admin/api/resources/PurchaseBuyerQueue/records/${buyerReadyRequestId}/openDispatchPage`,
			buyerCookie,
		)
		assert.equal(status, 200)
		assert.equal(
			body?.redirectUrl,
			`/admin/resources/PurchaseDispatchWorkspace?recordId=${buyerReadyRequestId}`,
		)
	})

	test("25 — Jo'natilgan buyurtma tuzilma qabul sahifasiga tushadi va omborga hali qo'shilmaydi", async () => {
		const dispatchWorkspaceRes = await apiGet(
			'/admin/api/resources/PurchaseDispatchWorkspace/actions/dispatchWorkspace',
			buyerCookie,
		)
		assert.equal(dispatchWorkspaceRes.status, 200)

		const warehouseId =
			dispatchWorkspaceRes.body?.warehouses?.find(
				warehouse => warehouse.name === 'Auto Tuzilma Test',
			)?.id ||
			dispatchWorkspaceRes.body?.warehouses?.[0]?.id ||
			''
		assert.ok(warehouseId)

		const dispatchRes = await apiPost(
			'/admin/api/resources/PurchaseDispatchWorkspace/actions/dispatchWorkspace',
			{
				requestId: buyerReadyRequestId,
				warehouseId,
			},
			buyerCookie,
		)
		assert.equal(dispatchRes.status, 200)
		assert.equal(dispatchRes.body?.notice?.type, 'success')

		const receiveWorkspaceRes = await apiGet(
			'/admin/api/resources/PurchaseReceiveWorkspace/actions/receiveWorkspace',
			tuzilmaCookie,
		)
		assert.equal(receiveWorkspaceRes.status, 200)
		assert.equal(receiveWorkspaceRes.body?.canEdit, true)
		assert.ok(Array.isArray(receiveWorkspaceRes.body?.records))
		assert.ok(
			receiveWorkspaceRes.body.records.some(
				record => record.id === buyerReadyRequestId,
			),
		)

		const beforeReceiveWarehouseRes = await apiGet(
			'/admin/api/resources/WarehouseOverview/actions/warehouseOverview',
			tuzilmaCookie,
		)
		assert.equal(beforeReceiveWarehouseRes.status, 200)
		const beforeReceiveWarehouse =
			beforeReceiveWarehouseRes.body?.warehouses?.[0]
		assert.ok(beforeReceiveWarehouse)
		assert.ok(
			!beforeReceiveWarehouse.items?.some(
				item => item.productName === buyerDispatchProductName,
			),
		)
	})

	test("26 — Tuzilma buyurtmani qabul qilgach tovar ombor detailida ko'rinadi", async () => {
		const receiveWorkspaceRes = await apiGet(
			'/admin/api/resources/PurchaseReceiveWorkspace/actions/receiveWorkspace',
			tuzilmaCookie,
		)
		assert.equal(receiveWorkspaceRes.status, 200)
		const selectedRecord = receiveWorkspaceRes.body?.records?.find(
			record => record.id === buyerReadyRequestId,
		)
		assert.ok(selectedRecord)
		const receiveItems = (selectedRecord?.items || []).map(item => ({
			unitPrice: item?.unitPrice > 0 ? item.unitPrice : 1000,
		}))

		const receiveRes = await apiPost(
			'/admin/api/resources/PurchaseReceiveWorkspace/actions/receiveWorkspace',
			{
				requestId: buyerReadyRequestId,
				items: receiveItems,
			},
			tuzilmaCookie,
		)
		assert.equal(receiveRes.status, 200)
		assert.equal(receiveRes.body?.notice?.type, 'success')

		const { status, body } = await apiGet(
			'/admin/api/resources/WarehouseOverview/actions/warehouseOverview',
			tuzilmaCookie,
		)
		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.warehouses))
		const selectedWarehouse = body.warehouses[0]
		assert.ok(selectedWarehouse)
		assert.ok(Array.isArray(selectedWarehouse?.items))
		assert.ok(
			selectedWarehouse.items.some(
				item => item.productName === buyerDispatchProductName,
			),
		)
		assert.ok(
			selectedWarehouse.items.some(
				item => item.features === buyerDispatchFeatures && item.quantity === 3,
			),
		)
	})

	test("27 — Omborga jo'natilgan buyurtma Buyurtma qilishda faqat ko'rish uchun qoladi", async () => {
		const workspaceRes = await apiGet(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			buyerCookie,
		)
		assert.equal(workspaceRes.status, 200)

		const lockedRecord = workspaceRes.body?.orderedRecords?.find(
			record => record.id === buyerReadyRequestId,
		)
		assert.ok(lockedRecord)
		assert.ok(lockedRecord?.warehouseDispatchData?.dispatchedAt)

		const saveAfterDispatchRes = await apiPost(
			'/admin/api/resources/PurchaseBuyerQueue/actions/buyerWorkspace',
			{
				requestId: buyerReadyRequestId,
				supplierName: 'Boshqa manba',
				items: [
					{
						productName: buyerDispatchProductName,
						features: 'Qayta saqlash urinishi',
						unit: 'dona',
						quantity: 5,
					},
				],
				documents: [],
			},
			buyerCookie,
		)

		assert.equal(saveAfterDispatchRes.status, 200)
		assert.equal(
			saveAfterDispatchRes.body?.record?.errors?.requestId?.message,
			'Bu buyurtma omborga jo‘natilgan, endi faqat ko‘rish mumkin',
		)
	})
})

describe('Monitoring ko‘rish va tasdiqlash chegaralari', () => {
	test("21 — Monitoring umumiy xarid ro'yxatida barcha arizalarni ko'ra oladi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseRequest/actions/list?perPage=200',
			secondaryMonitoringCookie,
		)

		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
		assert.ok(
			body.records.some(record => record.id === createdRequestId),
			'Ikkinchi monitoring foydalanuvchi ham arizani umumiy ro‘yxatda ko‘rishi kerak',
		)
	})

	test("22 — Monitoring tasdiqlash navbatida barcha arizalarni ko'ra oladi", async () => {
		const { status, body } = await apiGet(
			'/admin/api/resources/PurchaseApprovalQueue/actions/list?perPage=200',
			secondaryMonitoringCookie,
		)

		assert.equal(status, 200)
		assert.ok(Array.isArray(body?.records))
		assert.ok(
			body.records.some(record => record.id === createdRequestId),
			'Ikkinchi monitoring foydalanuvchi ham arizani navbatda ko‘rishi kerak',
		)
	})

	test("23 — Monitoring o'ziga tegishli bo'lmagan arizani tasdiqlay olmaydi", async () => {
		const stageMove = await apiPost(
			`/admin/api/resources/PurchaseApprovalQueue/records/${createdRequestId}/approveRequest`,
			{
				decision: 'tasdiqlandi',
				comment: 'Tuzilma tasdig‘i',
			},
			tuzilmaCookie,
		)

		assert.equal(stageMove.status, 200)
		assert.equal(stageMove.body?.notice?.type, 'success')

		const { status, body } = await apiPost(
			`/admin/api/resources/PurchaseApprovalQueue/records/${createdRequestId}/approveRequest`,
			{
				decision: 'tasdiqlandi',
				comment: 'Begona monitoring tasdig‘i sinovi',
			},
			secondaryMonitoringCookie,
		)

		assert.equal(status, 200)
		assert.equal(body?.notice?.type, 'error')
		assert.equal(body?.notice?.message, 'forbiddenError')
		assert.equal(body?.record?.baseError?.type, 'ForbiddenError')
	})
})
