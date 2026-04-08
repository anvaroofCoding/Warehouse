import { Box, H2, Text } from '@adminjs/design-system'
import { useTranslation } from 'adminjs'

const parseArray = value => {
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

const parseItems = value =>
	parseArray(value).map(item => ({
		productName: String(item?.productName || '').trim(),
		features: String(item?.features || '').trim(),
		unit: String(item?.unit || '').trim(),
		quantity: String(item?.quantity || '').trim(),
	}))

const parseBuyerOrderData = value => {
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

const splitNames = value =>
	String(value || '')
		.split(',')
		.map(item => item.trim())
		.filter(Boolean)

const getCurrentCycleHistory = history => {
	const entries = Array.isArray(history) ? history : []
	const lastResubmittedIndex = entries
		.map(item => String(item?.stage || '').toLowerCase())
		.lastIndexOf('resubmitted')

	return lastResubmittedIndex >= 0
		? entries.slice(lastResubmittedIndex + 1)
		: entries
}

const normalizeText = value => String(value || '').trim() || '—'

const formatDateTime = value => {
	if (!value) {
		return '—'
	}

	const date = new Date(value)
	if (Number.isNaN(date.getTime())) {
		return normalizeText(value)
	}

	const pad = number => String(number).padStart(2, '0')
	return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

const getRequestNumber = (params, record) => {
	if (params.requestNumber) {
		return params.requestNumber
	}

	const rawDate = String(params.createdAt || '')
		.replace(/\D/g, '')
		.slice(0, 12)
	const fallbackDate =
		rawDate || new Date().toISOString().replace(/\D/g, '').slice(0, 12)
	const idPart = String(record?.id || '')
		.slice(-4)
		.toUpperCase()
	return `XR-${fallbackDate}-${idPart || '0000'}`
}

const getLocalizedStatus = (value, language) => {
	const normalized = String(value || '')
		.trim()
		.toLowerCase()

	const statusLabels =
		language === 'ru'
			? {
					'ko‘rilmoqda': 'На рассмотрении',
					'tuzilmalar tasdig‘ida': 'На рассмотрении',
					tasdiqlanmoqda: 'На утверждении',
					'boshliq tasdig‘ida': 'На утверждении',
					tasdiqlangan: 'Подтверждено',
					tasdiqlandi: 'Подтверждено',
					'qisman tasdiqlandi': 'Частично подтверждено',
					'sotib olish kerak': 'Требуется закупка',
					'sotib olinmoqda': 'В закупке',
					'rad etildi': 'Отказано',
				}
			: {
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

	return statusLabels[normalized] || normalizeText(value)
}

const getLocalizedStage = (value, language) => {
	const normalized = String(value || '')
		.trim()
		.toLowerCase()

	const stageLabels =
		language === 'ru'
			? {
					tuzilmalar: 'Структуры',
					monitoring: 'Руководитель',
					sotib_olish: 'Закупка',
					yakunlandi: 'Завершено',
				}
			: {
					tuzilmalar: 'Tuzilmalar',
					monitoring: 'Boshliq',
					sotib_olish: 'Sotib olish',
					yakunlandi: 'Yakunlandi',
				}

	return stageLabels[normalized] || normalizeText(value)
}

const getStatusBadgeStyle = value => {
	const status = String(value || '')
		.trim()
		.toLowerCase()

	if (['tasdiqlangan', 'tasdiqlandi'].includes(status)) {
		return { background: '#dcfce7', color: '#166534' }
	}

	if (status === 'qisman tasdiqlandi') {
		return { background: '#fef3c7', color: '#b45309' }
	}

	if (status === 'sotib olish kerak') {
		return { background: '#dbeafe', color: '#1d4ed8' }
	}

	if (status === 'sotib olinmoqda') {
		return { background: '#ede9fe', color: '#6d28d9' }
	}

	if (status === 'rad etildi') {
		return { background: '#fee2e2', color: '#b91c1c' }
	}

	if (['tasdiqlanmoqda', 'boshliq tasdig‘ida', 'monitoring'].includes(status)) {
		return { background: '#ede9fe', color: '#6d28d9' }
	}

	if (status === 'yakunlandi') {
		return { background: '#e5e7eb', color: '#374151' }
	}

	return { background: '#dbeafe', color: '#1d4ed8' }
}

const getDecisionMeta = (decision, language) => {
	const normalized = String(decision || '')
		.trim()
		.toLowerCase()
	const labels =
		language === 'ru'
			? {
					tasdiqlangan: 'Подтверждено',
					tasdiqlandi: 'Подтверждено',
					'qisman tasdiqlandi': 'Частично подтверждено',
					'rad etildi': 'Отказано',
					pending: 'Ожидается',
					waiting: 'Очередь не подошла',
				}
			: {
					tasdiqlangan: 'Tasdiqlangan',
					tasdiqlandi: 'Tasdiqlandi',
					'qisman tasdiqlandi': 'Qisman tasdiqlandi',
					'rad etildi': 'Rad etildi',
					pending: 'Kutilmoqda',
					waiting: 'Navbati kelmagan',
				}

	if (['tasdiqlangan', 'tasdiqlandi'].includes(normalized)) {
		return {
			symbol: '✓',
			label: labels[normalized],
			background: '#dcfce7',
			color: '#166534',
		}
	}

	if (normalized === 'qisman tasdiqlandi') {
		return {
			symbol: '✓',
			label: labels[normalized],
			background: '#fef3c7',
			color: '#b45309',
		}
	}

	if (normalized === 'rad etildi') {
		return {
			symbol: '✕',
			label: labels[normalized],
			background: '#fee2e2',
			color: '#b91c1c',
		}
	}

	if (normalized === 'waiting') {
		return {
			symbol: '•',
			label: labels.waiting,
			background: '#f1f5f9',
			color: '#475569',
		}
	}

	return {
		symbol: '…',
		label: labels.pending,
		background: '#dbeafe',
		color: '#1d4ed8',
	}
}

const getApprovalRows = (params, language) => {
	const selectedUsers = parseArray(params.selectedUsers).map(item =>
		String(item),
	)
	const selectedNames = splitNames(params.selectedUserNames)
	const structureApprovals = parseArray(params.structureApprovals)
	const approvalHistory = parseArray(params.approvalHistory)
	const currentCycleHistory = getCurrentCycleHistory(approvalHistory)
	const approvalMap = new Map()

	structureApprovals.forEach((item, index) => {
		approvalMap.set(String(item?.userId || `idx-${index}`), item)
	})

	const rows = (selectedUsers.length ? selectedUsers : selectedNames).map(
		(item, index) => {
			const userId = selectedUsers[index] || `idx-${index}`
			const approval =
				approvalMap.get(userId) ||
				(selectedUsers.length ? null : structureApprovals[index])

			return {
				index: index + 1,
				role: language === 'ru' ? 'Структура' : 'Tuzilma',
				name: approval?.userName
					? normalizeText(approval.userName)
					: selectedNames[index] || normalizeText(item),
				meta: getDecisionMeta(approval?.decision || 'pending', language),
				comment: normalizeText(approval?.comment),
				date: formatDateTime(approval?.decidedAt),
			}
		},
	)

	const approverEntry = [...currentCycleHistory]
		.reverse()
		.find(
			item =>
				String(item?.stage || '').toLowerCase() === 'monitoring' ||
				String(item?.role || '').toLowerCase() === 'monitoring',
		)

	const normalizedStatus = String(params.status || '').toLowerCase()
	const hasStructureRejection = structureApprovals.some(
		item => String(item?.decision || '').toLowerCase() === 'rad etildi',
	)
	let approverState = 'waiting'
	if (approverEntry?.decision) {
		approverState = approverEntry.decision
	} else if (
		['tasdiqlangan', 'tasdiqlandi', 'qisman tasdiqlandi'].includes(
			normalizedStatus,
		)
	) {
		approverState = normalizedStatus
	} else if (normalizedStatus === 'rad etildi' && !hasStructureRejection) {
		approverState = normalizedStatus
	} else if (
		String(params.currentStage || '').toLowerCase() === 'monitoring' ||
		normalizedStatus === 'tasdiqlanmoqda'
	) {
		approverState = 'pending'
	}

	rows.push({
		index: rows.length + 1,
		role: language === 'ru' ? 'Руководитель' : 'Boshliq',
		name: normalizeText(params.approverName),
		meta: getDecisionMeta(approverState, language),
		comment: normalizeText(approverEntry?.comment),
		date: formatDateTime(approverEntry?.decidedAt),
	})

	return rows
}

const cardStyle = {
	padding: '18px 20px',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
	boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
}

const PurchaseRequestShow = props => {
	const { record } = props
	const {
		i18n: { language },
	} = useTranslation()

	const params = record?.params || {}
	const createdBy =
		record?.populated?.createdBy?.params?.username || params.createdBy
	const items = parseItems(params.items)
	const structureNames = splitNames(params.selectedUserNames)
	const approvalRows = getApprovalRows(params, language)
	const buyerOrder = parseBuyerOrderData(params.buyerOrderData)
	const buyerDocuments = parseArray(buyerOrder.documents)
	const originalItems = parseItems(buyerOrder.originalItems)
	const statusStyle = getStatusBadgeStyle(params.status)
	const stageStyle = getStatusBadgeStyle(params.currentStage)

	const text =
		language === 'ru'
			? {
					title: 'Подробности заявки',
					requestNo: 'Номер заявки',
					status: 'Статус',
					stage: 'Этап',
					creator: 'Создал заявку',
					createdAt: 'Дата создания',
					updatedAt: 'Дата обновления',
					structures: 'Выбранные структуры',
					approver: 'Руководитель / мониторинг',
					comment: 'Комментарий к заявке',
					lastComment: 'Последний комментарий',
					items: 'Детали товаров',
					tableApproval: 'Таблица согласования',
					role: 'Роль',
					name: 'Название',
					mark: 'Знак',
					decision: 'Решение',
					commentCol: 'Комментарий',
					time: 'Время',
					product: 'Товар',
					features: 'Характеристика',
					unit: 'Ед.',
					qty: 'Кол-во',
					procurement: 'Данные закупки',
					supplier: 'Откуда закупается',
					documents: 'Документы',
					savedBy: 'Последнее сохранение',
					originalItems: 'Первоначальные товары',
					changeNotice: 'Уведомление об изменении',
				}
			: {
					title: 'Ariza tafsiloti',
					requestNo: 'Ariza raqami',
					status: 'Holati',
					stage: 'Bosqichi',
					creator: 'Arizani yaratgan',
					createdAt: 'Yaratilgan sana',
					updatedAt: 'Yangilangan sana',
					structures: 'Tanlangan tuzilmalar',
					approver: 'Boshliq / monitoring',
					comment: 'Ariza izohi',
					lastComment: 'Oxirgi izoh',
					items: 'Tovar tafsiloti',
					tableApproval: 'Tasdiqlash jadvali',
					role: 'Rol',
					name: 'Nomi',
					mark: 'Belgi',
					decision: 'Qaror',
					commentCol: 'Izoh',
					time: 'Vaqti',
					product: 'Tovar',
					features: 'Xususiyati',
					unit: 'Birligi',
					qty: 'Soni',
					procurement: 'Buyurtma ma’lumotlari',
					supplier: 'Qayerdan olinmoqda',
					documents: 'Hujjatlar',
					savedBy: 'Oxirgi saqlovchi',
					originalItems: 'Eski tovar ma’lumotlari',
					changeNotice: 'O‘zgarish haqida xabar',
				}

	return (
		<Box variant='grey'>
			<Box
				bg='white'
				p='xxl'
				borderRadius='xl'
				boxShadow='card'
				style={{ width: '100%' }}
			>
				<H2 mb='xl'>{text.title}</H2>

				<Box
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
						gap: '12px',
						marginBottom: '18px',
					}}
				>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.requestNo}
						</Text>
						<Text mt='sm' fontWeight='bold'>
							{getRequestNumber(params, record)}
						</Text>
					</Box>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.status}
						</Text>
						<span
							style={{
								...statusStyle,
								display: 'inline-block',
								marginTop: '8px',
								padding: '6px 10px',
								borderRadius: '999px',
								fontWeight: 700,
							}}
						>
							{getLocalizedStatus(params.status, language)}
						</span>
					</Box>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.stage}
						</Text>
						<span
							style={{
								...stageStyle,
								display: 'inline-block',
								marginTop: '8px',
								padding: '6px 10px',
								borderRadius: '999px',
								fontWeight: 700,
							}}
						>
							{getLocalizedStage(params.currentStage, language)}
						</span>
					</Box>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.creator}
						</Text>
						<Text mt='sm'>{normalizeText(createdBy)}</Text>
					</Box>
				</Box>

				<Box style={{ ...cardStyle, marginBottom: '16px' }}>
					<Text fontWeight='bold' mb='lg'>
						{text.structures}
					</Text>
					<Box
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
							gap: '10px',
						}}
					>
						{structureNames.length ? (
							structureNames.map(name => (
								<Box
									key={name}
									style={{
										padding: '10px 12px',
										borderRadius: '10px',
										background: '#eff6ff',
										border: '1px solid #bfdbfe',
									}}
								>
									{name}
								</Box>
							))
						) : (
							<Text>—</Text>
						)}
					</Box>
				</Box>

				<Box style={{ ...cardStyle, marginBottom: '16px' }}>
					<Text fontWeight='bold' color='grey100'>
						{text.approver}
					</Text>
					<Text mt='sm' fontWeight='bold'>
						{normalizeText(params.approverName)}
					</Text>
				</Box>

				<Box
					style={{
						...cardStyle,
						marginBottom: '16px',
						whiteSpace: 'pre-wrap',
						wordBreak: 'break-word',
					}}
				>
					<Text fontWeight='bold' mb='lg'>
						{text.comment}
					</Text>
					<Text>{normalizeText(params.comment)}</Text>
				</Box>

				<Box style={{ ...cardStyle, marginBottom: '16px' }}>
					<Text fontWeight='bold' mb='lg'>
						{text.items}
					</Text>
					<div style={{ width: '100%', overflowX: 'auto' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse' }}>
							<thead>
								<tr>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										#
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.product}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.features}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.unit}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.qty}
									</th>
								</tr>
							</thead>
							<tbody>
								{items.map((item, index) => (
									<tr key={`${item.productName}-${index}`}>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{index + 1}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{normalizeText(item.productName)}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{normalizeText(item.features)}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{normalizeText(item.unit)}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{normalizeText(item.quantity)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Box>

				{originalItems.length ? (
					<Box style={{ ...cardStyle, marginBottom: '16px' }}>
						<Text fontWeight='bold' mb='lg'>
							{text.originalItems}
						</Text>
						<div style={{ width: '100%', overflowX: 'auto' }}>
							<table style={{ width: '100%', borderCollapse: 'collapse' }}>
								<thead>
									<tr>
										<th
											style={{
												textAlign: 'left',
												padding: '10px 12px',
												background: '#f8fafc',
												borderBottom: '1px solid #e5e7eb',
											}}
										>
											#
										</th>
										<th
											style={{
												textAlign: 'left',
												padding: '10px 12px',
												background: '#f8fafc',
												borderBottom: '1px solid #e5e7eb',
											}}
										>
											{text.product}
										</th>
										<th
											style={{
												textAlign: 'left',
												padding: '10px 12px',
												background: '#f8fafc',
												borderBottom: '1px solid #e5e7eb',
											}}
										>
											{text.features}
										</th>
										<th
											style={{
												textAlign: 'left',
												padding: '10px 12px',
												background: '#f8fafc',
												borderBottom: '1px solid #e5e7eb',
											}}
										>
											{text.unit}
										</th>
										<th
											style={{
												textAlign: 'left',
												padding: '10px 12px',
												background: '#f8fafc',
												borderBottom: '1px solid #e5e7eb',
											}}
										>
											{text.qty}
										</th>
									</tr>
								</thead>
								<tbody>
									{originalItems.map((item, index) => (
										<tr key={`original-${item.productName}-${index}`}>
											<td
												style={{
													padding: '10px 12px',
													borderBottom: '1px solid #eef2f7',
												}}
											>
												{index + 1}
											</td>
											<td
												style={{
													padding: '10px 12px',
													borderBottom: '1px solid #eef2f7',
												}}
											>
												{normalizeText(item.productName)}
											</td>
											<td
												style={{
													padding: '10px 12px',
													borderBottom: '1px solid #eef2f7',
												}}
											>
												{normalizeText(item.features)}
											</td>
											<td
												style={{
													padding: '10px 12px',
													borderBottom: '1px solid #eef2f7',
												}}
											>
												{normalizeText(item.unit)}
											</td>
											<td
												style={{
													padding: '10px 12px',
													borderBottom: '1px solid #eef2f7',
												}}
											>
												{normalizeText(item.quantity)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</Box>
				) : null}

				<Box style={{ ...cardStyle, marginBottom: '16px' }}>
					<Text fontWeight='bold' mb='lg'>
						{text.procurement}
					</Text>
					<Text>
						<strong>{text.supplier}:</strong>{' '}
						{normalizeText(buyerOrder.supplierName)}
					</Text>
					<Text mt='sm'>
						<strong>{text.savedBy}:</strong> {normalizeText(buyerOrder.savedBy)}{' '}
						{buyerOrder.savedAt
							? `(${formatDateTime(buyerOrder.savedAt)})`
							: ''}
					</Text>

					<Box mt='lg'>
						<Text fontWeight='bold' mb='sm'>
							{text.documents}
						</Text>
						{buyerDocuments.length ? (
							<Box style={{ display: 'grid', gap: '8px' }}>
								{buyerDocuments.map((document, index) => (
									<a
										key={`${document?.url || document?.name || 'doc'}-${index}`}
										href={document?.url || '#'}
										target='_blank'
										rel='noreferrer'
									>
										{normalizeText(document?.name || document?.fileName)}
									</a>
								))}
							</Box>
						) : (
							<Text>—</Text>
						)}
					</Box>
				</Box>

				{buyerOrder.changeNote ? (
					<Box
						style={{
							...cardStyle,
							marginBottom: '16px',
							background: '#fff7ed',
							border: '1px solid #fdba74',
						}}
					>
						<Text fontWeight='bold' mb='sm'>
							{text.changeNotice}
						</Text>
						<Text>{buyerOrder.changeNote}</Text>
					</Box>
				) : null}

				<Box style={{ ...cardStyle, marginBottom: '16px' }}>
					<Text fontWeight='bold' mb='lg'>
						{text.tableApproval}
					</Text>
					<div style={{ width: '100%', overflowX: 'auto' }}>
						<table style={{ width: '100%', borderCollapse: 'collapse' }}>
							<thead>
								<tr>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										#
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.role}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.name}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.mark}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.decision}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.commentCol}
									</th>
									<th
										style={{
											textAlign: 'left',
											padding: '10px 12px',
											background: '#f8fafc',
											borderBottom: '1px solid #e5e7eb',
										}}
									>
										{text.time}
									</th>
								</tr>
							</thead>
							<tbody>
								{approvalRows.map(row => (
									<tr key={`${row.role}-${row.index}-${row.name}`}>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{row.index}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											{row.role}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
												minWidth: '180px',
											}}
										>
											{row.name}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											<span
												style={{
													display: 'inline-flex',
													width: '24px',
													height: '24px',
													alignItems: 'center',
													justifyContent: 'center',
													borderRadius: '999px',
													background: row.meta.background,
													color: row.meta.color,
													fontWeight: 800,
												}}
											>
												{row.meta.symbol}
											</span>
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
											}}
										>
											<span
												style={{
													display: 'inline-block',
													padding: '4px 9px',
													borderRadius: '999px',
													background: row.meta.background,
													color: row.meta.color,
													fontWeight: 700,
												}}
											>
												{row.meta.label}
											</span>
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
												minWidth: '220px',
												whiteSpace: 'pre-wrap',
												wordBreak: 'break-word',
											}}
										>
											{row.comment}
										</td>
										<td
											style={{
												padding: '10px 12px',
												borderBottom: '1px solid #eef2f7',
												whiteSpace: 'nowrap',
											}}
										>
											{row.date}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</Box>

				<Box
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
						gap: '12px',
					}}
				>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.createdAt}
						</Text>
						<Text mt='sm'>{formatDateTime(params.createdAt)}</Text>
					</Box>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.updatedAt}
						</Text>
						<Text mt='sm'>{formatDateTime(params.updatedAt)}</Text>
					</Box>
					<Box style={cardStyle}>
						<Text fontWeight='bold' color='grey100'>
							{text.lastComment}
						</Text>
						<Text mt='sm'>{normalizeText(params.lastComment)}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default PurchaseRequestShow
