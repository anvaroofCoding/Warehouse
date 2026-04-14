const sidebarPages = [
	{
		id: 'mening-profilim',
		label: 'Mening profilim',
		icon: 'User',
		shortUz: 'Shaxsiy ma’lumotlaringizni ko‘rish va tahrirlash sahifasi.',
		shortRu: 'Страница для просмотра и редактирования личных данных.',
	},
	{
		id: 'chiqim-qilish',
		label: 'Chiqim qilish',
		icon: 'Send',
		shortUz: 'Mahsulot chiqimini rasmiylashtirish sahifasi.',
		shortRu: 'Страница оформления расхода товаров.',
		resourceLink: '/admin/resources/ChiqimQilish',
	},
	{
		id: 'kirim-chiqim-monitoringi',
		label: 'Chiqimlar monitoringi',
		icon: 'Activity',
		shortUz: 'Chiqimlar va qaytarilgan harakatlar monitoringi.',
		shortRu: 'Мониторинг расходов и возвращённых движений по складам.',
		resourceLink: '/admin/resources/InventoryHistory',
	},
	{
		id: 'xarid-uchun-ariza',
		label: 'Xarid',
		icon: 'ShoppingCart',
		shortUz:
			'Bir nechta foydalanuvchini tanlab, izoh va tovarlar bilan ariza yaratish bo‘limi.',
		shortRu:
			'Раздел для создания заявки с выбором нескольких пользователей, комментарием и товарами.',
		resourceLink: '/admin/resources/PurchaseRequest',
	},
	{
		id: 'arizalarni-tasdiqlash',
		label: 'Arizalarni tasdiqlash',
		icon: 'CheckCircle',
		shortUz: 'Kiritilgan arizalarni ko‘rib chiqish sahifasi.',
		shortRu: 'Страница для просмотра и подтверждения заявок.',
	},
	{
		id: 'foydalanuvchilar',
		label: 'Foydalanuvchilar',
		icon: 'User',
		shortUz: 'Tizim foydalanuvchilari bilan ishlash bo‘limi.',
		shortRu: 'Раздел для работы с пользователями системы.',
		resourceLink: '/admin/resources/User',
	},
	{
		id: 'transfer',
		label: 'Transfer',
		icon: 'Repeat',
		shortUz: 'Omborlar o‘rtasida ko‘chirish uchun tayyor sahifa.',
		shortRu: 'Готовая страница для перемещения между складами.',
	},
	{
		id: 'omborlar',
		label: 'Omborlar',
		icon: 'Archive',
		shortUz: 'Barcha omborlar ro‘yxati uchun bo‘lim.',
		shortRu: 'Раздел для списка всех складов.',
		resourceLink: '/admin/resources/WarehouseOverview',
	},
	{
		id: 'mening-omborim',
		label: 'Mening omborim',
		icon: 'Package',
		shortUz: 'Shaxsiy ombor ma’lumotlari uchun tayyor sahifa.',
		shortRu: 'Готовая страница для данных моего склада.',
	},
	{
		id: 'inventarizatsiya',
		label: 'Inventarizatsiya',
		icon: 'Tool',
		shortUz: 'Inventarizatsiya jarayoni uchun tayyor bo‘lim.',
		shortRu: 'Готовый раздел для инвентаризации.',
	},
	{
		id: 'boshqa-omborlar',
		label: 'Boshqa omborlar',
		icon: 'Layers',
		shortUz: 'Boshqa omborlar bilan ishlash sahifasi.',
		shortRu: 'Страница для работы с другими складами.',
	},
	{
		id: 'buyurtma-qilish',
		label: 'Buyurtma qilish',
		icon: 'ShoppingBag',
		shortUz: 'Yangi buyurtma yaratish uchun sahifa.',
		shortRu: 'Страница для создания нового заказа.',
		resourceLink: '/admin/resources/PurchaseOrderWorkspace',
	},
	{
		id: 'buyurtmani-jonatish',
		label: 'Buyurtmani jo‘natish',
		icon: 'Truck',
		shortUz: 'Buyurtmalarni jo‘natish uchun tayyor sahifa.',
		shortRu: 'Готовая страница для отправки заказов.',
		resourceLink: '/admin/resources/PurchaseDispatchWorkspace',
	},
]

const pageMap = Object.fromEntries(sidebarPages.map(page => [page.id, page]))
const customSidebarPages = sidebarPages.filter(
	page =>
		page.id !== 'foydalanuvchilar' &&
		page.id !== 'mening-profilim' &&
		page.id !== 'xarid-uchun-ariza' &&
		page.id !== 'arizalarni-tasdiqlash' &&
		page.id !== 'buyurtma-qilish' &&
		page.id !== 'buyurtmani-jonatish' &&
		page.id !== 'omborlar' &&
		page.id !== 'chiqim-qilish' &&
		page.id !== 'kirim-chiqim-monitoringi',
)

export { customSidebarPages, pageMap, sidebarPages }
