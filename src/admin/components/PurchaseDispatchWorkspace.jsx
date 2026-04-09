import {
	Box,
	Button,
	H2,
	Label,
	MessageBox,
	Pagination,
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

const inputStyle = {
	width: '100%',
	maxWidth: '100%',
	boxSizing: 'border-box',
	padding: '10px 12px',
	borderRadius: '10px',
	border: '1px solid #cbd5e1',
	fontSize: '14px',
	fontFamily: 'inherit',
	background: '#f8fafc',
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
	minWidth: '820px',
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

const rowInteractiveStyle = {
	cursor: 'pointer',
	transition: 'background 0.15s ease',
}

const PAGE_SIZE = 20

const tabsWrapStyle = {
	display: 'flex',
	gap: '8px',
	flexWrap: 'wrap',
	marginBottom: '16px',
	paddingBottom: '12px',
	borderBottom: '1px solid #e5e7eb',
}

const tabButtonStyle = isActive => ({
	padding: '8px 14px',
	borderRadius: '10px',
	border: `1px solid ${isActive ? '#3b82f6' : '#dbe3f0'}`,
	background: isActive ? '#eff6ff' : '#ffffff',
	color: isActive ? '#1d4ed8' : '#475569',
	fontSize: '13px',
	fontWeight: 700,
	cursor: 'pointer',
})

const extractMessage = (data, fallbackMessage) => {
	const fieldMessages = Object.values(data?.record?.errors || {})
		.map(error => String(error?.message || '').trim())
		.filter(Boolean)

	if (fieldMessages.length) {
		return fieldMessages.join('. ')
	}

	const noticeMessage = String(data?.notice?.message || '').trim()
	return noticeMessage && noticeMessage !== 'thereWereValidationErrors'
		? noticeMessage
		: fallbackMessage
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

const PurchaseDispatchWorkspace = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const {
		i18n: { language },
	} = useTranslation()
	const pageCopy =
		language === 'ru'
			? {
					title: 'Отправка заказа',
					subtitle:
						'Здесь выбирается заявка, товары отображаются только для просмотра и отправляются на склад структуры.',
					toOrder: 'Оформление заказа',
					toReceive: 'Приём заказа',
					toWarehouses: 'Склады',
					loading: 'Загрузка данных...',
					readyTitle: 'Заказы, готовые к отправке',
					readyDescription:
						'Сохранённые закупщиком заказы показываются здесь. Изменять товары на этом этапе нельзя.',
					readyEmpty: 'Нет заказов, готовых к отправке.',
					selectAction: 'Открыть',
					viewAction: 'Просмотр',
					selectedAction: 'Выбрано',
					selectedOrder: 'Выбранный заказ',
					requestNumber: 'Номер заявки',
					structures: 'Структуры',
					source: 'Источник',
					warehouseLabel: 'Структура-склад',
					warehousePlaceholder: 'Выберите структуру',
					items: 'Товары',
					pickOrder: 'Выберите заказ, готовый к отправке.',
					sendButton: 'Отправить на склад',
					sendingButton: 'Отправляется...',
					sentHistory: 'История отправленных заказов',
					sentDescription:
						'Здесь хранится история: какой заказ и на какой склад структуры был отправлен.',
					sentEmpty: 'Пока нет отправленных на склад заказов.',
					warehouseColumn: 'Склад структуры',
					readOnlyInfo: 'У вас здесь только право просмотра.',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					detailHint:
						'Нажмите на строку таблицы — откроется отдельное окно отправки выбранного заказа.',
					sentInfo: 'Этот заказ уже отправлен на склад структуры:',
					filterPlaceholder: 'Поиск по заявке, структуре, источнику или складу',
				}
			: {
					title: 'Buyurtmani jo‘natish',
					subtitle:
						'Bu yerda ariza tanlanadi, tovarlar faqat ko‘rish uchun chiqadi va tarkibiy tuzilma omboriga jo‘natiladi.',
					toOrder: 'Buyurtma qilish',
					toReceive: 'Buyurtmani qabul qilish',
					toWarehouses: 'Omborlar',
					loading: 'Ma’lumotlar yuklanmoqda...',
					readyTitle: 'Jo‘natishga tayyor buyurtmalar',
					readyDescription:
						'Sotib oluvchi saqlagan buyurtmalar shu yerda chiqadi. Jo‘natilgandan keyin tuzilma ularni “Buyurtmani qabul qilish” sahifasida qabul qiladi.',
					readyEmpty: 'Jo‘natishga tayyor buyurtma topilmadi.',
					selectAction: 'Ochish',
					viewAction: 'Ko‘rish',
					selectedAction: 'Tanlangan',
					selectedOrder: 'Tanlangan buyurtma',
					requestNumber: 'Ariza raqami',
					structures: 'Tarkibiy tuzilmalar',
					source: 'Manba',
					warehouseLabel: 'Tarkibiy tuzilma (ombor)',
					warehousePlaceholder: 'Tarkibiy tuzilmani tanlang',
					items: 'Tovarlar',
					pickOrder: 'Jo‘natishga tayyor buyurtmani tanlang.',
					sendButton: 'Omborga jo‘natish',
					sendingButton: 'Jo‘natilmoqda...',
					sentHistory: 'Jo‘natilgan buyurtmalar tarixi',
					sentDescription:
						'Qaysi buyurtma qaysi tarkibiy tuzilma omboriga yuborilgani shu yerda saqlanadi.',
					sentEmpty: 'Hali omborga jo‘natilgan buyurtma yo‘q.',
					warehouseColumn: 'Tuzilma ombori',
					readOnlyInfo: 'Siz bu sahifada faqat ko‘rish huquqiga egasiz.',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					detailHint:
						'Jadval qatorini bossangiz, tanlangan buyurtma uchun alohida jo‘natish oynasi ochiladi.',
					sentInfo:
						'Bu buyurtma allaqachon quyidagi tarkibiy tuzilma omboriga jo‘natilgan:',
					filterPlaceholder: 'Ariza, tuzilma, manba yoki ombor bo‘yicha filter',
				}
	const [records, setRecords] = useState([])
	const [sentRecords, setSentRecords] = useState([])
	const [warehouses, setWarehouses] = useState([])
	const [selectedRequestId, setSelectedRequestId] = useState('')
	const [selectedWarehouseId, setSelectedWarehouseId] = useState('')
	const [showDispatchForm, setShowDispatchForm] = useState(false)
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [activeTab, setActiveTab] = useState('ready')
	const [readyPage, setReadyPage] = useState(1)
	const [sentPage, setSentPage] = useState(1)
	const [readyFilterText, setReadyFilterText] = useState('')
	const [sentFilterText, setSentFilterText] = useState('')

	const canView = ['admin', 'monitoring', 'sotib_oluvchi'].includes(
		currentAdmin?.role,
	)
	const canEdit = ['admin', 'sotib_oluvchi'].includes(currentAdmin?.role)

	const allRecords = useMemo(
		() => [...records, ...sentRecords],
		[records, sentRecords],
	)

	const selectedRecord = useMemo(
		() => allRecords.find(record => record.id === selectedRequestId) || null,
		[allRecords, selectedRequestId],
	)

	const filterRows = (rows, query) => {
		const normalizedQuery = String(query || '')
			.trim()
			.toLowerCase()

		if (!normalizedQuery) {
			return rows
		}

		return rows.filter(record => {
			const itemsText = (record?.items || [])
				.map(item => `${item?.productName || ''} ${item?.features || ''}`)
				.join(' ')
			const searchableText = [
				record?.requestNumber,
				record?.status,
				record?.selectedUserNames,
				record?.buyerOrderData?.supplierName,
				record?.warehouseDispatchData?.warehouseName,
				itemsText,
			]
				.join(' ')
				.toLowerCase()

			return searchableText.includes(normalizedQuery)
		})
	}

	const filteredReadyRecords = useMemo(
		() => filterRows(records, readyFilterText),
		[records, readyFilterText],
	)
	const filteredSentRecords = useMemo(
		() => filterRows(sentRecords, sentFilterText),
		[sentRecords, sentFilterText],
	)

	useEffect(() => {
		if (!records.length && sentRecords.length && activeTab !== 'history') {
			setActiveTab('history')
		} else if (!sentRecords.length && records.length && activeTab !== 'ready') {
			setActiveTab('ready')
		}
	}, [activeTab, records.length, sentRecords.length])

	useEffect(() => {
		const totalReadyPages = Math.max(
			1,
			Math.ceil(filteredReadyRecords.length / PAGE_SIZE),
		)
		const totalSentPages = Math.max(
			1,
			Math.ceil(filteredSentRecords.length / PAGE_SIZE),
		)

		setReadyPage(current => Math.min(current, totalReadyPages))
		setSentPage(current => Math.min(current, totalSentPages))
	}, [filteredReadyRecords.length, filteredSentRecords.length])

	const loadWorkspace = async preferredRequestId => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseDispatchWorkspace',
				actionName: 'dispatchWorkspace',
			})
			const nextRecords = response?.data?.records || []
			const nextSentRecords = response?.data?.sentRecords || []
			const nextWarehouses = response?.data?.warehouses || []
			const combined = [...nextRecords, ...nextSentRecords]
			const nextSelectedId =
				preferredRequestId &&
				combined.some(record => record.id === preferredRequestId)
					? preferredRequestId
					: selectedRequestId &&
						  combined.some(record => record.id === selectedRequestId)
						? selectedRequestId
						: ''
			const nextSelectedRecord =
				combined.find(record => record.id === nextSelectedId) || null

			setRecords(nextRecords)
			setSentRecords(nextSentRecords)
			setWarehouses(nextWarehouses)
			setSelectedRequestId(nextSelectedId)
			setSelectedWarehouseId(
				String(
					nextSelectedRecord?.warehouseDispatchData?.warehouseId ||
						nextWarehouses[0]?.id ||
						'',
				),
			)

			if (preferredRequestId) {
				setShowDispatchForm(true)
			}
		} catch (error) {
			setRecords([])
			setSentRecords([])
			setWarehouses([])
			setSelectedRequestId('')
			setSelectedWarehouseId('')
			addNotice({
				message: extractMessage(
					error?.response?.data,
					"Buyurtmani jo'natish sahifasini yuklab bo‘lmadi",
				),
				type: 'error',
			})
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		const initialRequestId =
			typeof window !== 'undefined'
				? new URLSearchParams(window.location.search).get('recordId') || ''
				: ''

		loadWorkspace(initialRequestId)
	}, [])

	const openRecord = record => {
		if (!record?.id) {
			return
		}

		if (typeof window !== 'undefined') {
			window.location.assign(
				`/admin/resources/PurchaseDispatchWorkspace?recordId=${record.id}`,
			)
		}
	}

	const handleCloseDispatchForm = () => {
		setShowDispatchForm(false)
		setSelectedRequestId('')
		if (typeof window !== 'undefined') {
			window.location.assign('/admin/resources/PurchaseDispatchWorkspace')
		}
	}

	const handleSend = async () => {
		if (!canEdit) {
			return
		}

		if (!selectedRequestId) {
			addNotice({
				message: 'Avval jo‘natiladigan buyurtmani tanlang',
				type: 'error',
			})
			return
		}

		if (!selectedWarehouseId) {
			addNotice({
				message:
					language === 'ru'
						? 'Выберите, на какой склад структуры нужно отправить заказ'
						: 'Qaysi tarkibiy tuzilma omboriga jo‘natilishini tanlang',
				type: 'error',
			})
			return
		}

		setSaving(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseDispatchWorkspace',
				actionName: 'dispatchWorkspace',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					requestId: selectedRequestId,
					warehouseId: selectedWarehouseId,
				},
			})

			if (response?.data?.notice) {
				addNotice(response.data.notice)
			}

			await loadWorkspace()
		} catch (error) {
			addNotice({
				message: extractMessage(
					error?.response?.data,
					"Buyurtmani omborga jo'natib bo‘lmadi",
				),
				type: 'error',
			})
		} finally {
			setSaving(false)
		}
	}

	const renderTable = ({
		rows,
		emptyText,
		showWarehouse = false,
		page,
		setPage,
	}) => {
		if (!rows.length) {
			return <Text color='grey60'>{emptyText}</Text>
		}

		const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE))
		const safePage = Math.min(page, totalPages)
		const startIndex = (safePage - 1) * PAGE_SIZE
		const paginatedRows = rows.slice(startIndex, startIndex + PAGE_SIZE)

		return (
			<Box>
				<Box style={tableWrapStyle}>
					<table style={tableStyle}>
						<thead>
							<tr>
								<th style={tableHeadCellStyle}>#</th>
								<th style={tableHeadCellStyle}>{pageCopy.requestNumber}</th>
								<th style={tableHeadCellStyle}>{pageCopy.structures}</th>
								<th style={tableHeadCellStyle}>{pageCopy.source}</th>
								{showWarehouse ? (
									<th style={tableHeadCellStyle}>{pageCopy.warehouseColumn}</th>
								) : null}
								<th style={tableHeadCellStyle}>Sana</th>
							</tr>
						</thead>
						<tbody>
							{paginatedRows.map((record, index) => {
								const rowDate =
									record?.warehouseDispatchData?.dispatchedAt ||
									record?.buyerOrderData?.submittedAt ||
									record?.updatedAt ||
									record?.createdAt

								return (
									<tr
										key={record.id}
										onClick={() => openRecord(record)}
										style={rowInteractiveStyle}
									>
										<td style={tableCellStyle}>{startIndex + index + 1}</td>
										<td style={tableCellStyle}>
											<Text fontWeight='bold'>
												{record.requestNumber || record.id}
											</Text>
											<Text mt='xs' color='grey60'>
												{record.status || '—'}
											</Text>
										</td>
										<td style={tableCellStyle}>
											{record.selectedUserNames || '—'}
										</td>
										<td style={tableCellStyle}>
											{record?.buyerOrderData?.supplierName || 'Kiritilmagan'}
										</td>
										{showWarehouse ? (
											<td style={tableCellStyle}>
												{record?.warehouseDispatchData?.warehouseName || '—'}
											</td>
										) : null}
										<td style={tableCellStyle}>{formatDate(rowDate)}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</Box>

				{totalPages > 1 ? (
					<Text mt='xl' textAlign='center'>
						<Pagination
							page={safePage}
							perPage={PAGE_SIZE}
							total={rows.length}
							onChange={nextPage => setPage(nextPage)}
						/>
					</Text>
				) : null}
			</Box>
		)
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
						href='/admin/resources/PurchaseOrderWorkspace'
						variant='outlined'
						style={navButtonStyle}
					>
						{pageCopy.toOrder}
					</Button>
					{currentAdmin?.role === 'admin' ? (
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
						{showDispatchForm ? null : (
							<Box style={cardStyle}>
								<Box style={tabsWrapStyle}>
									<button
										type='button'
										onClick={() => setActiveTab('ready')}
										style={tabButtonStyle(activeTab === 'ready')}
									>
										{pageCopy.readyTitle} ({filteredReadyRecords.length})
									</button>
									<button
										type='button'
										onClick={() => setActiveTab('history')}
										style={tabButtonStyle(activeTab === 'history')}
									>
										{pageCopy.sentHistory} ({filteredSentRecords.length})
									</button>
								</Box>

								{activeTab === 'ready' ? (
									<>
										<Text fontWeight='bold' mb='sm'>
											{pageCopy.readyTitle}
										</Text>
										<Text color='grey60'>{pageCopy.readyDescription}</Text>
										<input
											type='text'
											value={readyFilterText}
											onChange={event => {
												setReadyFilterText(event.target.value)
												setReadyPage(1)
											}}
											placeholder={pageCopy.filterPlaceholder}
											style={{ ...inputStyle, marginTop: '16px' }}
										/>
										<Box mt='lg'>
											{renderTable({
												rows: filteredReadyRecords,
												emptyText: pageCopy.readyEmpty,
												page: readyPage,
												setPage: setReadyPage,
											})}
										</Box>
									</>
								) : (
									<>
										<Text fontWeight='bold' mb='sm'>
											{pageCopy.sentHistory}
										</Text>
										<Text color='grey60'>{pageCopy.sentDescription}</Text>
										<input
											type='text'
											value={sentFilterText}
											onChange={event => {
												setSentFilterText(event.target.value)
												setSentPage(1)
											}}
											placeholder={pageCopy.filterPlaceholder}
											style={{ ...inputStyle, marginTop: '16px' }}
										/>
										<Box mt='lg'>
											{renderTable({
												rows: filteredSentRecords,
												showWarehouse: true,
												emptyText: pageCopy.sentEmpty,
												page: sentPage,
												setPage: setSentPage,
											})}
										</Box>
									</>
								)}
							</Box>
						)}

						{showDispatchForm ? (
							<Box style={cardStyle}>
								<Box
									display='flex'
									justifyContent='space-between'
									alignItems='center'
									gap='default'
									flexWrap='wrap'
								>
									<Text fontWeight='bold' mb='lg'>
										{pageCopy.selectedOrder}
									</Text>
									<Button
										type='button'
										variant='outlined'
										size='sm'
										onClick={handleCloseDispatchForm}
									>
										Ro‘yxatga qaytish
									</Button>
								</Box>

								{selectedRecord ? (
									<Box style={{ display: 'grid', gap: '14px' }}>
										<Box
											style={{
												display: 'grid',
												gridTemplateColumns:
													'repeat(auto-fit, minmax(220px, 1fr))',
												gap: '12px',
											}}
										>
											<Box>
												<Label>{pageCopy.requestNumber}</Label>
												<input
													readOnly
													value={selectedRecord.requestNumber || ''}
													style={inputStyle}
												/>
											</Box>
											<Box>
												<Label>{pageCopy.structures}</Label>
												<input
													readOnly
													value={selectedRecord.selectedUserNames || ''}
													style={inputStyle}
												/>
											</Box>
											<Box>
												<Label>{pageCopy.source}</Label>
												<input
													readOnly
													value={
														selectedRecord?.buyerOrderData?.supplierName || ''
													}
													style={inputStyle}
												/>
											</Box>
											<Box>
												<Label>{pageCopy.warehouseLabel}</Label>
												<select
													value={selectedWarehouseId}
													onChange={event =>
														setSelectedWarehouseId(event.target.value)
													}
													style={{ ...inputStyle, background: '#ffffff' }}
													disabled={
														!canEdit ||
														Boolean(
															selectedRecord?.warehouseDispatchData
																?.dispatchedAt,
														)
													}
												>
													<option value=''>
														{pageCopy.warehousePlaceholder}
													</option>
													{warehouses.map(warehouse => (
														<option key={warehouse.id} value={warehouse.id}>
															{warehouse.name}
														</option>
													))}
												</select>
											</Box>
										</Box>

										<Box>
											<Text fontWeight='bold' mb='default'>
												Tovarlar
											</Text>
											<Box style={{ display: 'grid', gap: '12px' }}>
												{selectedRecord.items.map((item, index) => (
													<Box
														key={`${selectedRecord.id}-${index}`}
														style={{
															padding: '12px',
															border: '1px solid #dbe3f0',
															borderRadius: '12px',
															background: '#f8fbff',
														}}
													>
														<input
															readOnly
															value={item.productName || ''}
															style={inputStyle}
														/>
														<textarea
															readOnly
															value={item.features || ''}
															style={{
																...inputStyle,
																minHeight: '80px',
																marginTop: '10px',
																resize: 'vertical',
															}}
														/>
														<Box
															style={{
																display: 'grid',
																gridTemplateColumns:
																	'repeat(auto-fit, minmax(160px, 1fr))',
																gap: '10px',
																marginTop: '10px',
															}}
														>
															<input
																readOnly
																value={item.unit || ''}
																style={inputStyle}
															/>
															<input
																readOnly
																value={String(item.quantity || 0)}
																style={inputStyle}
															/>
														</Box>
													</Box>
												))}
											</Box>
										</Box>

										{selectedRecord?.warehouseDispatchData?.dispatchedAt ? (
											<MessageBox variant='success'>
												<Text>
													Bu buyurtma{' '}
													{selectedRecord.warehouseDispatchData.warehouseName}{' '}
													ga
													{formatDate(
														selectedRecord.warehouseDispatchData.dispatchedAt,
													)}{' '}
													da jo‘natilgan.
												</Text>
											</MessageBox>
										) : canEdit ? (
											<Box display='flex' gap='default' flexWrap='wrap'>
												<Button
													type='button'
													onClick={handleSend}
													disabled={saving}
												>
													{saving ? 'Jo‘natilmoqda...' : 'Omborga jo‘natish'}
												</Button>
											</Box>
										) : (
											<MessageBox variant='info'>
												<Text>
													Siz bu sahifada faqat ko‘rish huquqiga egasiz.
												</Text>
											</MessageBox>
										)}
									</Box>
								) : (
									<MessageBox variant='info'>
										<Text>{pageCopy.pickOrder}</Text>
										<Text mt='sm' color='grey60'>
											{pageCopy.detailHint}
										</Text>
									</MessageBox>
								)}
							</Box>
						) : null}
					</Box>
				)}
			</Box>
		</Box>
	)
}

export default PurchaseDispatchWorkspace
