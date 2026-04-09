import { Box, Button, H2, MessageBox, Text } from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin, useNotice, useTranslation } from 'adminjs'
import { useEffect, useMemo, useState } from 'react'

const api = new ApiClient()

const cardStyle = {
	padding: '18px',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const warehouseCardStyle = isSelected => ({
	padding: '16px',
	borderRadius: '14px',
	border: `1px solid ${isSelected ? '#3b82f6' : '#e5e7eb'}`,
	background: isSelected ? '#eff6ff' : '#ffffff',
	cursor: 'pointer',
})

const tableWrapStyle = {
	overflowX: 'auto',
	border: '1px solid #e5e7eb',
	borderRadius: '14px',
	background: '#ffffff',
}

const tableStyle = {
	width: '100%',
	borderCollapse: 'collapse',
	minWidth: '880px',
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

const filterInputStyle = {
	width: '100%',
	maxWidth: '420px',
	boxSizing: 'border-box',
	padding: '10px 12px',
	borderRadius: '10px',
	border: '1px solid #cbd5e1',
	fontSize: '14px',
	fontFamily: 'inherit',
	background: '#ffffff',
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

const clickableRowStyle = {
	cursor: 'pointer',
	transition: 'background 0.15s ease',
}

const getWarehouseIdFromLocation = () => {
	if (typeof window === 'undefined') {
		return ''
	}

	return String(
		new URLSearchParams(window.location.search).get('warehouseId') || '',
	).trim()
}

const syncWarehouseLocation = warehouseId => {
	if (typeof window === 'undefined') {
		return
	}

	const url = new URL(window.location.href)

	if (warehouseId) {
		url.searchParams.set('warehouseId', warehouseId)
	} else {
		url.searchParams.delete('warehouseId')
	}

	window.history.replaceState({}, '', `${url.pathname}${url.search}`)
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

const WarehouseOverview = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const {
		i18n: { language },
	} = useTranslation()
	const isMyWarehousePage =
		typeof window !== 'undefined' &&
		window.location.pathname.includes('/admin/resources/MyWarehouse')
	const pageCopy =
		language === 'ru'
			? {
					title: 'Склады',
					subtitle:
						'При открытии склада вы сразу переходите внутрь и видите все товары, которые были фактически приняты структурой.',
					toDispatch: 'Отправка заказа',
					toReceive: 'Приём заказа',
					toOrder: 'Оформление заказа',
					toMyWarehouse: 'Мой склад',
					loading: 'Загрузка складов...',
					listTitle: 'Склады структур',
					searchPlaceholder: 'Поиск по названию структуры или ответственному',
					emptyList: 'Подходящие склады не найдены.',
					openHint:
						'Нажмите на строку склада, чтобы сразу открыть его содержимое.',
					openAction: 'Открыть',
					backToList: 'Назад к списку складов',
					selectedTitle: 'Все товары внутри склада',
					lastUpdated: 'Последнее обновление',
					noItems: 'На этом складе пока нет принятых товаров.',
					itemSearchPlaceholder:
						'Поиск по товару, характеристике, источнику или заявке',
					filteredItemsEmpty: 'По этому фильтру товары не найдены.',
					pickWarehouse: 'Выберите склад, чтобы открыть его содержимое.',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					loadError: 'Не удалось загрузить данные складов',
				}
			: {
					title: 'Omborlar',
					subtitle:
						'Omborni ochsangiz, ichiga darrov kirib barcha qabul qilingan tovarlarni ko‘rasiz.',
					toDispatch: 'Buyurtmani jo‘natish',
					toReceive: 'Buyurtmani qabul qilish',
					toOrder: 'Buyurtma qilish',
					toMyWarehouse: 'Mening omborim',
					loading: 'Omborlar yuklanmoqda...',
					listTitle: 'Tarkibiy tuzilma omborlari',
					searchPlaceholder: 'Tuzilma nomi yoki mas’ul bo‘yicha qidiring',
					emptyList: 'Mos ombor topilmadi.',
					openHint: 'Qator ustiga bossangiz, ombor ichiga darrov kirasiz.',
					openAction: 'Ochish',
					backToList: 'Omborlar ro‘yxatiga qaytish',
					selectedTitle: 'Ombor ichidagi barcha tovarlar',
					lastUpdated: 'Oxirgi yangilanish',
					noItems: 'Bu omborda hozircha qabul qilingan tovar yo‘q.',
					itemSearchPlaceholder:
						'Tovar, xususiyat, manba yoki ariza bo‘yicha filter',
					filteredItemsEmpty: 'Ushbu filter bo‘yicha tovar topilmadi.',
					pickWarehouse: 'Ichini ko‘rish uchun omborni oching.',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					loadError: 'Omborlar ma’lumotini yuklab bo‘lmadi',
				}
	if (isMyWarehousePage) {
		Object.assign(pageCopy, {
			title: language === 'ru' ? 'Мой склад' : 'Mening omborim',
			subtitle:
				language === 'ru'
					? 'Здесь вы видите все товары, которые есть на складе вашей структуры.'
					: 'Bu yerda tuzilmangiz omborida bor barcha tovarlarni to‘liq ko‘rasiz.',
			listTitle: language === 'ru' ? 'Мой склад' : 'Mening omborim',
			selectedTitle:
				language === 'ru'
					? 'Все товары на моём складе'
					: 'Mening omborimdagi barcha tovarlar',
		})
	}

	const [warehouses, setWarehouses] = useState([])
	const [selectedWarehouseId, setSelectedWarehouseId] = useState(() =>
		getWarehouseIdFromLocation(),
	)
	const [searchText, setSearchText] = useState('')
	const [itemSearchText, setItemSearchText] = useState('')
	const [loading, setLoading] = useState(true)

	const canView = [
		'admin',
		'monitoring',
		'sotib_oluvchi',
		'tuzilmalar',
	].includes(currentAdmin?.role)

	const filteredWarehouses = useMemo(() => {
		const query = String(searchText || '')
			.trim()
			.toLowerCase()

		if (!query) {
			return warehouses
		}

		return warehouses.filter(warehouse =>
			`${warehouse?.name || ''} ${warehouse?.description || ''}`
				.toLowerCase()
				.includes(query),
		)
	}, [searchText, warehouses])

	const selectedWarehouse = useMemo(
		() =>
			warehouses.find(warehouse => warehouse.id === selectedWarehouseId) ||
			null,
		[warehouses, selectedWarehouseId],
	)

	const filteredSelectedItems = useMemo(() => {
		const items = selectedWarehouse?.items || []
		const query = String(itemSearchText || '')
			.trim()
			.toLowerCase()

		if (!query) {
			return items
		}

		return items.filter(item =>
			[
				item?.productName,
				item?.features,
				item?.supplierName,
				item?.requestNumber,
				item?.unit,
			]
				.join(' ')
				.toLowerCase()
				.includes(query),
		)
	}, [itemSearchText, selectedWarehouse])

	const openWarehouse = warehouseId => {
		setSelectedWarehouseId(warehouseId)
		syncWarehouseLocation(warehouseId)
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const handleBackToList = () => {
		setSelectedWarehouseId('')
		syncWarehouseLocation('')
	}

	const loadWarehouses = async () => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: isMyWarehousePage ? 'MyWarehouse' : 'WarehouseOverview',
				actionName: 'warehouseOverview',
			})
			const nextWarehouses = response?.data?.warehouses || []
			const requestedWarehouseId = getWarehouseIdFromLocation()
			const shouldAutoOpen =
				currentAdmin?.role === 'tuzilmalar' || nextWarehouses.length === 1
			const defaultWarehouseId = shouldAutoOpen
				? nextWarehouses[0]?.id || ''
				: ''
			const nextSelectedWarehouseId = requestedWarehouseId || defaultWarehouseId

			setWarehouses(nextWarehouses)
			setSelectedWarehouseId(currentId => {
				if (
					currentId &&
					nextWarehouses.some(warehouse => warehouse.id === currentId)
				) {
					return currentId
				}

				return nextSelectedWarehouseId
			})

			if (nextSelectedWarehouseId) {
				syncWarehouseLocation(nextSelectedWarehouseId)
			}
		} catch (error) {
			setWarehouses([])
			setSelectedWarehouseId('')
			addNotice({
				message: error?.response?.data?.notice?.message || pageCopy.loadError,
				type: 'error',
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		loadWarehouses()
	}, [])

	useEffect(() => {
		setItemSearchText('')
	}, [selectedWarehouseId])

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
				<Text color='primary100' fontWeight='bold' mb='default'>
					Zaxira.uz
				</Text>
				<H2>{pageCopy.title}</H2>
				<Text mt='sm' color='grey60'>
					{pageCopy.subtitle}
				</Text>

				<Box
					style={{ ...actionBarStyle, marginTop: '16px', marginBottom: '20px' }}
				>
					<Button
						as='a'
						href='/admin/resources/PurchaseDispatchWorkspace'
						variant='outlined'
						style={navButtonStyle}
					>
						{pageCopy.toDispatch}
					</Button>
					{['admin', 'tuzilmalar'].includes(currentAdmin?.role) ? (
						<Button
							as='a'
							href='/admin/resources/PurchaseReceiveWorkspace'
							variant='outlined'
							style={navButtonStyle}
						>
							{pageCopy.toReceive}
						</Button>
					) : null}
					<Button
						as='a'
						href='/admin/resources/PurchaseOrderWorkspace'
						variant='outlined'
						style={navButtonStyle}
					>
						{pageCopy.toOrder}
					</Button>
					{['admin', 'tuzilmalar'].includes(currentAdmin?.role) &&
					!isMyWarehousePage ? (
						<Button
							as='a'
							href='/admin/resources/MyWarehouse'
							variant='outlined'
							style={navButtonStyle}
						>
							{pageCopy.toMyWarehouse}
						</Button>
					) : null}
				</Box>

				{loading ? (
					<Text>{pageCopy.loading}</Text>
				) : selectedWarehouse ? (
					<Box style={{ display: 'grid', gap: '16px' }}>
						{currentAdmin?.role !== 'tuzilmalar' && warehouses.length > 1 ? (
							<Button
								type='button'
								variant='outlined'
								style={{ width: 'fit-content' }}
								onClick={handleBackToList}
							>
								← {pageCopy.backToList}
							</Button>
						) : null}

						<Box style={cardStyle}>
							<Text fontWeight='bold' fontSize='xl'>
								{selectedWarehouse.name}
							</Text>
							<Text mt='xs' color='grey60'>
								{selectedWarehouse.description || '—'}
							</Text>
							<Text mt='sm' color='grey60'>
								{pageCopy.lastUpdated}:{' '}
								{formatDate(selectedWarehouse.updatedAt)}
							</Text>

							<Box style={statsGridStyle}>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.rowsLabel}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{selectedWarehouse.itemCount || 0}
									</Text>
								</Box>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.totalLabel}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{selectedWarehouse.totalQuantity || 0}
									</Text>
								</Box>
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.shipmentsLabel}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{selectedWarehouse.requestCount || 0}
									</Text>
								</Box>
							</Box>
						</Box>

						<Box style={cardStyle}>
							<Text fontWeight='bold' mb='sm'>
								{pageCopy.selectedTitle}
							</Text>
							{selectedWarehouse.items?.length ? (
								<>
									<input
										type='text'
										value={itemSearchText}
										onChange={event => setItemSearchText(event.target.value)}
										placeholder={pageCopy.itemSearchPlaceholder}
										style={{ ...filterInputStyle, marginTop: '8px' }}
									/>
									<Box mt='lg' style={tableWrapStyle}>
										<table style={tableStyle}>
											<thead>
												<tr>
													<th style={tableHeadCellStyle}>#</th>
													<th style={tableHeadCellStyle}>Tovar</th>
													<th style={tableHeadCellStyle}>Xususiyatlari</th>
													<th style={tableHeadCellStyle}>Soni</th>
													<th style={tableHeadCellStyle}>Manba</th>
													<th style={tableHeadCellStyle}>Ariza</th>
													<th style={tableHeadCellStyle}>Kelgan sana</th>
												</tr>
											</thead>
											<tbody>
												{filteredSelectedItems.map((item, index) => (
													<tr
														key={`${item.requestId}-${item.productName}-${index}`}
													>
														<td style={tableCellStyle}>{index + 1}</td>
														<td style={tableCellStyle}>
															<Text fontWeight='bold'>
																{item.productName || '—'}
															</Text>
															<Text mt='xs' color='grey60'>
																{item.unit || 'dona'}
															</Text>
														</td>
														<td style={tableCellStyle}>
															{item.features || '—'}
														</td>
														<td style={tableCellStyle}>{item.quantity || 0}</td>
														<td style={tableCellStyle}>
															{item.supplierName || '—'}
														</td>
														<td style={tableCellStyle}>
															{item.requestNumber || '—'}
														</td>
														<td style={tableCellStyle}>
															{formatDate(item.receivedAt)}
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</Box>
									{filteredSelectedItems.length ? null : (
										<MessageBox variant='info' mt='lg'>
											<Text>{pageCopy.filteredItemsEmpty}</Text>
										</MessageBox>
									)}
								</>
							) : (
								<MessageBox variant='info' mt='lg'>
									<Text>{pageCopy.noItems}</Text>
								</MessageBox>
							)}
						</Box>
					</Box>
				) : (
					<Box style={cardStyle}>
						<Text fontWeight='bold' mb='sm'>
							{pageCopy.listTitle}
						</Text>
						<Text color='grey60' mb='default'>
							{pageCopy.openHint}
						</Text>
						<input
							type='text'
							value={searchText}
							onChange={event => setSearchText(event.target.value)}
							placeholder={pageCopy.searchPlaceholder}
							style={{
								...filterInputStyle,
								marginTop: '4px',
								marginBottom: '16px',
							}}
						/>

						{filteredWarehouses.length ? (
							<Box style={tableWrapStyle}>
								<table style={tableStyle}>
									<thead>
										<tr>
											<th style={tableHeadCellStyle}>#</th>
											<th style={tableHeadCellStyle}>{pageCopy.listTitle}</th>
											<th style={tableHeadCellStyle}>{pageCopy.rowsLabel}</th>
											<th style={tableHeadCellStyle}>{pageCopy.totalLabel}</th>
											<th style={tableHeadCellStyle}>
												{pageCopy.shipmentsLabel}
											</th>
											<th style={tableHeadCellStyle}>{pageCopy.openAction}</th>
										</tr>
									</thead>
									<tbody>
										{filteredWarehouses.map((warehouse, index) => (
											<tr
												key={warehouse.id}
												style={{
													...clickableRowStyle,
													background: index % 2 ? '#fcfdff' : '#ffffff',
												}}
												onClick={() => openWarehouse(warehouse.id)}
												onKeyDown={event => {
													if (event.key === 'Enter' || event.key === ' ') {
														event.preventDefault()
														openWarehouse(warehouse.id)
													}
												}}
												role='button'
												tabIndex={0}
											>
												<td style={tableCellStyle}>{index + 1}</td>
												<td style={tableCellStyle}>
													<Text fontWeight='bold'>{warehouse.name}</Text>
													<Text mt='xs' color='grey60'>
														{warehouse.description}
													</Text>
												</td>
												<td style={tableCellStyle}>
													{warehouse.itemCount || 0}
												</td>
												<td style={tableCellStyle}>
													{warehouse.totalQuantity || 0}
												</td>
												<td style={tableCellStyle}>
													{warehouse.requestCount || 0}
												</td>
												<td style={tableCellStyle}>
													<Text color='primary100' fontWeight='bold'>
														{pageCopy.openAction} →
													</Text>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</Box>
						) : (
							<MessageBox variant='info'>
								<Text>{pageCopy.emptyList}</Text>
							</MessageBox>
						)}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default WarehouseOverview
