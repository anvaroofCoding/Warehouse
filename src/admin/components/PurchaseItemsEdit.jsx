import { Box, Button, Label, Text } from '@adminjs/design-system'
import { useTranslation } from 'adminjs'
import { useEffect, useMemo } from 'react'

const UNIT_OPTIONS = [
	'dona',
	'kg',
	'litr',
	'metr',
	'quti',
	'komplekt',
	'juft',
	'paket',
]
const EMPTY_ITEM = {
	productName: '',
	features: '',
	unit: 'dona',
	quantity: 1,
}

const parseItems = value => {
	if (!value) {
		return [{ ...EMPTY_ITEM }]
	}

	try {
		const parsed = JSON.parse(value)
		return Array.isArray(parsed) && parsed.length ? parsed : [{ ...EMPTY_ITEM }]
	} catch {
		return [{ ...EMPTY_ITEM }]
	}
}

const PurchaseItemsEdit = props => {
	const { property, record, onChange } = props
	const {
		i18n: { language },
	} = useTranslation()
	const text =
		language === 'ru'
			? {
					label: 'Товары',
					description: 'Вы можете добавить неограниченное количество товаров.',
					item: 'Товар',
					name: 'Название товара',
					features: 'Характеристики',
					quantity: 'Количество',
					remove: 'Удалить',
					add: '+ Добавить товар',
				}
			: {
					label: 'Tovarlar',
					description: 'Tovarlarni xohlagancha qo‘shishingiz mumkin.',
					item: 'Tovar',
					name: 'Tovar nomi',
					features: 'Xususiyatlari',
					quantity: 'Soni',
					remove: 'Olib tashlash',
					add: '+ Tovar qo‘shish',
				}
	const items = useMemo(
		() => parseItems(record.params?.[property.path]),
		[property.path, record.params],
	)

	useEffect(() => {
		if (!record.params?.[property.path]) {
			onChange(property.path, JSON.stringify([{ ...EMPTY_ITEM }]))
		}
	}, [onChange, property.path, record.params])

	const updateItems = nextItems => {
		onChange(property.path, JSON.stringify(nextItems))
	}

	const updateField = (index, field, value) => {
		const nextItems = items.map((item, currentIndex) =>
			currentIndex === index
				? {
						...item,
						[field]: field === 'quantity' ? Number(value || 0) : value,
					}
				: item,
		)

		updateItems(nextItems)
	}

	const addItem = () => {
		updateItems([...items, { ...EMPTY_ITEM }])
	}

	const removeItem = index => {
		const nextItems = items.filter((_, currentIndex) => currentIndex !== index)
		updateItems(nextItems.length ? nextItems : [{ ...EMPTY_ITEM }])
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

			<Box style={{ display: 'grid', gap: '14px' }}>
				{items.map((item, index) => (
					<Box
						key={`${property.path}-${index}`}
						p='lg'
						style={{
							border: '1px solid #dbe3f0',
							borderRadius: '14px',
							background: '#f8fbff',
						}}
					>
						<Text fontWeight='bold' mb='default'>
							{text.item} #{index + 1}
						</Text>

						<Box style={{ display: 'grid', gap: '10px' }}>
							<input
								type='text'
								placeholder={text.name}
								value={item.productName || ''}
								onChange={event =>
									updateField(index, 'productName', event.target.value)
								}
								style={{
									padding: '10px 12px',
									borderRadius: '10px',
									border: '1px solid #cbd5e1',
								}}
							/>

							<textarea
								rows='4'
								placeholder={text.features}
								value={item.features || ''}
								onChange={event =>
									updateField(index, 'features', event.target.value)
								}
								style={{
									padding: '10px 12px',
									borderRadius: '10px',
									border: '1px solid #cbd5e1',
									resize: 'vertical',
								}}
							/>

							<Box
								style={{
									display: 'grid',
									gridTemplateColumns: '1fr 1fr',
									gap: '10px',
								}}
							>
								<select
									value={item.unit || 'dona'}
									onChange={event =>
										updateField(index, 'unit', event.target.value)
									}
									style={{
										padding: '10px 12px',
										borderRadius: '10px',
										border: '1px solid #cbd5e1',
									}}
								>
									{UNIT_OPTIONS.map(unit => (
										<option key={unit} value={unit}>
											{unit}
										</option>
									))}
								</select>

								<input
									type='number'
									min='1'
									placeholder={text.quantity}
									value={item.quantity ?? 1}
									onChange={event =>
										updateField(index, 'quantity', event.target.value)
									}
									style={{
										padding: '10px 12px',
										borderRadius: '10px',
										border: '1px solid #cbd5e1',
									}}
								/>
							</Box>
						</Box>

						<Box mt='default'>
							<Button
								size='sm'
								variant='outlined'
								type='button'
								onClick={() => removeItem(index)}
							>
								{text.remove}
							</Button>
						</Box>
					</Box>
				))}
			</Box>

			<Box mt='lg'>
				<Button type='button' onClick={addItem}>
					{text.add}
				</Button>
			</Box>
		</Box>
	)
}

export default PurchaseItemsEdit
