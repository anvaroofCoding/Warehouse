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
const PAGE_SIZE = 20

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
	minWidth: '860px',
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

const PurchaseReceiveWorkspace = () => {
	const [currentAdmin] = useCurrentAdmin()
	const addNotice = useNotice()
	const {
		i18n: { language },
	} = useTranslation()
	const pageCopy =
		language === 'ru'
			? {
					title: 'Приём заказа',
					subtitle:
						'Структурное подразделение принимает отправленные заказы здесь. После приёма товары появляются на складе структуры.',
					toDispatch: 'Отправка заказа',
					toWarehouses: 'Склады',
					loading: 'Загрузка данных...',
					readyTitle: 'Заказы на приём',
					readyDescription:
						'Отправленные на структуру заказы видны здесь. После подтверждения они попадут в складской остаток.',
					readyEmpty: 'Нет заказов, ожидающих приёма.',
					receivedTitle: 'История принятых заказов',
					receivedDescription:
						'Здесь хранится история уже принятых на склад заказов.',
					receivedEmpty: 'Принятых заказов пока нет.',
					selectedOrder: 'Выбранный заказ',
					requestNumber: 'Номер заявки',
					structures: 'Структуры',
					source: 'Источник',
					warehouseLabel: 'Склад структуры',
					pickOrder: 'Выберите заказ для приёма.',
					receiveButton: 'Принять на склад',
					receivingButton: 'Принимается...',
					alreadyReceived: 'Этот заказ уже принят на склад.',
					accessDenied: 'Этот раздел закрыт для вашей роли.',
					filterPlaceholder: 'Поиск по заявке, структуре, источнику или складу',
				}
			: {
					title: 'Buyurtmani qabul qilish',
					subtitle:
						'Tarkibiy tuzilma jo‘natilgan buyurtmani shu yerda qabul qiladi. Qabul qilingandan keyin tovarlar ombor qoldig‘iga qo‘shiladi.',
					toDispatch: 'Buyurtmani jo‘natish',
					toWarehouses: 'Omborlar',
					loading: 'Ma’lumotlar yuklanmoqda...',
					readyTitle: 'Qabulga kelgan buyurtmalar',
					readyDescription:
						'Tuzilmaga jo‘natilgan buyurtmalar shu yerda chiqadi. Tasdiqlangandan keyin tovar omborga tushadi.',
					readyEmpty: 'Qabulga kelgan buyurtma topilmadi.',
					receivedTitle: 'Qabul qilingan buyurtmalar tarixi',
					receivedDescription:
						'Bu yerda omborga qabul qilingan buyurtmalar tarixi saqlanadi.',
					receivedEmpty: 'Qabul qilingan buyurtma hali yo‘q.',
					selectedOrder: 'Tanlangan buyurtma',
					requestNumber: 'Ariza raqami',
					structures: 'Tarkibiy tuzilmalar',
					source: 'Manba',
					warehouseLabel: 'Tuzilma ombori',
					pickOrder: 'Qabul qilinadigan buyurtmani tanlang.',
					receiveButton: 'Omborga qabul qilish',
					receivingButton: 'Qabul qilinmoqda...',
					alreadyReceived: 'Bu buyurtma allaqachon omborga qabul qilingan.',
					accessDenied: 'Bu bo‘lim sizning rolingiz uchun yopiq.',
					filterPlaceholder: 'Ariza, tuzilma, manba yoki ombor bo‘yicha filter',
				}

	const [records, setRecords] = useState([])
	const [receivedRecords, setReceivedRecords] = useState([])
	const [selectedRequestId, setSelectedRequestId] = useState('')
	const [showReceiveForm, setShowReceiveForm] = useState(false)
	const [loading, setLoading] = useState(true)
	const [saving, setSaving] = useState(false)
	const [activeTab, setActiveTab] = useState('ready')
	const [readyPage, setReadyPage] = useState(1)
	const [historyPage, setHistoryPage] = useState(1)
	const [readyFilterText, setReadyFilterText] = useState('')
	const [historyFilterText, setHistoryFilterText] = useState('')

	const canView = ['admin', 'tuzilmalar'].includes(currentAdmin?.role)
	const canEdit = ['admin', 'tuzilmalar'].includes(currentAdmin?.role)

	const allRecords = useMemo(
		() => [...records, ...receivedRecords],
		[records, receivedRecords],
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
	const filteredHistoryRecords = useMemo(
		() => filterRows(receivedRecords, historyFilterText),
		[receivedRecords, historyFilterText],
	)

	useEffect(() => {
		if (!records.length && receivedRecords.length && activeTab !== 'history') {
			setActiveTab('history')
		} else if (
			!receivedRecords.length &&
			records.length &&
			activeTab !== 'ready'
		) {
			setActiveTab('ready')
		}
	}, [activeTab, records.length, receivedRecords.length])

	useEffect(() => {
		const totalReadyPages = Math.max(
			1,
			Math.ceil(filteredReadyRecords.length / PAGE_SIZE),
		)
		const totalHistoryPages = Math.max(
			1,
			Math.ceil(filteredHistoryRecords.length / PAGE_SIZE),
		)

		setReadyPage(current => Math.min(current, totalReadyPages))
		setHistoryPage(current => Math.min(current, totalHistoryPages))
	}, [filteredReadyRecords.length, filteredHistoryRecords.length])

	const loadWorkspace = async preferredRequestId => {
		setLoading(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseReceiveWorkspace',
				actionName: 'receiveWorkspace',
			})
			const nextRecords = response?.data?.records || []
			const nextReceivedRecords = response?.data?.receivedRecords || []
			const combined = [...nextRecords, ...nextReceivedRecords]
			const nextSelectedId =
				preferredRequestId &&
				combined.some(record => record.id === preferredRequestId)
					? preferredRequestId
					: selectedRequestId &&
						  combined.some(record => record.id === selectedRequestId)
						? selectedRequestId
						: ''

			setRecords(nextRecords)
			setReceivedRecords(nextReceivedRecords)
			setSelectedRequestId(nextSelectedId)

			if (preferredRequestId) {
				setShowReceiveForm(true)
			}
		} catch (error) {
			setRecords([])
			setReceivedRecords([])
			setSelectedRequestId('')
			addNotice({
				message: extractMessage(
					error?.response?.data,
					'Buyurtmani qabul qilish sahifasini yuklab bo‘lmadi',
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
		if (!record?.id || typeof window === 'undefined') {
			return
		}

		window.location.assign(
			`/admin/resources/PurchaseReceiveWorkspace?recordId=${record.id}`,
		)
	}

	const handleClose = () => {
		setShowReceiveForm(false)
		setSelectedRequestId('')
		if (typeof window !== 'undefined') {
			window.location.assign('/admin/resources/PurchaseReceiveWorkspace')
		}
	}

	const handleReceive = async () => {
		if (!canEdit) {
			return
		}

		if (!selectedRequestId) {
			addNotice({
				message: 'Avval qabul qilinadigan buyurtmani tanlang',
				type: 'error',
			})
			return
		}

		setSaving(true)

		try {
			const response = await api.resourceAction({
				resourceId: 'PurchaseReceiveWorkspace',
				actionName: 'receiveWorkspace',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					requestId: selectedRequestId,
				},
			})

			if (response?.data?.notice) {
				addNotice(response.data.notice)
			}

			await loadWorkspace(selectedRequestId)
		} catch (error) {
			addNotice({
				message: extractMessage(
					error?.response?.data,
					'Buyurtmani omborga qabul qilib bo‘lmadi',
				),
				type: 'error',
			})
		} finally {
			setSaving(false)
		}
	}

	const renderTable = ({ rows, emptyText, page, setPage }) => {
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
								<th style={tableHeadCellStyle}>{pageCopy.warehouseLabel}</th>
								<th style={tableHeadCellStyle}>Sana</th>
							</tr>
						</thead>
						<tbody>
							{paginatedRows.map((record, index) => {
								const rowDate =
									record?.warehouseDispatchData?.receivedAt ||
									record?.warehouseDispatchData?.dispatchedAt ||
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
										<td style={tableCellStyle}>
											{record?.warehouseDispatchData?.warehouseName || '—'}
										</td>
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
					{currentAdmin?.role !== 'tuzilmalar' ? (
						<Button
							as='a'
							href='/admin/resources/PurchaseDispatchWorkspace'
							variant='outlined'
							style={navButtonStyle}
						>
							{pageCopy.toDispatch}
						</Button>
					) : null}
					<Button
						as='a'
						href={
							currentAdmin?.role === 'tuzilmalar'
								? '/admin/resources/MyWarehouse'
								: '/admin/resources/WarehouseOverview'
						}
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
						{showReceiveForm ? null : (
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
										{pageCopy.receivedTitle} ({filteredHistoryRecords.length})
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
											{pageCopy.receivedTitle}
										</Text>
										<Text color='grey60'>{pageCopy.receivedDescription}</Text>
										<input
											type='text'
											value={historyFilterText}
											onChange={event => {
												setHistoryFilterText(event.target.value)
												setHistoryPage(1)
											}}
											placeholder={pageCopy.filterPlaceholder}
											style={{ ...inputStyle, marginTop: '16px' }}
										/>
										<Box mt='lg'>
											{renderTable({
												rows: filteredHistoryRecords,
												emptyText: pageCopy.receivedEmpty,
												page: historyPage,
												setPage: setHistoryPage,
											})}
										</Box>
									</>
								)}
							</Box>
						)}

						{showReceiveForm ? (
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
										onClick={handleClose}
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
												<input
													readOnly
													value={
														selectedRecord?.warehouseDispatchData
															?.warehouseName || ''
													}
													style={inputStyle}
												/>
											</Box>
										</Box>

										<Box>
											<Text fontWeight='bold' mb='default'>
												Tovarlar
											</Text>
											<Box style={{ display: 'grid', gap: '12px' }}>
												{(selectedRecord.items || []).map((item, index) => (
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

										{selectedRecord?.warehouseDispatchData?.receivedAt ? (
											<MessageBox variant='success'>
												<Text>
													{pageCopy.alreadyReceived}{' '}
													{formatDate(
														selectedRecord?.warehouseDispatchData?.receivedAt,
													)}
												</Text>
											</MessageBox>
										) : canEdit ? (
											<Box display='flex' gap='default' flexWrap='wrap'>
												<Button
													type='button'
													onClick={handleReceive}
													disabled={saving}
												>
													{saving
														? pageCopy.receivingButton
														: pageCopy.receiveButton}
												</Button>
											</Box>
										) : null}
									</Box>
								) : (
									<MessageBox variant='info'>
										<Text>{pageCopy.pickOrder}</Text>
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

export default PurchaseReceiveWorkspace
