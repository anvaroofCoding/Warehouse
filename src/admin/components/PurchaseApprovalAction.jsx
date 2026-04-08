import { Box, Button, H2, MessageBox, Text } from '@adminjs/design-system'
import { ApiClient, useNotice, useTranslation } from 'adminjs'
import { useMemo, useState } from 'react'

const api = new ApiClient()
const DECISIONS = ['tasdiqlandi', 'qisman tasdiqlandi', 'rad etildi']

const parseHistory = value => {
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

const optionStyle = selected => ({
	display: 'flex',
	alignItems: 'flex-start',
	gap: '10px',
	padding: '12px 14px',
	borderRadius: '12px',
	border: selected ? '1px solid #2563eb' : '1px solid #dbe3f0',
	background: selected ? '#eff6ff' : '#ffffff',
	cursor: 'pointer',
})

const textareaStyle = {
	width: '100%',
	minHeight: '120px',
	padding: '12px 14px',
	borderRadius: '12px',
	border: '1px solid #cbd5e1',
	resize: 'vertical',
	fontSize: '14px',
	fontFamily: 'inherit',
}

const getDecisionOptionMeta = (decision, language) => {
	const options =
		language === 'ru'
			? {
					tasdiqlandi: {
						label: 'Подтвердить',
						icon: '✓',
						background: '#dcfce7',
						color: '#166534',
					},
					'qisman tasdiqlandi': {
						label: 'Частично подтвердить',
						icon: '◐',
						background: '#fef3c7',
						color: '#b45309',
					},
					'rad etildi': {
						label: 'Отклонить',
						icon: '✕',
						background: '#fee2e2',
						color: '#b91c1c',
					},
				}
			: {
					tasdiqlandi: {
						label: 'Tasdiqlash',
						icon: '✓',
						background: '#dcfce7',
						color: '#166534',
					},
					'qisman tasdiqlandi': {
						label: 'Qisman tasdiqlash',
						icon: '◐',
						background: '#fef3c7',
						color: '#b45309',
					},
					'rad etildi': {
						label: 'Rad etish',
						icon: '✕',
						background: '#fee2e2',
						color: '#b91c1c',
					},
				}

	return (
		options[decision] || {
			label: decision,
			icon: '•',
			background: '#e2e8f0',
			color: '#475569',
		}
	)
}

const resolveStageLabel = (stage, text) => {
	if (stage === 'monitoring') {
		return text.stageMonitoring
	}

	if (stage === 'yakunlandi') {
		return text.stageFinished
	}

	return text.stageStructures
}

const resolveHistoryStage = (stage, text) => {
	if (stage === 'monitoring') {
		return text.stageMonitoringShort
	}

	if (stage === 'yakunlandi') {
		return text.stageFinishedShort
	}

	return text.stageStructuresShort
}

const formatDate = value => {
	if (!value) {
		return '-'
	}

	const date = new Date(value)
	if (Number.isNaN(date.getTime())) {
		return value
	}

	const pad = number => String(number).padStart(2, '0')
	return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

const PurchaseApprovalAction = props => {
	const { action, record, resource } = props
	const addNotice = useNotice()
	const [decision, setDecision] = useState('tasdiqlandi')
	const [comment, setComment] = useState('')
	const [saving, setSaving] = useState(false)
	const {
		i18n: { language },
	} = useTranslation()

	const text =
		language === 'ru'
			? {
					title: 'Принять решение по заявке',
					subtitle:
						'Ознакомьтесь с материалами заявки и выберите итоговое решение.',
					status: 'Статус',
					stage: 'Текущий этап',
					summary: 'Ход согласования',
					noSummary: 'История согласования пока пуста.',
					decisionLabel: 'Выберите решение',
					commentLabel: 'Комментарий',
					commentOptional:
						'При полном подтверждении комментарий не обязателен.',
					commentRequired:
						'При частичном подтверждении и отказе комментарий обязателен.',
					commentRequiredError:
						'Для частичного подтверждения и отказа нужно указать комментарий.',
					submit: 'Подтвердить решение',
					saving: 'Сохраняется...',
					back: 'Вернуться к заявке',
					historyTitle: 'История согласования',
					saveError: 'Не удалось сохранить решение.',
					stageStructures: 'Согласование структур',
					stageMonitoring: 'Согласование руководителя',
					stageFinished: 'Процесс завершён',
					stageStructuresShort: 'структуры',
					stageMonitoringShort: 'руководитель',
					stageFinishedShort: 'завершено',
				}
			: {
					title: 'Qarorni tasdiqlash',
					subtitle:
						'Ariza materiallarini ko‘rib chiqing va yakuniy qarorni tanlang.',
					status: 'Holati',
					stage: 'Joriy bosqich',
					summary: 'Tasdiqlash jarayoni',
					noSummary: 'Hozircha tasdiqlash tarixi yo‘q.',
					decisionLabel: 'Qaror turini tanlang',
					commentLabel: 'Izoh',
					commentOptional: 'To‘liq tasdiqlashda izoh yozish majburiy emas.',
					commentRequired:
						'Qisman tasdiqlash va rad etishda izoh kiritish shart.',
					commentRequiredError:
						'Qisman tasdiqlash yoki rad etish uchun izoh yozing.',
					submit: 'Qarorni tasdiqlash',
					saving: 'Saqlanmoqda...',
					back: 'Arizaga qaytish',
					historyTitle: 'Tasdiqlash tarixi',
					saveError: 'Qarorni saqlab bo‘lmadi.',
					stageStructures: 'Tuzilmalar tasdig‘i',
					stageMonitoring: 'Boshliq tasdig‘i',
					stageFinished: 'Jarayon yakunlangan',
					stageStructuresShort: 'tuzilmalar',
					stageMonitoringShort: 'boshliq',
					stageFinishedShort: 'yakunlandi',
				}

	const history = useMemo(
		() => parseHistory(record?.params?.approvalHistory).slice().reverse(),
		[record?.params?.approvalHistory],
	)
	const needsComment = decision !== 'tasdiqlandi'
	const backUrl = `/admin/resources/${resource?.id}/records/${record?.id}/show`

	const submitDecision = async () => {
		if (needsComment && !comment.trim()) {
			addNotice({
				message: text.commentRequiredError,
				type: 'error',
			})
			return
		}

		setSaving(true)

		try {
			const response = await api.recordAction({
				resourceId: resource.id,
				recordId: record.id,
				actionName: action.name,
				data: {
					decision,
					comment,
				},
			})

			if (response?.data?.notice) {
				addNotice(response.data.notice)
			}

			window.location.href = response?.data?.redirectUrl || backUrl
		} catch (error) {
			setSaving(false)
			addNotice({
				message: error?.response?.data?.notice?.message || text.saveError,
				type: 'error',
			})
		}
	}

	return (
		<Box variant='grey'>
			<Box bg='white' p='xxl' borderRadius='xl' boxShadow='card'>
				<H2>{text.title}</H2>
				<Text mt='default' mb='xl' color='grey100'>
					{text.subtitle}
				</Text>

				<MessageBox variant='info' mb='xl'>
					<Text>
						<strong>{text.status}:</strong> {record?.params?.status || '-'}
					</Text>
					<Text mt='sm'>
						<strong>{text.stage}:</strong>{' '}
						{resolveStageLabel(record?.params?.currentStage, text)}
					</Text>
					<Text mt='sm'>
						<strong>{text.summary}:</strong>{' '}
						{record?.params?.approvalSummary || text.noSummary}
					</Text>
				</MessageBox>

				<Box>
					<Text fontWeight='bold' mb='default'>
						{text.decisionLabel}
					</Text>

					<Box style={{ display: 'grid', gap: '10px' }}>
						{DECISIONS.map(option => {
							const selected = decision === option
							const meta = getDecisionOptionMeta(option, language)

							return (
								<label key={option} style={optionStyle(selected)}>
									<input
										type='radio'
										name='decision'
										value={option}
										checked={selected}
										onChange={() => setDecision(option)}
									/>
									<span
										style={{
											display: 'inline-flex',
											alignItems: 'center',
											gap: '10px',
										}}
									>
										<span
											style={{
												display: 'inline-flex',
												alignItems: 'center',
												justifyContent: 'center',
												width: '24px',
												height: '24px',
												borderRadius: '999px',
												background: meta.background,
												color: meta.color,
												fontWeight: 700,
												flexShrink: 0,
											}}
										>
											{meta.icon}
										</span>
										<span>{meta.label}</span>
									</span>
								</label>
							)
						})}
					</Box>
				</Box>

				<Box mt='xl'>
					<Text fontWeight='bold' mb='sm'>
						{text.commentLabel}
						{needsComment ? ' *' : ''}
					</Text>
					<Text mb='default' color='grey100'>
						{needsComment ? text.commentRequired : text.commentOptional}
					</Text>
					<textarea
						value={comment}
						onChange={event => setComment(event.target.value)}
						placeholder={text.commentLabel}
						style={textareaStyle}
					/>
				</Box>

				<Box display='flex' flexWrap='wrap' gap='default' mt='xl'>
					<Button onClick={submitDecision} disabled={saving}>
						{saving ? text.saving : text.submit}
					</Button>
					<Button as='a' href={backUrl} variant='outlined'>
						{text.back}
					</Button>
				</Box>

				{history.length ? (
					<Box mt='xxl'>
						<Text fontWeight='bold' mb='default'>
							{text.historyTitle}
						</Text>

						<Box style={{ display: 'grid', gap: '10px' }}>
							{history.map((entry, index) => (
								<Box
									key={`${entry.decidedAt || 'entry'}-${index}`}
									p='lg'
									style={{
										border: '1px solid #e2e8f0',
										borderRadius: '12px',
										background: '#f8fafc',
									}}
								>
									<Text fontWeight='bold'>
										{entry.userName || '-'} — {entry.decision || '-'}
									</Text>
									<Text mt='sm' color='grey100'>
										{resolveHistoryStage(entry.stage, text)} ·{' '}
										{formatDate(entry.decidedAt)}
									</Text>
									{entry.comment ? <Text mt='sm'>{entry.comment}</Text> : null}
								</Box>
							))}
						</Box>
					</Box>
				) : null}
			</Box>
		</Box>
	)
}

export default PurchaseApprovalAction
