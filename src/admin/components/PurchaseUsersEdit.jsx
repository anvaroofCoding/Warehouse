import { Box, Label, Text } from '@adminjs/design-system'
import { ApiClient, useTranslation } from 'adminjs'
import { useEffect, useMemo, useState } from 'react'

const api = new ApiClient()

const parseSelectedUsers = value => {
	if (Array.isArray(value)) {
		return value.map(item => String(item))
	}

	if (!value) {
		return []
	}

	try {
		const parsed = JSON.parse(value)
		return Array.isArray(parsed) ? parsed.map(item => String(item)) : []
	} catch {
		return []
	}
}

const resolveStructureLabel = user =>
	user?.params?.organizationName ||
	user?.params?.displayName ||
	user?.title ||
	'Tuzilma nomi kiritilmagan'

const resolveApproverLabel = user => {
	const username = user?.params?.username ? `@${user.params.username}` : ''
	const fullName = [user?.params?.firstName, user?.params?.lastName]
		.filter(Boolean)
		.join(' ')
		.trim()

	return (
		[fullName || user?.params?.displayName || user?.title, username]
			.filter(Boolean)
			.join(' — ') ||
		user?.params?.username ||
		'Monitoring'
	)
}

const itemStyle = checked => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	padding: '12px 14px',
	borderRadius: '12px',
	border: checked ? '1px solid #2563eb' : '1px solid #dbe3f0',
	background: checked ? '#eff6ff' : '#ffffff',
	cursor: 'pointer',
})

const errorTextStyle = {
	color: '#dc2626',
	fontSize: '12px',
}

const selectStyle = {
	width: '100%',
	padding: '12px 14px',
	borderRadius: '12px',
	border: '1px solid #dbe3f0',
	background: '#ffffff',
	fontSize: '14px',
}

const PurchaseUsersEdit = props => {
	const { property, record, onChange } = props
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const {
		i18n: { language },
	} = useTranslation()

	const text =
		language === 'ru'
			? {
					label: 'Структуры',
					description: 'Выберите одну или несколько структур.',
					approverLabel: 'Согласующий руководитель',
					approverDescription: 'Выберите руководителя из списка.',
					approverPlaceholder: 'Выберите руководителя',
					loading: 'Загрузка данных...',
					empty: 'Пока нет структур для выбора.',
					approverEmpty: 'Пользователи с ролью monitoring пока не найдены.',
				}
			: {
					label: 'Tuzilmalar',
					description:
						'Tuzilma rolidagi bir yoki bir nechta foydalanuvchini tanlang.',
					approverLabel: 'Tasdiqlovchi boshliq',
					approverDescription: 'Monitoring rolidagi boshliqni tanlang.',
					approverPlaceholder: 'Boshliqni tanlang',
					loading: 'Ma’lumotlar yuklanmoqda...',
					empty: 'Hozircha tuzilma rolidagi foydalanuvchi topilmadi.',
					approverEmpty:
						'Hozircha monitoring rolidagi foydalanuvchi topilmadi.',
				}

	const selectedUsers = useMemo(
		() => parseSelectedUsers(record.params?.[property.path]),
		[property.path, record.params],
	)
	const selectedApprover = String(record.params?.approver || '')
	const selectedUsersError = record.errors?.selectedUsers?.message
	const approverError = record.errors?.approver?.message

	const structureUsers = useMemo(
		() => users.filter(user => user?.params?.role === 'tuzilmalar'),
		[users],
	)

	const monitoringUsers = useMemo(
		() => users.filter(user => user?.params?.role === 'monitoring'),
		[users],
	)

	useEffect(() => {
		let isActive = true

		const loadUsers = async () => {
			try {
				const response = await api.resourceAction({
					resourceId: 'User',
					actionName: 'picker',
					params: { perPage: 500 },
				})

				if (isActive) {
					setUsers(response.data.records || [])
				}
			} catch {
				if (isActive) {
					setUsers([])
				}
			} finally {
				if (isActive) {
					setLoading(false)
				}
			}
		}

		loadUsers()

		return () => {
			isActive = false
		}
	}, [])

	const toggleUser = userId => {
		const nextUsers = selectedUsers.includes(userId)
			? selectedUsers.filter(id => id !== userId)
			: [...selectedUsers, userId]

		onChange(property.path, JSON.stringify(nextUsers))
	}

	const selectApprover = userId => {
		onChange('approver', String(userId))
	}

	return (
		<Box>
			<Label required={property.isRequired}>
				{property.label && property.label !== property.path
					? property.label
					: text.label}
			</Label>
			<Text mb='default' color='grey100'>
				{text.description}
			</Text>

			<Box style={{ display: 'grid', gap: '8px' }}>
				{loading ? (
					<Text>{text.loading}</Text>
				) : structureUsers.length ? (
					structureUsers.map(user => {
						const userId = String(user.id)
						const checked = selectedUsers.includes(userId)

						return (
							<label key={userId} style={itemStyle(checked)}>
								<input
									type='checkbox'
									checked={checked}
									onChange={() => toggleUser(userId)}
								/>
								<span>{resolveStructureLabel(user)}</span>
							</label>
						)
					})
				) : (
					<Text>{text.empty}</Text>
				)}
			</Box>

			{selectedUsersError ? (
				<Text mt='sm' style={errorTextStyle}>
					{selectedUsersError}
				</Text>
			) : null}

			<Box mt='xl'>
				<Label required>{text.approverLabel}</Label>
				<Text mb='default' color='grey100'>
					{text.approverDescription}
				</Text>

				{loading ? (
					<Text>{text.loading}</Text>
				) : monitoringUsers.length ? (
					<select
						value={selectedApprover}
						onChange={event => selectApprover(event.target.value)}
						style={selectStyle}
					>
						<option value=''>{text.approverPlaceholder}</option>
						{monitoringUsers.map(user => (
							<option key={user.id} value={String(user.id)}>
								{resolveApproverLabel(user)}
							</option>
						))}
					</select>
				) : (
					<Text>{text.approverEmpty}</Text>
				)}

				{approverError ? (
					<Text mt='sm' style={errorTextStyle}>
						{approverError}
					</Text>
				) : null}
			</Box>
		</Box>
	)
}

export default PurchaseUsersEdit
