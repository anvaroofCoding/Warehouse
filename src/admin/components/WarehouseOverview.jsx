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
	minWidth: '1280px',
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

const labelFormGridStyle = {
	display: 'grid',
	gap: '12px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
	alignItems: 'end',
}

const labelCardStyle = {
	padding: '16px',
	borderRadius: '12px',
	border: '1px dashed #93c5fd',
	background: '#f8fbff',
	display: 'grid',
	gap: '12px',
}

const labelPreviewStyle = widthMm => ({
	width: `${widthMm}mm`,
	maxWidth: '100%',
	padding: '8px',
	borderRadius: '10px',
	border: '1px solid #dbe3f0',
	background: '#ffffff',
	boxSizing: 'border-box',
})

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

const formatMoney = value => {
	const amount = Number(value)

	if (!Number.isFinite(amount)) {
		return "0 so'm"
	}

	return `${Math.round(amount).toLocaleString('uz-UZ')} so\'m`
}

const clampLabelWidthMm = value => {
	const width = Number(value)

	if (!Number.isFinite(width)) {
		return 58
	}

	return Math.min(78, Math.max(20, Math.round(width)))
}

const escapeHtml = value =>
	String(value || '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')

const CODE39_PATTERNS = {
	0: 'nnnwwnwnn',
	1: 'wnnwnnnnw',
	2: 'nnwwnnnnw',
	3: 'wnwwnnnnn',
	4: 'nnnwwnnnw',
	5: 'wnnwwnnnn',
	6: 'nnwwwnnnn',
	7: 'nnnwnnwnw',
	8: 'wnnwnnwnn',
	9: 'nnwwnnwnn',
	'*': 'nwnnwnwnn',
}

const buildBarcodeSvg = value => {
	const digits = String(value || '').replace(/\D/g, '')

	if (!digits) {
		return ''
	}

	const encoded = `*${digits}*`
	const narrow = 2
	const wide = 5
	const gap = 2
	const height = 64
	let x = 0
	const bars = []

	for (const symbol of encoded) {
		const pattern = CODE39_PATTERNS[symbol]

		if (!pattern) {
			continue
		}

		for (let index = 0; index < pattern.length; index += 1) {
			const width = pattern[index] === 'w' ? wide : narrow
			if (index % 2 === 0) {
				bars.push(
					`<rect x="${x}" y="0" width="${width}" height="${height}" fill="#111827" />`,
				)
			}
			x += width
		}

		x += gap
	}

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${x} ${height}" preserveAspectRatio="none" role="img" aria-label="Barcode">${bars.join('')}</svg>`
}

const buildLabelPrintMarkup = ({ item, copies, widthMm, pageCopy }) => {
	const safeName = escapeHtml(item?.productName || 'Tovar')
	const safeFeatures = escapeHtml(item?.features || '')
	const safeQuantity = escapeHtml(
		`${item?.quantity || 0} ${item?.unit || 'dona'}`,
	)
	const safeBarcode = escapeHtml(item?.barcode || '')
	const barcodeSvg = buildBarcodeSvg(item?.barcode)
	const labelWidth = clampLabelWidthMm(widthMm)
	const labelCopies = Math.max(1, Math.min(500, Number(copies) || 1))
	const fontSize = labelWidth <= 32 ? 9 : labelWidth <= 50 ? 11 : 13
	const barcodeHeight = labelWidth <= 32 ? 16 : labelWidth <= 50 ? 20 : 24
	const labels = Array.from({ length: labelCopies }, () => {
		return `
			<div class="label">
				<div class="name">${safeName}</div>
				<div class="meta">${safeQuantity}</div>
				${safeFeatures ? `<div class="meta meta-secondary">${safeFeatures}</div>` : ''}
				<div class="barcode-wrap">${barcodeSvg}</div>
				<div class="barcode-text">${safeBarcode}</div>
			</div>
		`
	}).join('')

	return `
		<!doctype html>
		<html lang="uz">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<title>${pageCopy.printLabelAction}</title>
				<style>
					@page {
						size: ${labelWidth}mm auto;
						margin: 2mm;
					}
					body {
						margin: 0;
						font-family: Arial, sans-serif;
						background: #fff;
					}
					.sheet {
						display: grid;
						gap: 2mm;
						padding: 1mm;
					}
					.label {
						width: ${labelWidth}mm;
						box-sizing: border-box;
						padding: 2mm;
						border: 0.3mm solid #ddd;
						border-radius: 1mm;
						page-break-inside: avoid;
					}
					.name {
						font-size: ${fontSize}px;
						font-weight: 700;
						line-height: 1.2;
						word-break: break-word;
						margin-bottom: 1.2mm;
					}
					.meta {
						font-size: ${Math.max(8, fontSize - 2)}px;
						line-height: 1.2;
						color: #334155;
					}
					.meta-secondary {
						margin-top: 0.6mm;
					}
					.barcode-wrap {
						height: ${barcodeHeight}mm;
						margin-top: 1.6mm;
					}
					.barcode-wrap svg {
						width: 100%;
						height: 100%;
						display: block;
					}
					.barcode-text {
						margin-top: 1mm;
						font-size: ${Math.max(8, fontSize - 2)}px;
						text-align: center;
						letter-spacing: 1px;
					}
					@media print {
						.label {
							border-color: transparent;
						}
					}
				</style>
			</head>
			<body>
				<div class="sheet">${labels}</div>
				<script>
					window.addEventListener('load', function () {
						setTimeout(function () {
							window.print()
						}, 150)
					})
				</script>
			</body>
		</html>
	`
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
					rowsLabel: 'Позиции',
					totalLabel: 'Общее количество',
					shipmentsLabel: 'Поставки',
					stockValueLabel: 'Стоимость товаров',
					barcodeLabel: 'Штрихкод',
					unitPriceLabel: 'Цена за единицу',
					totalPriceLabel: 'Сумма',
					itemLabel: 'Товар',
					featuresLabel: 'Характеристики',
					quantityLabel: 'Количество',
					sourceLabel: 'Источник',
					requestLabel: 'Заявка',
					receivedDateLabel: 'Дата поступления',
					filteredItemsEmpty: 'По этому фильтру товары не найдены.',
					pickWarehouse: 'Выберите склад, чтобы открыть его содержимое.',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					loadError: 'Не удалось загрузить данные складов',
					printColumnLabel: 'Печать',
					printLabelAction: 'Печать этикетки',
					labelSettingsTitle: 'Термопринтер — этикетка товара',
					labelCountLabel: 'Сколько штук печатать',
					labelWidthLabel: 'Ширина этикетки (20–78 мм)',
					labelPrintHint:
						'На этикетке печатаются название товара и штрихкод. Укажите количество и отправьте в печать.',
					closeLabelPrinter: 'Закрыть',
					printNow: 'Печатать',
					labelSentMessage: 'Этикетки отправлены на печать',
					popupBlocked:
						'Не удалось открыть окно печати. Разрешите всплывающие окна.',
					noBarcodeToPrint: 'Для этого товара штрихкод ещё не готов',
					previewLabel: 'Предпросмотр',
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
					rowsLabel: 'Tovar pozitsiyasi',
					totalLabel: 'Jami miqdor',
					shipmentsLabel: 'Yetkazib berishlar',
					stockValueLabel: 'Tovar qiymati',
					barcodeLabel: 'Barcode',
					unitPriceLabel: 'Dona narxi',
					totalPriceLabel: 'Jami narx',
					itemLabel: 'Tovar',
					featuresLabel: 'Xususiyatlari',
					quantityLabel: 'Soni',
					sourceLabel: 'Manba',
					requestLabel: 'Ariza',
					receivedDateLabel: 'Kelgan sana',
					filteredItemsEmpty: 'Ushbu filter bo‘yicha tovar topilmadi.',
					pickWarehouse: 'Ichini ko‘rish uchun omborni oching.',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					loadError: 'Omborlar ma’lumotini yuklab bo‘lmadi',
					printColumnLabel: 'Print',
					printLabelAction: 'Etiket chop etish',
					labelSettingsTitle: 'Termoprinter uchun etiket',
					labelCountLabel: 'Nechta chiqsin',
					labelWidthLabel: 'Etiket eni (20–78 mm)',
					labelPrintHint:
						'Etiketda tovar nomi va barcode chiqadi. Nechta nusxa kerak bo‘lsa, shu yerda kiriting.',
					closeLabelPrinter: 'Yopish',
					printNow: 'Print berish',
					labelSentMessage: 'Etiketlar printga yuborildi',
					popupBlocked: 'Print oynasi ochilmadi. Popupga ruxsat bering.',
					noBarcodeToPrint: 'Bu tovar uchun barcode hali tayyor emas',
					previewLabel: 'Namuna',
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
	const [labelItem, setLabelItem] = useState(null)
	const [labelCopies, setLabelCopies] = useState('1')
	const [labelWidthMm, setLabelWidthMm] = useState('58')

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
				nextWarehouses.length === 1 ||
				(isMyWarehousePage && currentAdmin?.role === 'tuzilmalar')
			const defaultWarehouseId = shouldAutoOpen
				? nextWarehouses[0]?.id || ''
				: ''
			const nextSelectedWarehouseId = requestedWarehouseId || defaultWarehouseId

			setWarehouses(nextWarehouses)
			setSelectedWarehouseId(currentId => {
				if (!isMyWarehousePage && !requestedWarehouseId) {
					return nextSelectedWarehouseId
				}

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
		setSelectedWarehouseId(getWarehouseIdFromLocation())
		setSearchText('')
		setItemSearchText('')
		setLabelItem(null)
		setLabelCopies('1')
		loadWarehouses()
	}, [isMyWarehousePage])

	useEffect(() => {
		setItemSearchText('')
		setLabelItem(null)
		setLabelCopies('1')
	}, [selectedWarehouseId])

	const openPrintPanel = item => {
		if (!String(item?.barcode || '').trim()) {
			addNotice({
				message: pageCopy.noBarcodeToPrint,
				type: 'error',
			})
			return
		}

		setLabelItem(item)
		setLabelCopies(String(Math.max(1, Number(item?.quantity || 1))))
		setLabelWidthMm(String(clampLabelWidthMm(labelWidthMm)))

		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const handlePrintLabels = () => {
		if (!labelItem) {
			return
		}

		const copies = Math.max(1, Math.min(500, Number(labelCopies) || 1))
		const widthMm = clampLabelWidthMm(labelWidthMm)
		const printWindow =
			typeof window !== 'undefined'
				? window.open('', '_blank', 'width=900,height=700')
				: null

		if (!printWindow) {
			addNotice({
				message: pageCopy.popupBlocked,
				type: 'error',
			})
			return
		}

		printWindow.document.open()
		printWindow.document.write(
			buildLabelPrintMarkup({
				item: labelItem,
				copies,
				widthMm,
				pageCopy,
			}),
		)
		printWindow.document.close()

		addNotice({
			message: `${copies} ta — ${pageCopy.labelSentMessage}`,
			type: 'success',
		})
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
						{!isMyWarehousePage && warehouses.length > 1 ? (
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
								<Box style={statCardStyle}>
									<Text color='grey60'>{pageCopy.stockValueLabel}</Text>
									<Text fontWeight='bold' fontSize='xxl'>
										{formatMoney(selectedWarehouse.totalValue || 0)}
									</Text>
								</Box>
							</Box>
						</Box>

						<Box style={cardStyle}>
							<Text fontWeight='bold' mb='sm'>
								{pageCopy.selectedTitle}
							</Text>
							{labelItem ? (
								<Box style={{ ...labelCardStyle, marginBottom: '16px' }}>
									<Text fontWeight='bold'>{pageCopy.labelSettingsTitle}</Text>
									<Text color='grey60'>
										{labelItem.productName || '—'} • {labelItem.barcode || '—'}
									</Text>
									<Box style={labelFormGridStyle}>
										<Box>
											<Text mb='xs' fontWeight='bold'>
												{pageCopy.labelCountLabel}
											</Text>
											<input
												type='number'
												min='1'
												max='500'
												value={labelCopies}
												onChange={event => setLabelCopies(event.target.value)}
												style={{ ...filterInputStyle, maxWidth: '100%' }}
											/>
										</Box>
										<Box>
											<Text mb='xs' fontWeight='bold'>
												{pageCopy.labelWidthLabel}
											</Text>
											<input
												type='number'
												min='20'
												max='78'
												value={labelWidthMm}
												onChange={event => setLabelWidthMm(event.target.value)}
												style={{ ...filterInputStyle, maxWidth: '100%' }}
											/>
										</Box>
										<Box>
											<Text mb='xs' fontWeight='bold'>
												{pageCopy.previewLabel}
											</Text>
											<Box
												style={labelPreviewStyle(
													clampLabelWidthMm(labelWidthMm),
												)}
											>
												<Text
													fontWeight='bold'
													style={{ wordBreak: 'break-word' }}
												>
													{labelItem.productName || '—'}
												</Text>
												<Text mt='xs' color='grey60'>
													{`${labelItem.quantity || 0} ${labelItem.unit || 'dona'}`}
												</Text>
												<Box
													mt='sm'
													dangerouslySetInnerHTML={{
														__html: buildBarcodeSvg(labelItem.barcode),
													}}
												/>
												<Text mt='xs' textAlign='center'>
													{labelItem.barcode || '—'}
												</Text>
											</Box>
										</Box>
									</Box>
									<Box display='flex' gap='default' flexWrap='wrap'>
										<Button type='button' onClick={handlePrintLabels}>
											{pageCopy.printNow}
										</Button>
										<Button
											type='button'
											variant='outlined'
											onClick={() => setLabelItem(null)}
										>
											{pageCopy.closeLabelPrinter}
										</Button>
									</Box>
									<Text color='grey60'>{pageCopy.labelPrintHint}</Text>
								</Box>
							) : null}
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
													<th style={tableHeadCellStyle}>
														{pageCopy.itemLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.featuresLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.quantityLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.unitPriceLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.totalPriceLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.barcodeLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.sourceLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.requestLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.receivedDateLabel}
													</th>
													<th style={tableHeadCellStyle}>
														{pageCopy.printColumnLabel}
													</th>
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
														</td>
														<td style={tableCellStyle}>
															{item.features || '—'}
														</td>
														<td style={tableCellStyle}>
															{`${item.quantity || 0} ${item.unit || 'dona'}`}
														</td>
														<td style={tableCellStyle}>
															{formatMoney(item.unitPrice || 0)}
														</td>
														<td style={tableCellStyle}>
															{formatMoney(item.totalPrice || 0)}
														</td>
														<td style={tableCellStyle}>
															{item.barcode || '—'}
														</td>
														<td style={tableCellStyle}>
															{item.supplierName || '—'}
														</td>
														<td style={tableCellStyle}>
															{item.requestNumber || '—'}
														</td>
														<td style={tableCellStyle}>
															{formatDate(item.receivedAt)}
														</td>
														<td style={tableCellStyle}>
															<Button
																type='button'
																size='sm'
																variant='outlined'
																onClick={() => openPrintPanel(item)}
																disabled={!item.barcode}
															>
																{pageCopy.printLabelAction}
															</Button>
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
