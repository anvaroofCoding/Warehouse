import {
	AlignmentType,
	BorderStyle,
	Document,
	Packer,
	Paragraph,
	Table,
	TableCell,
	TableRow,
	TextRun,
	WidthType,
} from 'docx'
import fs from 'node:fs'
import PDFDocument from 'pdfkit'

const BRAND_COLOR = '1D4ED8'
const DOC_BORDER = 'BFD3F2'
const DOC_MUTED = '475569'
const DOC_LIGHT = 'F5F9FF'
const PDF_BRAND_COLOR = '#1D4ED8'
const PDF_BORDER_COLOR = '#BFD3F2'
const PDF_LIGHT_BG = '#F5F9FF'
const WINDOWS_FONTS = [
	'C:/Windows/Fonts/times.ttf',
	'C:/Windows/Fonts/timesbd.ttf',
	'C:/Windows/Fonts/arial.ttf',
	'C:/Windows/Fonts/calibri.ttf',
	'C:/Windows/Fonts/tahoma.ttf',
]

const getFontPath = () =>
	WINDOWS_FONTS.find(fontPath => fs.existsSync(fontPath))

const getStatusLabel = (status, lang = 'uz') => {
	const normalized = String(status || '')
		.trim()
		.toLowerCase()

	const map =
		lang === 'ru'
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
					'ko‘rilmoqda': 'Ko‘rib chiqilmoqda',
					'tuzilmalar tasdig‘ida': 'Ko‘rib chiqilmoqda',
					tasdiqlanmoqda: 'Tasdiqlash bosqichida',
					'boshliq tasdig‘ida': 'Tasdiqlash bosqichida',
					tasdiqlangan: 'Tasdiqlangan',
					tasdiqlandi: 'Tasdiqlangan',
					'qisman tasdiqlandi': 'Qisman tasdiqlangan',
					'sotib olish kerak': 'Sotib olish kerak',
					'sotib olinmoqda': 'Sotib olinmoqda',
					'rad etildi': 'Rad etildi',
				}

	return map[normalized] || normalizeText(status)
}

const textByLanguage = (lang = 'uz') =>
	lang === 'ru'
		? {
				organization: '«Toshkent metropoliteni» DUK',
				recipientTitle: 'Руководителю',
				documentTitle: 'СЛУЖЕБНАЯ ЗАПИСКА',
				outgoing: 'Исх. №',
				date: 'Дата',
				requestNumber: 'Номер заявки',
				status: 'Статус',
				createdBy: 'Подготовил',
				comment: 'Обоснование',
				structures: 'Структуры использования',
				items: 'Перечень закупаемых товаров',
				itemNo: '№',
				itemName: 'Наименование товара',
				features: 'Характеристики и тех. параметры',
				unit: 'Ед. изм.',
				quantity: 'Кол-во',
				preparedBy: 'Подготовил',
				agreedBy: 'Согласование',
				signatureLine: 'Подпись',
				footer: 'Документ сформирован автоматически через систему',
				intro: approverName =>
					`В адрес ${approverName} направляется служебная записка о рассмотрении вопроса закупки необходимых материально‑технических средств.`,
				purpose: comment =>
					`Основание закупки: ${comment || 'обеспечение бесперебойной работы и развитие инфраструктуры предприятия.'}`,
				usage: structures =>
					`Планируемое использование: ${structures || 'для профильных подразделений предприятия'}.`,
			}
		: {
				organization: '«Toshkent metropoliteni» DUK',
				recipientTitle: 'Boshlig‘iga',
				documentTitle: 'BILDIRG‘I',
				outgoing: 'Chiqish №',
				date: 'Sana',
				requestNumber: 'Ariza raqami',
				status: 'Holati',
				createdBy: 'Tayyorladi',
				comment: 'Asos va izoh',
				structures: 'Foydalaniladigan tuzilmalar',
				items: 'Xarid qilinadigan mahsulotlar ro‘yxati',
				itemNo: '№',
				itemName: 'Mahsulot nomi',
				features: 'Mahsulotning xususiyati va texnik ko‘rsatkichlari',
				unit: 'O‘lchov birligi',
				quantity: 'Miqdori',
				preparedBy: 'Tayyorladi',
				agreedBy: 'Kelishildi',
				signatureLine: 'Imzo',
				footer: 'Hujjat tizim orqali avtomatik shakllantirildi',
				intro: approverName =>
					`${approverName} nomiga korxona ehtiyojlari uchun zarur bo‘lgan moddiy‑texnik vositalarni xarid qilish masalasini ko‘rib chiqish yuzasidan ushbu bildirg‘i taqdim etiladi.`,
				purpose: comment =>
					`Xarid zarurati: ${comment || 'tizimlar barqaror ishlashini ta’minlash va infratuzilmani rivojlantirish.'}`,
				usage: structures =>
					`Mazkur jihozlar ${structures || 'tegishli tuzilmalar'} ehtiyoji uchun foydalaniladi.`,
			}

const formatDate = (date, _lang = 'uz') => {
	const value = new Date(date || Date.now())
	if (Number.isNaN(value.getTime())) {
		return '-'
	}

	const pad = number => String(number).padStart(2, '0')
	return `${pad(value.getDate())}.${pad(value.getMonth() + 1)}.${value.getFullYear()} ${pad(value.getHours())}:${pad(value.getMinutes())}`
}

const normalizeText = value => String(value || '').trim() || '-'

const buildRequestNumber = request => {
	if (request?.requestNumber) {
		return String(request.requestNumber)
	}

	const datePart = new Intl.DateTimeFormat('sv-SE').format(
		new Date(request?.createdAt || Date.now()),
	)
	return `XR-${datePart.replaceAll('-', '')}-${String(
		request?._id || request?.id || '',
	)
		.slice(-6)
		.toUpperCase()}`
}

const normalizeStructures = value =>
	String(value || '')
		.split(',')
		.map(item => item.trim())
		.filter(Boolean)

const normalizeItems = value => {
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

const toExportData = (request, createdByName, lang = 'uz') => {
	const text = textByLanguage(lang)
	const structures = normalizeStructures(request.selectedUserNames)
	const structuresText = structures.length
		? structures.join(', ')
		: lang === 'ru'
			? 'профильных подразделений'
			: 'tegishli tuzilmalar'

	return {
		lang,
		text,
		requestNumber: buildRequestNumber(request),
		date: formatDate(request.createdAt, lang),
		status: getStatusLabel(request.status, lang),
		structures,
		structuresText,
		comment: normalizeText(request.comment),
		items: normalizeItems(request.items),
		createdBy: normalizeText(createdByName),
		approverName: normalizeText(request.approverName),
	}
}

const collectPdfBuffer = document =>
	new Promise((resolve, reject) => {
		const chunks = []
		document.on('data', chunk => chunks.push(chunk))
		document.on('end', () => resolve(Buffer.concat(chunks)))
		document.on('error', reject)
		document.end()
	})

const buildBodyParagraphs = data => [
	data.text.intro(data.approverName),
	data.text.purpose(data.comment),
	data.text.usage(data.structuresText),
]

const drawHeader = (doc, data) => {
	doc
		.roundedRect(50, 42, 170, 50, 8)
		.lineWidth(1)
		.strokeColor(PDF_BRAND_COLOR)
		.stroke()

	doc
		.fillColor(PDF_BRAND_COLOR)
		.fontSize(9)
		.text(`${data.text.outgoing}: ${data.requestNumber}`, 60, 54, {
			width: 150,
		})
	doc
		.fillColor('#475569')
		.fontSize(9)
		.text(`${data.text.date}: ${data.date}`, 60, 72, { width: 150 })

	doc
		.fillColor('#111827')
		.fontSize(12)
		.text(data.text.organization, 300, 46, { width: 240, align: 'right' })
	doc
		.fontSize(11)
		.text(`${data.text.recipientTitle} ${data.approverName}`, 260, 66, {
			width: 280,
			align: 'right',
		})

	doc.y = 120
}

const drawTable = (doc, data) => {
	const startX = 50
	const usableWidth = 495
	const columns = [30, 120, 225, 55, 65]
	let y = doc.y + 8
	const rows = data.items.length
		? data.items.map((item, index) => [
				index + 1,
				normalizeText(item.productName),
				normalizeText(item.features),
				normalizeText(item.unit),
				normalizeText(item.quantity),
			])
		: [['1', '-', '-', '-', '-']]

	const headers = [
		data.text.itemNo,
		data.text.itemName,
		data.text.features,
		data.text.unit,
		data.text.quantity,
	]

	const drawSingleRow = (values, isHeader = false) => {
		doc.fontSize(isHeader ? 9.5 : 9)
		const rowHeight =
			Math.max(
				30,
				...values.map((value, index) =>
					doc.heightOfString(String(value ?? ''), {
						width: columns[index] - 10,
						align: index === 4 ? 'center' : 'left',
					}),
				),
			) + 10

		if (y + rowHeight > doc.page.height - 90) {
			doc.addPage()
			y = 60
			drawSingleRow(headers, true)
		}

		let x = startX
		for (let index = 0; index < columns.length; index += 1) {
			doc
				.rect(x, y, columns[index], rowHeight)
				.fillAndStroke(isHeader ? '#EAF2FF' : '#FFFFFF', PDF_BORDER_COLOR)
			doc
				.fillColor('#111827')
				.fontSize(isHeader ? 9.5 : 9)
				.text(String(values[index] ?? ''), x + 5, y + 5, {
					width: columns[index] - 10,
					align: index === 4 ? 'center' : 'left',
				})
			x += columns[index]
		}

		y += rowHeight
	}

	if (usableWidth !== columns.reduce((sum, item) => sum + item, 0)) {
		throw new Error('PDF jadval ustunlari noto‘g‘ri sozlangan')
	}

	drawSingleRow(headers, true)
	rows.forEach(row => drawSingleRow(row))
	doc.y = y + 10
}

const drawSignatureSection = (doc, data) => {
	const startY = doc.y + 16

	doc
		.fillColor('#111827')
		.fontSize(11)
		.text(`${data.text.preparedBy}: ${data.createdBy}`, 50, startY, {
			width: 220,
		})
	doc
		.fontSize(11)
		.text(`${data.text.agreedBy}: ${data.approverName}`, 320, startY, {
			width: 220,
			align: 'right',
		})

	doc
		.moveTo(50, startY + 34)
		.lineTo(210, startY + 34)
		.strokeColor(PDF_BORDER_COLOR)
		.stroke()
	doc
		.moveTo(380, startY + 34)
		.lineTo(540, startY + 34)
		.strokeColor(PDF_BORDER_COLOR)
		.stroke()

	doc
		.fillColor('#64748B')
		.fontSize(9)
		.text(data.text.signatureLine, 50, startY + 38)
	doc.fontSize(9).text(data.text.signatureLine, 480, startY + 38, {
		align: 'right',
		width: 60,
	})

	doc.y = startY + 62
}

const generatePurchaseRequestPdf = async (
	request,
	createdByName,
	lang = 'uz',
) => {
	const data = toExportData(request, createdByName, lang)
	const doc = new PDFDocument({ size: 'A4', margin: 50 })
	const fontPath = getFontPath()

	if (fontPath) {
		doc.font(fontPath)
	}

	drawHeader(doc, data)

	doc
		.fillColor('#111827')
		.fontSize(16)
		.text(data.text.documentTitle, { align: 'center' })
	doc.moveDown(1)

	buildBodyParagraphs(data).forEach(paragraph => {
		doc.fillColor('#111827').fontSize(11).text(paragraph, {
			align: 'justify',
			indent: 20,
		})
		doc.moveDown(0.5)
	})

	doc
		.moveDown(0.4)
		.fillColor('#111827')
		.fontSize(10.5)
		.text(`${data.text.requestNumber}: ${data.requestNumber}`)
		.text(`${data.text.status}: ${data.status}`)
		.text(`${data.text.createdBy}: ${data.createdBy}`)

	doc.moveDown(0.8)
	drawTable(doc, data)
	drawSignatureSection(doc, data)

	doc.moveDown(0.8)
	doc
		.fillColor('#64748B')
		.fontSize(9)
		.text(data.text.footer, { align: 'center' })

	return collectPdfBuffer(doc)
}

const createParagraph = (
	text,
	{
		bold = false,
		color = '111827',
		alignment,
		size = 24,
		spacing,
		indent,
	} = {},
) =>
	new Paragraph({
		alignment,
		spacing,
		indent,
		children: [
			new TextRun({
				text: String(text ?? ''),
				bold,
				color,
				size,
			}),
		],
	})

const createCell = (
	text,
	width,
	{ shaded = false, bold = false, align = AlignmentType.LEFT } = {},
) =>
	new TableCell({
		width: { size: width, type: WidthType.DXA },
		shading: shaded ? { fill: 'EAF2FF' } : undefined,
		margins: { top: 120, bottom: 120, left: 100, right: 100 },
		children: [
			new Paragraph({
				alignment: align,
				children: [new TextRun({ text: String(text ?? ''), bold, size: 20 })],
			}),
		],
		borders: {
			top: { style: BorderStyle.SINGLE, size: 1, color: DOC_BORDER },
			bottom: { style: BorderStyle.SINGLE, size: 1, color: DOC_BORDER },
			left: { style: BorderStyle.SINGLE, size: 1, color: DOC_BORDER },
			right: { style: BorderStyle.SINGLE, size: 1, color: DOC_BORDER },
		},
	})

const createBorderlessCell = (paragraphs, width) =>
	new TableCell({
		width: { size: width, type: WidthType.DXA },
		margins: { top: 100, bottom: 100, left: 80, right: 80 },
		children: paragraphs,
		borders: {
			top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
			bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
			left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
			right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
		},
	})

const generatePurchaseRequestDocx = async (
	request,
	createdByName,
	lang = 'uz',
) => {
	const data = toExportData(request, createdByName, lang)
	const bodyParagraphs = buildBodyParagraphs(data)
	const items = data.items.length
		? data.items
		: [{ productName: '-', features: '-', unit: '-', quantity: '-' }]

	const document = new Document({
		sections: [
			{
				properties: {
					page: {
						margin: { top: 900, right: 850, bottom: 850, left: 850 },
					},
				},
				children: [
					new Table({
						width: { size: 100, type: WidthType.PERCENTAGE },
						rows: [
							new TableRow({
								children: [
									new TableCell({
										width: { size: 2800, type: WidthType.DXA },
										shading: { fill: DOC_LIGHT },
										margins: { top: 120, bottom: 120, left: 120, right: 120 },
										children: [
											createParagraph(
												`${data.text.outgoing}: ${data.requestNumber}`,
												{
													bold: true,
													color: BRAND_COLOR,
													size: 18,
												},
											),
											createParagraph(`${data.text.date}: ${data.date}`, {
												color: DOC_MUTED,
												size: 18,
											}),
										],
										borders: {
											top: {
												style: BorderStyle.SINGLE,
												size: 1,
												color: BRAND_COLOR,
											},
											bottom: {
												style: BorderStyle.SINGLE,
												size: 1,
												color: BRAND_COLOR,
											},
											left: {
												style: BorderStyle.SINGLE,
												size: 1,
												color: BRAND_COLOR,
											},
											right: {
												style: BorderStyle.SINGLE,
												size: 1,
												color: BRAND_COLOR,
											},
										},
									}),
									createBorderlessCell(
										[
											createParagraph(data.text.organization, {
												bold: true,
												alignment: AlignmentType.RIGHT,
												size: 22,
											}),
											createParagraph(
												`${data.text.recipientTitle} ${data.approverName}`,
												{
													bold: true,
													alignment: AlignmentType.RIGHT,
													size: 20,
													spacing: { before: 80 },
												},
											),
										],
										6500,
									),
								],
							}),
						],
					}),
					createParagraph(data.text.documentTitle, {
						bold: true,
						alignment: AlignmentType.CENTER,
						size: 28,
						spacing: { before: 220, after: 220 },
					}),
					...bodyParagraphs.map(paragraph =>
						createParagraph(paragraph, {
							alignment: AlignmentType.JUSTIFIED,
							size: 22,
							indent: { firstLine: 420 },
							spacing: { after: 120 },
						}),
					),
					createParagraph(`${data.text.status}: ${data.status}`, {
						size: 22,
						spacing: { after: 80 },
					}),
					createParagraph(`${data.text.createdBy}: ${data.createdBy}`, {
						size: 22,
						spacing: { after: 140 },
					}),
					createParagraph(`${data.text.structures}: ${data.structuresText}`, {
						size: 22,
						spacing: { after: 180 },
					}),
					new Table({
						width: { size: 100, type: WidthType.PERCENTAGE },
						rows: [
							new TableRow({
								children: [
									createCell(data.text.itemNo, 500, {
										shaded: true,
										bold: true,
										align: AlignmentType.CENTER,
									}),
									createCell(data.text.itemName, 2400, {
										shaded: true,
										bold: true,
									}),
									createCell(data.text.features, 3600, {
										shaded: true,
										bold: true,
									}),
									createCell(data.text.unit, 1200, {
										shaded: true,
										bold: true,
										align: AlignmentType.CENTER,
									}),
									createCell(data.text.quantity, 1100, {
										shaded: true,
										bold: true,
										align: AlignmentType.CENTER,
									}),
								],
							}),
							...items.map(
								(item, index) =>
									new TableRow({
										children: [
											createCell(index + 1, 500, {
												align: AlignmentType.CENTER,
											}),
											createCell(normalizeText(item.productName), 2400),
											createCell(normalizeText(item.features), 3600),
											createCell(normalizeText(item.unit), 1200, {
												align: AlignmentType.CENTER,
											}),
											createCell(normalizeText(item.quantity), 1100, {
												align: AlignmentType.CENTER,
											}),
										],
									}),
							),
						],
					}),
					new Paragraph({ text: '', spacing: { after: 180 } }),
					new Table({
						width: { size: 100, type: WidthType.PERCENTAGE },
						rows: [
							new TableRow({
								children: [
									createBorderlessCell(
										[
											createParagraph(data.text.preparedBy, {
												bold: true,
												size: 20,
											}),
											createParagraph(data.createdBy, {
												size: 20,
												spacing: { before: 80, after: 140 },
											}),
											createParagraph(
												`____________________ ${data.text.signatureLine}`,
												{
													color: DOC_MUTED,
													size: 18,
												},
											),
										],
										4500,
									),
									createBorderlessCell(
										[
											createParagraph(data.text.agreedBy, {
												bold: true,
												alignment: AlignmentType.RIGHT,
												size: 20,
											}),
											createParagraph(data.approverName, {
												alignment: AlignmentType.RIGHT,
												size: 20,
												spacing: { before: 80, after: 140 },
											}),
											createParagraph(
												`____________________ ${data.text.signatureLine}`,
												{
													alignment: AlignmentType.RIGHT,
													color: DOC_MUTED,
													size: 18,
												},
											),
										],
										4500,
									),
								],
							}),
						],
					}),
					createParagraph(data.text.footer, {
						alignment: AlignmentType.CENTER,
						color: DOC_MUTED,
						size: 18,
						spacing: { before: 240 },
					}),
				],
			},
		],
	})

	return Packer.toBuffer(document)
}

const buildPurchaseRequestFilename = request =>
	`${buildRequestNumber(request).toLowerCase()}`

export {
	buildPurchaseRequestFilename,
	generatePurchaseRequestDocx,
	generatePurchaseRequestPdf,
}
