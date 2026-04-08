import { Text } from '@adminjs/design-system'
import { useTranslation } from 'adminjs'

const compactStyle = {
	display: 'block',
	maxWidth: '220px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
}

const commentStyle = {
	display: '-webkit-box',
	maxWidth: '360px',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'normal',
	lineHeight: '1.4',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: 2,
}

const detailCardStyle = {
	display: 'block',
	width: '100%',
	maxWidth: 'none',
	minWidth: '100%',
	padding: '18px 20px',
	margin: '6px 0 12px',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
	boxSizing: 'border-box',
	lineHeight: '1.7',
	boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04)',
}

const noteCardStyle = {
	...detailCardStyle,
	background: '#f8fafc',
	whiteSpace: 'pre-wrap',
	wordBreak: 'break-word',
}

const sectionTitleStyle = {
	fontSize: '13px',
	fontWeight: 700,
	color: '#0f172a',
	marginBottom: '10px',
}

const helperTextStyle = {
	fontSize: '12px',
	color: '#64748b',
}

const chipWrapStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
	gap: '10px',
	width: '100%',
	marginTop: '8px',
}

const chipStyle = {
	display: 'flex',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	width: '100%',
	padding: '10px 12px',
	borderRadius: '10px',
	background: '#eff6ff',
	border: '1px solid #bfdbfe',
	color: '#1d4ed8',
	fontSize: '13px',
	fontWeight: 600,
	lineHeight: '1.5',
	boxSizing: 'border-box',
	whiteSpace: 'normal',
	wordBreak: 'break-word',
}

const tableWrapStyle = {
	width: '100%',
	overflowX: 'auto',
	marginTop: '8px',
}

const tableStyle = {
	width: '100%',
	borderCollapse: 'collapse',
	fontSize: '13px',
}

const tableHeadCellStyle = {
	padding: '10px 12px',
	textAlign: 'left',
	background: '#f8fafc',
	color: '#334155',
	fontWeight: 700,
	borderBottom: '1px solid #e5e7eb',
	whiteSpace: 'nowrap',
}

const tableCellStyle = {
	padding: '10px 12px',
	borderBottom: '1px solid #eef2f7',
	verticalAlign: 'top',
	color: '#111827',
}

const statusBadgeBaseStyle = {
	display: 'inline-block',
	padding: '4px 10px',
	borderRadius: '999px',
	fontSize: '12px',
	fontWeight: 700,
	lineHeight: '1.4',
	maxWidth: 'fit-content',
}

const parseItems = value => {
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

const parseArray = value => {
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

const getItemsCountLabel = (count, language) => {
	if (language === 'ru') {
		return `${count} ${count === 1 ? 'вид товара' : count < 5 ? 'вида товара' : 'видов товара'}`
	}

	return `${count} ta turdagi tovar`
}

const getSelectedUsersCountLabel = (count, language) => {
	if (language === 'ru') {
		return `${count} ${count === 1 ? 'структура' : count < 5 ? 'структуры' : 'структур'}`
	}

	return `${count} ta tuzilma`
}

const normalizeText = value =>
	String(value || '-')
		.replace(/\s+/g, ' ')
		.trim() || '-'

const normalizeDetailedText = value => String(value || '').trim() || '—'

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

const formatDateTime = value => {
	if (!value) {
		return '—'
	}

	const date = new Date(value)

	if (Number.isNaN(date.getTime())) {
		return normalizeDetailedText(value)
	}

	const pad = number => String(number).padStart(2, '0')
	return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

const getLocalizedValue = (path, value, language) => {
	const normalizedValue = String(value || '')
		.trim()
		.toLowerCase()

	if (path === 'status') {
		const labels =
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

		return labels[normalizedValue] || value
	}

	if (path === 'currentStage') {
		const labels =
			language === 'ru'
				? {
						tuzilmalar: 'Структуры',
						monitoring: 'Руководитель',
						sotib_olish: 'Закупка',
						yakunlandi: 'Завершено',
					}
				: {
						tuzilmalar: 'Tuzilma',
						monitoring: 'Boshliq',
						sotib_olish: 'Sotib olish',
						yakunlandi: 'Yakunlandi',
					}

		return labels[normalizedValue] || value
	}

	return value
}

const getStatusStyle = (path, value) => {
	const normalizedValue = String(value || '')
		.trim()
		.toLowerCase()

	if (path === 'currentStage') {
		if (normalizedValue === 'monitoring') {
			return {
				...statusBadgeBaseStyle,
				background: '#ede9fe',
				color: '#6d28d9',
			}
		}

		if (normalizedValue === 'sotib_olish') {
			return {
				...statusBadgeBaseStyle,
				background: '#dbeafe',
				color: '#1d4ed8',
			}
		}

		if (normalizedValue === 'yakunlandi') {
			return {
				...statusBadgeBaseStyle,
				background: '#e5e7eb',
				color: '#374151',
			}
		}

		return { ...statusBadgeBaseStyle, background: '#dbeafe', color: '#1d4ed8' }
	}

	if (['tasdiqlangan', 'tasdiqlandi'].includes(normalizedValue)) {
		return { ...statusBadgeBaseStyle, background: '#dcfce7', color: '#166534' }
	}

	if (normalizedValue === 'qisman tasdiqlandi') {
		return { ...statusBadgeBaseStyle, background: '#fef3c7', color: '#b45309' }
	}

	if (normalizedValue === 'sotib olish kerak') {
		return { ...statusBadgeBaseStyle, background: '#dbeafe', color: '#1d4ed8' }
	}

	if (normalizedValue === 'sotib olinmoqda') {
		return { ...statusBadgeBaseStyle, background: '#ede9fe', color: '#6d28d9' }
	}

	if (normalizedValue === 'rad etildi') {
		return { ...statusBadgeBaseStyle, background: '#fee2e2', color: '#b91c1c' }
	}

	if (['tasdiqlanmoqda', 'boshliq tasdig‘ida'].includes(normalizedValue)) {
		return { ...statusBadgeBaseStyle, background: '#ede9fe', color: '#6d28d9' }
	}

	return { ...statusBadgeBaseStyle, background: '#dbeafe', color: '#1d4ed8' }
}

const getApprovalShortLabel = (value, params, language) => {
	const suffix = language === 'ru' ? 'шт.' : 'ta'
	const text = String(value || '')
	const directMatch = text.match(/(\d+)\s*\/\s*(\d+)/)

	if (directMatch) {
		return `${directMatch[1]}/${directMatch[2]} ${suffix}`
	}

	const selectedUsersCount = parseArray(params.selectedUsers).length
	const reviewedCount = parseArray(params.structureApprovals).filter(
		item => item?.decision,
	).length

	if (selectedUsersCount) {
		return `${reviewedCount}/${selectedUsersCount} ${suffix}`
	}

	return value
}

const getRequestNumberLabel = (value, params, record) => {
	if (value) {
		return value
	}

	const rawDate = String(params.createdAt || '')
		.replace(/\D/g, '')
		.slice(0, 12)
	const fallbackDate =
		rawDate || new Date().toISOString().replace(/\D/g, '').slice(0, 12)
	const idPart =
		String(record?.id || '')
			.slice(-4)
			.toUpperCase() || '0000'
	return `XR-${fallbackDate}-${idPart}`
}

const getDecisionMeta = (decision, language) => {
	const normalizedDecision = String(decision || '')
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

	if (['tasdiqlangan', 'tasdiqlandi'].includes(normalizedDecision)) {
		return {
			label: labels[normalizedDecision],
			symbol: '✓',
			background: '#dcfce7',
			color: '#166534',
		}
	}

	if (normalizedDecision === 'qisman tasdiqlandi') {
		return {
			label: labels[normalizedDecision],
			symbol: '✓',
			background: '#fef3c7',
			color: '#b45309',
		}
	}

	if (normalizedDecision === 'rad etildi') {
		return {
			label: labels[normalizedDecision],
			symbol: '✕',
			background: '#fee2e2',
			color: '#b91c1c',
		}
	}

	if (normalizedDecision === 'waiting') {
		return {
			label: labels.waiting,
			symbol: '•',
			background: '#f1f5f9',
			color: '#475569',
		}
	}

	return {
		label: labels.pending,
		symbol: '…',
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
		const key = String(item?.userId || `idx-${index}`)
		approvalMap.set(key, item)
	})

	const baseRows = (selectedUsers.length ? selectedUsers : selectedNames).map(
		(item, index) => {
			const userId = selectedUsers[index] || `idx-${index}`
			const approval =
				approvalMap.get(userId) ||
				(selectedUsers.length ? null : structureApprovals[index])
			const name = approval?.userName
				? normalizeDetailedText(approval.userName)
				: selectedNames[index] || normalizeDetailedText(item)
			const meta = getDecisionMeta(approval?.decision || 'pending', language)

			return {
				index: index + 1,
				role: language === 'ru' ? 'Структура' : 'Tuzilma',
				name,
				meta,
				comment: normalizeDetailedText(approval?.comment),
				date: formatDateTime(approval?.decidedAt),
			}
		},
	)

	const lastApproverEntry = [...currentCycleHistory]
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
	if (lastApproverEntry?.decision) {
		approverState = lastApproverEntry.decision
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

	baseRows.push({
		index: baseRows.length + 1,
		role: language === 'ru' ? 'Руководитель' : 'Boshliq',
		name: normalizeDetailedText(params.approverName),
		meta: getDecisionMeta(approverState, language),
		comment: normalizeDetailedText(lastApproverEntry?.comment),
		date: formatDateTime(lastApproverEntry?.decidedAt),
	})

	return baseRows
}

const renderShowValue = ({ path, params, populated, record, language }) => {
	if (path === 'requestNumber') {
		return (
			<div
				style={{ ...detailCardStyle, fontWeight: 700, letterSpacing: '0.04em' }}
			>
				{getRequestNumberLabel(params.requestNumber, params, record)}
			</div>
		)
	}

	if (path === 'selectedUserNames') {
		const names = splitNames(params.selectedUserNames)

		return (
			<div style={detailCardStyle}>
				<div style={sectionTitleStyle}>
					{language === 'ru' ? 'Выбранные структуры' : 'Tanlangan tuzilmalar'}
				</div>
				<div style={{ ...helperTextStyle, marginBottom: '10px' }}>
					{getSelectedUsersCountLabel(names.length, language)}
				</div>
				<div style={chipWrapStyle}>
					{names.length
						? names.map(name => (
								<span key={name} style={chipStyle}>
									{name}
								</span>
							))
						: '—'}
				</div>
			</div>
		)
	}

	if (path === 'approverName') {
		return (
			<div style={detailCardStyle}>
				<div style={{ fontWeight: 700, color: '#0f172a' }}>
					{normalizeDetailedText(params.approverName)}
				</div>
				<div style={{ ...helperTextStyle, marginTop: '6px' }}>
					{language === 'ru'
						? 'Руководитель / мониторинг'
						: 'Boshliq / monitoring'}
				</div>
			</div>
		)
	}

	if (path === 'comment' || path === 'lastComment') {
		return (
			<div style={noteCardStyle}>{normalizeDetailedText(params[path])}</div>
		)
	}

	if (path === 'itemsSummary') {
		const items = parseItems(params.items)

		return (
			<div style={detailCardStyle}>
				<div style={sectionTitleStyle}>
					{language === 'ru' ? 'Детали товаров' : 'Tovar tafsiloti'}
				</div>
				<div style={tableWrapStyle}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={tableHeadCellStyle}>#</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Товар' : 'Tovar'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Характеристика' : 'Xususiyati'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Ед.' : 'Birligi'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Кол-во' : 'Soni'}
								</th>
							</tr>
						</thead>
						<tbody>
							{items.length ? (
								items.map((item, index) => (
									<tr key={`${item.productName}-${index}`}>
										<td style={tableCellStyle}>{index + 1}</td>
										<td style={tableCellStyle}>
											{normalizeDetailedText(item.productName)}
										</td>
										<td style={tableCellStyle}>
											{normalizeDetailedText(item.features)}
										</td>
										<td style={tableCellStyle}>
											{normalizeDetailedText(item.unit)}
										</td>
										<td style={tableCellStyle}>
											{normalizeDetailedText(item.quantity)}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td style={tableCellStyle} colSpan={5}>
										{language === 'ru'
											? 'Товары не указаны'
											: 'Tovar kiritilmagan'}
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
		)
	}

	if (path === 'approvalSummary') {
		const rows = getApprovalRows(params, language)
		const summary = getApprovalShortLabel(
			params.approvalSummary,
			params,
			language,
		)

		return (
			<div style={detailCardStyle}>
				<div style={sectionTitleStyle}>
					{language === 'ru' ? 'Таблица согласования' : 'Tasdiqlash jadvali'}
				</div>
				<div style={{ ...helperTextStyle, marginBottom: '10px' }}>
					{language === 'ru' ? 'Выполнено' : 'Ko‘rib chiqilgan'}: {summary}
				</div>
				<div style={tableWrapStyle}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={tableHeadCellStyle}>#</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Роль' : 'Rol'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Название' : 'Nomi'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Знак' : 'Belgi'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Статус' : 'Holat'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Комментарий' : 'Izoh'}
								</th>
								<th style={tableHeadCellStyle}>
									{language === 'ru' ? 'Время' : 'Vaqti'}
								</th>
							</tr>
						</thead>
						<tbody>
							{rows.map(row => (
								<tr key={`${row.role}-${row.index}-${row.name}`}>
									<td style={tableCellStyle}>{row.index}</td>
									<td style={tableCellStyle}>{row.role}</td>
									<td style={{ ...tableCellStyle, minWidth: '180px' }}>
										{row.name}
									</td>
									<td style={tableCellStyle}>
										<span
											style={{
												display: 'inline-flex',
												alignItems: 'center',
												justifyContent: 'center',
												width: '24px',
												height: '24px',
												borderRadius: '999px',
												background: row.meta.background,
												color: row.meta.color,
												fontWeight: 800,
											}}
										>
											{row.meta.symbol}
										</span>
									</td>
									<td style={tableCellStyle}>
										<span
											style={{
												display: 'inline-block',
												padding: '4px 9px',
												borderRadius: '999px',
												background: row.meta.background,
												color: row.meta.color,
												fontWeight: 700,
												whiteSpace: 'nowrap',
											}}
										>
											{row.meta.label}
										</span>
									</td>
									<td
										style={{
											...tableCellStyle,
											minWidth: '220px',
											whiteSpace: 'pre-wrap',
											wordBreak: 'break-word',
										}}
									>
										{row.comment}
									</td>
									<td style={{ ...tableCellStyle, whiteSpace: 'nowrap' }}>
										{row.date}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		)
	}

	if (path === 'createdBy') {
		const username =
			populated.createdBy?.params?.username ||
			normalizeDetailedText(params.createdBy)
		return <div style={detailCardStyle}>{username}</div>
	}

	if (['createdAt', 'updatedAt'].includes(path)) {
		return <div style={detailCardStyle}>{formatDateTime(params[path])}</div>
	}

	return (
		<div style={detailCardStyle}>{normalizeDetailedText(params[path])}</div>
	)
}

const PurchaseRequestListValue = props => {
	const { property, record, where } = props
	const {
		i18n: { language },
	} = useTranslation()

	const path = property?.path
	const params = record?.params || {}
	const populated = record?.populated || {}
	const isShow = where === 'show'

	let value = params[path]
	let title = value
	let style = compactStyle

	if (['comment', 'lastComment'].includes(path)) {
		style = commentStyle
	}

	if (path === 'selectedUserNames') {
		const selectedUsersCount = parseArray(params.selectedUsers).length
		value = isShow
			? params.selectedUserNames
			: getSelectedUsersCountLabel(selectedUsersCount, language)
		title = params.selectedUserNames || value
	}

	if (path === 'itemsSummary') {
		const items = parseItems(params.items)
		value = isShow
			? params.itemsSummary
			: getItemsCountLabel(items.length, language)
		title = params.itemsSummary || value
	}

	if (path === 'approvalSummary') {
		value = getApprovalShortLabel(params.approvalSummary, params, language)
		title = params.approvalSummary || value
	}

	if (path === 'requestNumber') {
		value = getRequestNumberLabel(value, params, record)
		title = value
	}

	if (path === 'createdBy') {
		value = populated.createdBy?.params?.username || params.createdBy
		title = value
	}

	if (['createdAt', 'updatedAt'].includes(path)) {
		value = formatDateTime(value)
		title = value
	}

	if (['status', 'currentStage'].includes(path)) {
		const localizedValue = normalizeText(
			getLocalizedValue(path, value, language),
		)
		return (
			<Text style={getStatusStyle(path, value)} title={localizedValue}>
				{localizedValue}
			</Text>
		)
	}

	if (isShow) {
		return renderShowValue({ path, params, populated, record, language })
	}

	const text = normalizeText(value)
	const tooltip = normalizeText(title || value)

	return (
		<Text style={style} title={tooltip}>
			{text}
		</Text>
	)
}

export default PurchaseRequestListValue
