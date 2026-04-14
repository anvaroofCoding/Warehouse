import {
	Box,
	Button,
	H2,
	Label,
	MessageBox,
	Text,
} from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin, useNotice, useTranslation } from 'adminjs'
import { useEffect, useMemo, useState } from 'react'

const api = new ApiClient()

const cardStyle = {
	padding: '18px',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const tableWrapStyle = {
	overflowX: 'auto',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const tableStyle = {
	width: '100%',
	borderCollapse: 'collapse',
	minWidth: '1100px',
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

const actionBarStyle = {
	display: 'flex',
	flexWrap: 'wrap',
	gap: '16px 18px',
	alignItems: 'center',
}

const navButtonStyle = {
	minWidth: '170px',
	justifyContent: 'center',
}

const statsGridStyle = {
	display: 'grid',
	gap: '12px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
	marginTop: '16px',
}

const statCardStyle = {
	padding: '14px',
	borderRadius: '12px',
	border: '1px solid #dbe3f0',
	background: '#f8fafc',
}

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

const InventoryHistory = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const {
		i18n: { language },
	} = useTranslation()
	const pageCopy =
		language === 'ru'
			? {
					title: 'Мониторинг расходов',
					subtitle:
						'Здесь видно, что поступило на склад, что было списано и что позже было возвращено администратором.',
					toStockOut: 'Расход товаров',
					toWarehouses: 'Склады',
					loading: 'Загрузка движений...',
					warehouseFilter: 'Склад',
					typeFilter: 'Тип',
					searchLabel: 'Поиск',
					searchPlaceholder: 'Поиск по складу, товару, заявке или комментарию',
					emptyState: 'Подходящих движений не найдено.',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					allWarehouses: 'Все склады',
					allTypes: 'Все типы',
					incomingType: 'Приход',
					outgoingType: 'Расход',
					returnType: 'Возврат',
					warehouseLabel: 'Склад',
					actorLabel: 'Кто сделал',
					statusLabel: 'Статус',
					commentLabel: 'Комментарий',
					itemsLabel: 'Товары',
					requestsLabel: 'Заявки',
					dateLabel: 'Дата',
					actionsLabel: 'Действие',
					revertAction: 'Отменить расход',
					revertingAction: 'Отмена...',
					revertPrompt: 'Укажите причину отмены расхода',
					summaryIn: 'Приходы',
					summaryOut: 'Расходы',
					summaryReturn: 'Возвраты',
				}
			: {
					title: 'Chiqimlar monitoringi',
					subtitle:
						'Bu yerda omborga kirgan, chiqim qilingan va keyin admin tomonidan qaytarilgan barcha harakatlar aniq ko‘rinadi.',
					toStockOut: 'Chiqim qilish',
					toWarehouses: 'Omborlar',
					loading: 'Harakatlar yuklanmoqda...',
					warehouseFilter: 'Ombor',
					typeFilter: 'Turi',
					searchLabel: 'Qidiruv',
					searchPlaceholder: 'Ombor, tovar, ariza yoki izoh bo‘yicha qidiring',
					emptyState: 'Mos harakat topilmadi.',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					allWarehouses: 'Barcha omborlar',
					allTypes: 'Barcha turlar',
					incomingType: 'Kirim',
					outgoingType: 'Chiqim',
					returnType: 'Qaytarilgan',
					warehouseLabel: 'Ombor',
					actorLabel: 'Kim bajardi',
					statusLabel: 'Holati',
					commentLabel: 'Izoh',
					itemsLabel: 'Tovarlar',
					requestsLabel: 'Arizalar',
					dateLabel: 'Sana',
					actionsLabel: 'Amal',
					revertAction: 'Chiqimni bekor qilish',
					revertingAction: 'Bekor qilinmoqda...',
					revertPrompt: 'Chiqim nega bekor qilinayotganini yozing',
					summaryIn: 'Kirimlar',
					summaryOut: 'Chiqimlar',
					summaryReturn: 'Qaytarilganlar',
				}

	const [warehouses, setWarehouses] = useState([])
	const [movements, setMovements] = useState([])
	const [loading, setLoading] = useState(true)
	const [canRevert, setCanRevert] = useState(false)
	const [warehouseFilter, setWarehouseFilter] = useState('')
	const [typeFilter, setTypeFilter] = useState('')
	const [searchText, setSearchText] = useState('')
	const [revertingBatchId, setRevertingBatchId] = useState('')

	const canView = ['admin', 'monitoring', 'tuzilmalar'].includes(
		currentAdmin?.role,
	)

	const loadHistory = async () => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'InventoryHistory',
				actionName: 'inventoryHistory',
			})
			setWarehouses(response?.data?.warehouses || [])
			setMovements(response?.data?.movements || [])
			setCanRevert(Boolean(response?.data?.canRevert))
		} catch (error) {
			setWarehouses([])
			setMovements([])
			addNotice({
				message:
					error?.response?.data?.notice?.message || pageCopy.accessDenied,
				type: 'error',
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		loadHistory()
	}, [])

	const filteredMovements = useMemo(() => {
		const query = String(searchText || '')
			.trim()
			.toLowerCase()

		return (movements || []).filter(movement => {
			if (
				warehouseFilter &&
				String(movement?.warehouseId || '').trim() !== warehouseFilter
			) {
				return false
			}

			if (typeFilter && String(movement?.type || '') !== typeFilter) {
				return false
			}

			if (!query) {
				return true
			}

			return [
				movement?.warehouseName,
				...(movement?.itemNames || []),
				...(movement?.requestNumbers || []),
				movement?.comment,
				movement?.actor,
			]
				.join(' ')
				.toLowerCase()
				.includes(query)
		})
	}, [movements, warehouseFilter, typeFilter, searchText])

	const stats = useMemo(
		() => ({
			incoming: filteredMovements.filter(item => item.type === 'in').length,
			outgoing: filteredMovements.filter(item => item.type === 'out').length,
			returned: filteredMovements.filter(item => item.type === 'return').length,
		}),
		[filteredMovements],
	)

	const getTypeLabel = type => {
		if (type === 'in') {
			return pageCopy.incomingType
		}

		if (type === 'return') {
			return pageCopy.returnType
		}

		return pageCopy.outgoingType
	}

	const getStatusLabel = movement => {
		if (movement?.type === 'return') {
			return pageCopy.returnType
		}

		return movement?.status === 'reverted'
			? pageCopy.returnType
			: getTypeLabel(movement?.type)
	}

	const handleRevert = async movement => {
		const revertComment =
			typeof window !== 'undefined'
				? window.prompt(pageCopy.revertPrompt, '')
				: ''

		if (revertComment === null) {
			return
		}

		setRevertingBatchId(movement.batchId)

		try {
			const response = await api.resourceAction({
				resourceId: 'InventoryHistory',
				actionName: 'inventoryHistory',
				method: 'post',
				data: {
					batchId: movement.batchId,
					revertComment,
				},
			})
			setMovements(response?.data?.movements || [])
			addNotice({
				message: response?.data?.notice?.message || pageCopy.returnType,
				type: 'success',
			})
		} catch (error) {
			const fieldErrors = Object.values(
				error?.response?.data?.record?.errors || {},
			)
				.map(item => String(item?.message || '').trim())
				.filter(Boolean)

			addNotice({
				message:
					fieldErrors.join('. ') ||
					error?.response?.data?.notice?.message ||
					pageCopy.accessDenied,
				type: 'error',
			})
		} finally {
			setRevertingBatchId('')
		}
	}

	if (!canView) {
		return (
			<Box>
				<Box bg='white' p='xxl' borderRadius='xl'>
					<H2>{pageCopy.title}</H2>
					<MessageBox variant='danger' mt='xl'>
						<Text>{pageCopy.accessDenied}</Text>
					</MessageBox>
				</Box>
			</Box>
		)
	}

	return (
		<Box>
			<Box bg='white' p='xxl' borderRadius='xl'>
				<H2>{pageCopy.title}</H2>
				<Text mt='sm' color='grey60'>
					{pageCopy.subtitle}
				</Text>

				<Box
					style={{ ...actionBarStyle, marginTop: '16px', marginBottom: '20px' }}
				>
					{currentAdmin?.role === 'tuzilmalar' ? (
						<Button
							as='a'
							href='/admin/resources/ChiqimQilish'
							variant='outlined'
							style={navButtonStyle}
						>
							{pageCopy.toStockOut}
						</Button>
					) : null}
					<Button
						as='a'
						href='/admin/resources/WarehouseOverview'
						variant='outlined'
						style={navButtonStyle}
					>
						{pageCopy.toWarehouses}
					</Button>
				</Box>

				{loading ? (
					<Text>{pageCopy.loading}</Text>
				) : (
					<Box style={{ display: 'grid', gap: '16px' }}>
						<Box style={cardStyle}>
							<Box style={statsGridStyle}>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.summaryIn}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{stats.incoming}
									</Text>
								</Box>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.summaryOut}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{stats.outgoing}
									</Text>
								</Box>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.summaryReturn}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{stats.returned}
									</Text>
								</Box>
							</Box>
						</Box>

						<Box style={cardStyle}>
							<Box
								style={{
									display: 'grid',
									gap: '12px',
									gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
								}}
							>
								<Box>
									<Label>{pageCopy.warehouseFilter}</Label>
									<select
										value={warehouseFilter}
										onChange={event => setWarehouseFilter(event.target.value)}
										style={{ ...inputStyle, marginTop: '8px' }}
									>
										<option value=''>{pageCopy.allWarehouses}</option>
										{warehouses.map(warehouse => (
											<option key={warehouse.id} value={warehouse.id}>
												{warehouse.name}
											</option>
										))}
									</select>
								</Box>
								<Box>
									<Label>{pageCopy.typeFilter}</Label>
									<select
										value={typeFilter}
										onChange={event => setTypeFilter(event.target.value)}
										style={{ ...inputStyle, marginTop: '8px' }}
									>
										<option value=''>{pageCopy.allTypes}</option>
										<option value='in'>{pageCopy.incomingType}</option>
										<option value='out'>{pageCopy.outgoingType}</option>
										<option value='return'>{pageCopy.returnType}</option>
									</select>
								</Box>
								<Box>
									<Label>{pageCopy.searchLabel}</Label>
									<input
										type='text'
										value={searchText}
										onChange={event => setSearchText(event.target.value)}
										placeholder={pageCopy.searchPlaceholder}
										style={{ ...inputStyle, marginTop: '8px' }}
									/>
								</Box>
							</Box>
						</Box>

						{filteredMovements.length ? (
							<Box style={tableWrapStyle}>
								<table style={tableStyle}>
									<thead>
										<tr>
											<th style={tableHeadCellStyle}>#</th>
											<th style={tableHeadCellStyle}>{pageCopy.statusLabel}</th>
											<th style={tableHeadCellStyle}>
												{pageCopy.warehouseLabel}
											</th>
											<th style={tableHeadCellStyle}>{pageCopy.itemsLabel}</th>
											<th style={tableHeadCellStyle}>
												{pageCopy.requestsLabel}
											</th>
											<th style={tableHeadCellStyle}>
												{pageCopy.commentLabel}
											</th>
											<th style={tableHeadCellStyle}>{pageCopy.actorLabel}</th>
											<th style={tableHeadCellStyle}>{pageCopy.dateLabel}</th>
											<th style={tableHeadCellStyle}>
												{pageCopy.actionsLabel}
											</th>
										</tr>
									</thead>
									<tbody>
										{filteredMovements.map((movement, index) => (
											<tr
												key={movement.id}
												style={{
													background:
														movement.type === 'return'
															? '#f0fdf4'
															: movement.status === 'reverted'
																? '#fff7ed'
																: '#ffffff',
												}}
											>
												<td style={tableCellStyle}>{index + 1}</td>
												<td style={tableCellStyle}>
													<Text fontWeight='bold'>
														{movement.icon} {getTypeLabel(movement.type)}
													</Text>
													<Text mt='xs' color='grey60'>
														{getStatusLabel(movement)}
													</Text>
												</td>
												<td style={tableCellStyle}>
													<Text fontWeight='bold'>
														{movement.warehouseName || '—'}
													</Text>
												</td>
												<td style={tableCellStyle}>
													<Text>
														{(movement.itemNames || []).join(', ') || '—'}
													</Text>
													<Text mt='xs' color='grey60'>
														{movement.totalQuantity || 0}
													</Text>
												</td>
												<td style={tableCellStyle}>
													{(movement.requestNumbers || []).join(', ') || '—'}
												</td>
												<td style={tableCellStyle}>
													{movement.comment || '—'}
												</td>
												<td style={tableCellStyle}>
													<Text>{movement.actor || '—'}</Text>
													<Text mt='xs' color='grey60'>
														{movement.actorRole || '—'}
													</Text>
												</td>
												<td style={tableCellStyle}>
													{formatDate(movement.happenedAt)}
												</td>
												<td style={tableCellStyle}>
													{canRevert &&
													movement.type === 'out' &&
													movement.status !== 'reverted' ? (
														<Button
															type='button'
															size='sm'
															variant='outlined'
															onClick={() => handleRevert(movement)}
															disabled={revertingBatchId === movement.batchId}
														>
															{revertingBatchId === movement.batchId
																? pageCopy.revertingAction
																: pageCopy.revertAction}
														</Button>
													) : (
														<Text color='grey60'>—</Text>
													)}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</Box>
						) : (
							<MessageBox variant='info'>
								<Text>{pageCopy.emptyState}</Text>
							</MessageBox>
						)}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default InventoryHistory
