import {
	Box,
	Button,
	H2,
	Label,
	MessageBox,
	Text,
} from '@adminjs/design-system'
import { ApiClient, useCurrentAdmin, useNotice, useTranslation } from 'adminjs'
import { useEffect, useMemo, useRef, useState } from 'react'

const api = new ApiClient()

const shellStyle = {
	display: 'grid',
	gap: '22px',
}

const gridStyle = {
	display: 'grid',
	gap: '22px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
	alignItems: 'start',
}

const cardStyle = {
	padding: '22px',
	border: '1px solid #e5e7eb',
	borderRadius: '16px',
	background: '#ffffff',
	boxShadow: '0 8px 24px rgba(15, 23, 42, 0.04)',
	display: 'grid',
	gap: '14px',
}

const inputStyle = {
	width: '100%',
	maxWidth: '100%',
	boxSizing: 'border-box',
	padding: '12px 14px',
	borderRadius: '12px',
	border: '1px solid #cbd5e1',
	fontSize: '14px',
	fontFamily: 'inherit',
	background: '#ffffff',
}

const searchBarStyle = {
	display: 'grid',
	gridTemplateColumns: 'minmax(0, 1fr) auto',
	gap: '12px',
	alignItems: 'center',
	marginTop: '12px',
}

const resultItemStyle = {
	display: 'grid',
	gap: '12px',
	padding: '14px 16px',
	border: '1px solid #e5e7eb',
	borderRadius: '12px',
	background: '#ffffff',
	cursor: 'pointer',
}

const qtyButtonStyle = {
	minWidth: '34px',
	height: '34px',
	padding: 0,
}

const selectedCardStyle = {
	padding: '14px 16px',
	borderRadius: '12px',
	border: '1px solid #e5e7eb',
	background: '#fbfdff',
	display: 'grid',
	gap: '12px',
}

const submitButtonStyle = {
	width: '100%',
	justifyContent: 'center',
}

const getSelectionKey = item =>
	`${String(item?.requestId || '').trim()}::${String(item?.barcode || item?.sourceItemIndex || '').trim()}`

const focusInput = ref => {
	if (typeof window !== 'undefined') {
		window.requestAnimationFrame(() => ref.current?.focus())
		return
	}

	ref.current?.focus()
}

const ChiqimQilish = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const scanInputRef = useRef(null)
	const {
		i18n: { language },
	} = useTranslation()

	const pageCopy =
		language === 'ru'
			? {
					title: 'Расход товаров',
					loading: 'Загрузка остатков...',
					scanLabel: 'Поиск товара или штрихкод',
					scanPlaceholder: 'Введите название товара или сканируйте штрихкод',
					resultsTitle: 'Подходящие товары',
					selectedTitle: 'К оформлению',
					emptyAvailable: 'На вашем складе сейчас нет активного остатка.',
					emptySearch: 'По этому запросу товар не найден.',
					emptySelected: 'Товары для расхода ещё не выбраны.',
					itemLabel: 'Товар',
					barcodeLabel: 'Штрихкод',
					availableLabel: 'Остаток',
					commentLabel: 'Комментарий',
					commentPlaceholder:
						'Например: выдано в использование, повреждение, списание...',
					addAction: 'Добавить',
					removeAction: 'Убрать',
					submitAction: 'Оформить расход',
					savingAction: 'Сохраняется...',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					readOnlyInfo:
						'Просмотр доступен, но оформить расход может только пользователь структуры.',
					notFound: 'Товар не найден в остатке.',
					successFallback: 'Расход успешно оформлен',
					readyBadge: 'Сканер готов',
				}
			: {
					title: 'Chiqim qilish',
					loading: 'Qoldiqlar yuklanmoqda...',
					scanLabel: 'Tovar qidiruvi yoki barcode',
					scanPlaceholder: 'Tovar nomini yozing yoki barcode uring',
					resultsTitle: 'Mos tovarlar',
					selectedTitle: 'Chiqimga tayyor',
					emptyAvailable: 'Sizning omboringizda hozircha faol qoldiq yo‘q.',
					emptySearch: 'Bu qidiruv bo‘yicha tovar topilmadi.',
					emptySelected: 'Chiqim uchun hali tovar tanlanmagan.',
					itemLabel: 'Tovar',
					barcodeLabel: 'Barcode',
					availableLabel: 'Qoldiq',
					commentLabel: 'Izoh',
					commentPlaceholder:
						'Masalan: foydalanishga berildi, shikastlandi, hisobdan chiqarildi...',
					addAction: 'Qo‘shish',
					removeAction: 'Olib tashlash',
					submitAction: 'Chiqim qilish',
					savingAction: 'Saqlanmoqda...',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					readOnlyInfo:
						'Ko‘rish mumkin, lekin chiqimni faqat tuzilma foydalanuvchisi qiladi.',
					notFound: 'Tovar qoldiqda topilmadi.',
					successFallback: 'Chiqim muvaffaqiyatli saqlandi',
					readyBadge: 'Skaner tayyor',
				}

	const [warehouses, setWarehouses] = useState([])
	const [selectedItems, setSelectedItems] = useState([])
	const [scanText, setScanText] = useState('')
	const [comment, setComment] = useState('')
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [canEdit, setCanEdit] = useState(false)

	const canView = ['admin', 'tuzilmalar'].includes(currentAdmin?.role)
	const selectedWarehouse = warehouses[0] || null
	const availableItems = selectedWarehouse?.items || []

	const visibleResults = useMemo(() => {
		const query = String(scanText || '')
			.trim()
			.toLowerCase()

		if (!query) {
			return []
		}

		const rows = availableItems.filter(item =>
			[item?.productName, item?.features, item?.barcode, item?.requestNumber]
				.join(' ')
				.toLowerCase()
				.includes(query),
		)

		return rows.slice(0, 12)
	}, [availableItems, scanText])

	const loadWorkspace = async () => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'ChiqimQilish',
				actionName: 'stockOutWorkspace',
			})

			setWarehouses(response?.data?.warehouses || [])
			setCanEdit(Boolean(response?.data?.canEdit))
			focusInput(scanInputRef)
		} catch (error) {
			setWarehouses([])
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
		loadWorkspace()
	}, [])

	const addItemToSelection = item => {
		const selectionKey = getSelectionKey(item)

		setSelectedItems(currentItems => {
			const availableQuantity = Math.max(0, Number(item?.quantity || 0))
			const existingItem = currentItems.find(
				entry => entry.selectionKey === selectionKey,
			)

			if (!availableQuantity) {
				return currentItems
			}

			if (existingItem) {
				return currentItems.map(entry =>
					entry.selectionKey === selectionKey
						? {
								...entry,
								quantity: Math.min(
									availableQuantity,
									Number(entry.quantity || 0) + 1,
								),
							}
						: entry,
				)
			}

			return [
				{
					selectionKey,
					requestId: item?.requestId,
					requestNumber: item?.requestNumber,
					productName: item?.productName,
					features: item?.features,
					unit: item?.unit,
					barcode: item?.barcode,
					sourceItemIndex: item?.sourceItemIndex || 0,
					availableQuantity,
					unitPrice: item?.unitPrice || 0,
					quantity: 1,
				},
				...currentItems,
			]
		})

		setScanText('')
		focusInput(scanInputRef)
	}

	const handleQuickAdd = () => {
		const query = String(scanText || '')
			.trim()
			.toLowerCase()

		if (!selectedWarehouse) {
			addNotice({ message: pageCopy.emptyAvailable, type: 'error' })
			return
		}

		if (!query) {
			return
		}

		const matchedItem =
			availableItems.find(
				item =>
					String(item?.barcode || '')
						.trim()
						.toLowerCase() === query,
			) ||
			availableItems.find(
				item =>
					String(item?.productName || '')
						.trim()
						.toLowerCase() === query,
			) ||
			visibleResults[0]

		if (!matchedItem) {
			addNotice({ message: pageCopy.notFound, type: 'error' })
			return
		}

		addItemToSelection(matchedItem)
	}

	const updateSelectedQuantity = (selectionKey, nextQuantity) => {
		const numericValue = Number(nextQuantity || 0)

		if (numericValue <= 0) {
			removeSelectedItem(selectionKey)
			return
		}

		setSelectedItems(currentItems =>
			currentItems.map(item => {
				if (item.selectionKey !== selectionKey) {
					return item
				}

				return {
					...item,
					quantity: Math.min(
						Math.max(1, numericValue),
						Math.max(1, Number(item.availableQuantity || 1)),
					),
				}
			}),
		)
	}

	const removeSelectedItem = selectionKey => {
		setSelectedItems(currentItems =>
			currentItems.filter(item => item.selectionKey !== selectionKey),
		)
		focusInput(scanInputRef)
	}

	const handleSubmit = async () => {
		if (!canEdit || saving || !selectedWarehouse) {
			return
		}

		setSaving(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'ChiqimQilish',
				actionName: 'stockOutWorkspace',
				method: 'post',
				data: {
					warehouseId: selectedWarehouse.id,
					comment,
					items: selectedItems.map(item => ({
						requestId: item.requestId,
						requestNumber: item.requestNumber,
						productName: item.productName,
						features: item.features,
						unit: item.unit,
						barcode: item.barcode,
						sourceItemIndex: item.sourceItemIndex,
						unitPrice: item.unitPrice,
						quantity: Number(item.quantity || 0),
					})),
				},
			})

			setSelectedItems([])
			setComment('')
			setScanText('')
			setWarehouses(response?.data?.warehouses || [])
			addNotice({
				message: response?.data?.notice?.message || pageCopy.successFallback,
				type: 'success',
			})
			focusInput(scanInputRef)
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
			setSaving(false)
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
				<Box style={shellStyle}>
					<H2>{pageCopy.title}</H2>

					{loading ? (
						<Text>{pageCopy.loading}</Text>
					) : (
						<Box style={gridStyle}>
							<Box style={cardStyle}>
								<Label>{pageCopy.scanLabel}</Label>
								<Box style={searchBarStyle}>
									<input
										ref={scanInputRef}
										type='text'
										value={scanText}
										onChange={event => setScanText(event.target.value)}
										onKeyDown={event => {
											if (event.key === 'Enter') {
												event.preventDefault()
												handleQuickAdd()
											}
										}}
										placeholder={pageCopy.scanPlaceholder}
										style={inputStyle}
									/>
									<Button type='button' onClick={handleQuickAdd}>
										{pageCopy.addAction}
									</Button>
								</Box>
								{scanText.trim() ? (
									visibleResults.length ? (
										<Box
											style={{
												display: 'grid',
												gap: '12px',
												marginTop: '14px',
											}}
										>
											{visibleResults.map(item => (
												<Box
													key={getSelectionKey(item)}
													as='button'
													type='button'
													onClick={() => addItemToSelection(item)}
													style={resultItemStyle}
												>
													<Box
														display='flex'
														justifyContent='space-between'
														gap='xl'
														alignItems='center'
														flexWrap='wrap'
													>
														<Box>
															<Text fontWeight='bold'>
																{item.productName || '—'}
															</Text>
															<Text mt='xs' color='grey60'>
																{pageCopy.barcodeLabel}: {item.barcode || '—'}
															</Text>
														</Box>
														<Text fontWeight='bold' color='primary100'>
															+ {pageCopy.addAction}
														</Text>
													</Box>
												</Box>
											))}
										</Box>
									) : (
										<MessageBox variant='info'>
											<Text>
												{availableItems.length
													? pageCopy.emptySearch
													: pageCopy.emptyAvailable}
											</Text>
										</MessageBox>
									)
								) : null}
							</Box>

							<Box style={cardStyle}>
								<Text fontWeight='bold' mb='sm'>
									{pageCopy.selectedTitle}
								</Text>

								{!canEdit ? (
									<MessageBox variant='info' mb='lg'>
										<Text>{pageCopy.readOnlyInfo}</Text>
									</MessageBox>
								) : null}

								{selectedItems.length ? (
									<Box
										style={{ display: 'grid', gap: '12px', marginTop: '12px' }}
									>
										{selectedItems.map(item => (
											<Box key={item.selectionKey} style={selectedCardStyle}>
												<Box
													display='flex'
													justifyContent='space-between'
													gap='xl'
													alignItems='flex-start'
													flexWrap='wrap'
												>
													<Box>
														<Text fontWeight='bold'>
															{item.productName || '—'}
														</Text>
														<Text mt='xs' color='grey60'>
															{pageCopy.barcodeLabel}: {item.barcode || '—'}
														</Text>
													</Box>
													<Button
														type='button'
														variant='text'
														onClick={() =>
															removeSelectedItem(item.selectionKey)
														}
													>
														{pageCopy.removeAction}
													</Button>
												</Box>

												<Box
													display='flex'
													justifyContent='flex-end'
													gap='default'
													alignItems='center'
													flexWrap='wrap'
												>
													<Box
														display='flex'
														gap='default'
														alignItems='center'
														flexWrap='wrap'
													>
														<Button
															type='button'
															variant='outlined'
															style={qtyButtonStyle}
															onClick={() =>
																updateSelectedQuantity(
																	item.selectionKey,
																	Number(item.quantity || 0) - 1,
																)
															}
														>
															−
														</Button>
														<input
															type='number'
															min='1'
															max={item.availableQuantity || 1}
															value={item.quantity}
															onChange={event =>
																updateSelectedQuantity(
																	item.selectionKey,
																	event.target.value,
																)
															}
															style={{
																...inputStyle,
																width: '84px',
																padding: '8px 10px',
															}}
														/>
														<Button
															type='button'
															variant='outlined'
															style={qtyButtonStyle}
															onClick={() =>
																updateSelectedQuantity(
																	item.selectionKey,
																	Number(item.quantity || 0) + 1,
																)
															}
														>
															+
														</Button>
													</Box>
												</Box>
											</Box>
										))}
									</Box>
								) : null}

								<Box mt='xl'>
									<Label>{pageCopy.commentLabel}</Label>
									<textarea
										rows='4'
										value={comment}
										onChange={event => setComment(event.target.value)}
										placeholder={pageCopy.commentPlaceholder}
										style={{
											...inputStyle,
											marginTop: '8px',
											resize: 'vertical',
										}}
									/>
								</Box>

								<Box mt='lg'>
									<Button
										type='button'
										onClick={handleSubmit}
										style={submitButtonStyle}
										disabled={
											!canEdit ||
											saving ||
											!selectedItems.length ||
											!String(comment || '').trim()
										}
									>
										{saving ? pageCopy.savingAction : pageCopy.submitAction}
									</Button>
								</Box>
							</Box>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default ChiqimQilish
