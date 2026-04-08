import User from '../models/User.js'

const DEFAULT_DEMO_PASSWORD = process.env.DEMO_USER_PASSWORD || 'Demo123!'

const buildDisplayName = user =>
	[
		user.organizationName,
		user.username ? `@${user.username}` : '',
		`${user.firstName} ${user.lastName}`.trim(),
	]
		.filter(Boolean)
		.join(' — ')

const demoUsers = [
	{
		username: 'monitoring02',
		organizationName: 'Monitoring markazi 2',
		firstName: 'Dilshod',
		lastName: 'Rahimov',
		phoneNumber: '+998911111112',
		role: 'monitoring',
	},
	{
		username: 'monitoring03',
		organizationName: 'Monitoring markazi 3',
		firstName: 'Madina',
		lastName: 'Ortiqova',
		phoneNumber: '+998911111113',
		role: 'monitoring',
	},
	{
		username: 'monitoring04',
		organizationName: 'Monitoring markazi 4',
		firstName: 'Rustam',
		lastName: 'Shukurov',
		phoneNumber: '+998911111114',
		role: 'monitoring',
	},
	{
		username: 'tuzilma01',
		organizationName: 'Toshkent ta’minot bo‘limi',
		firstName: 'Aziz',
		lastName: 'Karimov',
		phoneNumber: '+998930000001',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma02',
		organizationName: 'Samarqand filial ombori',
		firstName: 'Sardor',
		lastName: 'Toshev',
		phoneNumber: '+998930000002',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma03',
		organizationName: 'Buxoro texnik markazi',
		firstName: 'Diyor',
		lastName: 'Ibrohimov',
		phoneNumber: '+998930000003',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma04',
		organizationName: 'Namangan servis guruhi',
		firstName: 'Shahnoza',
		lastName: 'Xudoyberdiyeva',
		phoneNumber: '+998930000004',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma05',
		organizationName: 'Andijon logistika bo‘limi',
		firstName: 'Bekzod',
		lastName: 'Mamatov',
		phoneNumber: '+998930000005',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma06',
		organizationName: 'Farg‘ona nazorat sektori',
		firstName: 'Malika',
		lastName: 'Sodiqova',
		phoneNumber: '+998930000006',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma07',
		organizationName: 'Qarshi hududiy markazi',
		firstName: 'Jahongir',
		lastName: 'Nazarov',
		phoneNumber: '+998930000007',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma08',
		organizationName: 'Jizzax xarid bo‘limi',
		firstName: 'Munisa',
		lastName: 'Yo‘ldosheva',
		phoneNumber: '+998930000008',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma09',
		organizationName: 'Xorazm ombor guruhi',
		firstName: 'Otabek',
		lastName: 'Ruzmetov',
		phoneNumber: '+998930000009',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma10',
		organizationName: 'Surxondaryo ta’minot markazi',
		firstName: 'Nilufar',
		lastName: 'Ergasheva',
		phoneNumber: '+998930000010',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma11',
		organizationName: 'Sirdaryo ishlab chiqarish bo‘limi',
		firstName: 'Shoxrux',
		lastName: 'Qurbonov',
		phoneNumber: '+998930000011',
		role: 'tuzilmalar',
	},
	{
		username: 'tuzilma12',
		organizationName: 'Navoiy metall guruhi',
		firstName: 'Fotima',
		lastName: 'Hasanova',
		phoneNumber: '+998930000012',
		role: 'tuzilmalar',
	},
	{
		username: 'sotib01',
		organizationName: 'Markaziy xarid bo‘limi',
		firstName: 'Alisher',
		lastName: 'Qodirov',
		phoneNumber: '+998940000001',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib02',
		organizationName: 'Toshkent xarid bo‘limi',
		firstName: 'Zarnigor',
		lastName: 'Yusupova',
		phoneNumber: '+998940000002',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib03',
		organizationName: 'Samarqand xarid bo‘limi',
		firstName: 'Ulug‘bek',
		lastName: 'Raupov',
		phoneNumber: '+998940000003',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib04',
		organizationName: 'Buxoro xarid bo‘limi',
		firstName: 'Sevara',
		lastName: 'Nasrullayeva',
		phoneNumber: '+998940000004',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib05',
		organizationName: 'Andijon xarid bo‘limi',
		firstName: 'Komil',
		lastName: 'Turg‘unov',
		phoneNumber: '+998940000005',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib06',
		organizationName: 'Farg‘ona xarid bo‘limi',
		firstName: 'Maftuna',
		lastName: 'Jo‘rayeva',
		phoneNumber: '+998940000006',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib07',
		organizationName: 'Qarshi xarid bo‘limi',
		firstName: 'Sherzod',
		lastName: 'Abdullayev',
		phoneNumber: '+998940000007',
		role: 'sotib_oluvchi',
	},
	{
		username: 'sotib08',
		organizationName: 'Navoiy xarid bo‘limi',
		firstName: 'Gulnoza',
		lastName: 'Ismatova',
		phoneNumber: '+998940000008',
		role: 'sotib_oluvchi',
	},
]

async function ensureUser(userData, password = DEFAULT_DEMO_PASSWORD) {
	let user = await User.findOne({ username: userData.username })

	if (!user) {
		user = await User.create({
			...userData,
			password,
		})
		console.log(`Demo foydalanuvchi yaratildi: ${userData.username}`)
	} else if (password) {
		const isPasswordValid = await user.comparePassword(password)

		if (!isPasswordValid) {
			user.password = password
			await user.save()
			console.log(`Demo foydalanuvchi paroli yangilandi: ${userData.username}`)
		}
	}

	const displayName = buildDisplayName(user)
	if (user.displayName !== displayName) {
		await User.updateOne({ _id: user._id }, { $set: { displayName } })
	}

	return user
}

export default async function createDefaultAdmin() {
	const username = process.env.ADMIN_LOGIN || 'admin'
	const password = process.env.ADMIN_PASSWORD || 'Admin123!'
	const monitoringUsername = process.env.MONITORING_LOGIN || 'monitoring'
	const monitoringPassword = process.env.MONITORING_PASSWORD || 'Monitoring123!'

	const adminUser = await ensureUser(
		{
			username,
			organizationName: 'Bosh ofis',
			firstName: 'Asosiy',
			lastName: 'Admin',
			phoneNumber: '+998900000000',
			role: 'admin',
		},
		password,
	)

	const monitoringUser = await ensureUser(
		{
			username: monitoringUsername,
			organizationName: 'Monitoring bo‘limi',
			firstName: 'Asosiy',
			lastName: 'Monitoring',
			phoneNumber: '+998911111111',
			role: 'monitoring',
		},
		monitoringPassword,
	)

	for (const demoUser of demoUsers) {
		await ensureUser(demoUser)
	}

	return {
		username,
		password,
		id: adminUser._id,
		monitoring: {
			username: monitoringUsername,
			password: monitoringPassword,
			id: monitoringUser._id,
		},
		demoPassword: DEFAULT_DEMO_PASSWORD,
	}
}
