import { Box, Button, H2, Icon, Text } from '@adminjs/design-system'
import { useTranslation } from 'adminjs'
import { useEffect } from 'react'

const PurchaseDownloadAction = props => {
	const { action, record } = props
	const {
		i18n: { language },
	} = useTranslation()

	const format =
		action?.custom?.format || (action?.name === 'downloadWord' ? 'word' : 'pdf')
	const extension = format === 'word' ? 'docx' : 'pdf'
	const recordId = record?.id
	const downloadUrl = `/admin/purchase-requests/${recordId}/download/${format}?lang=${language || 'uz'}`
	const backUrl = `/admin/resources/PurchaseRequest/records/${recordId}/show`
	const text =
		language === 'ru'
			? {
					title: `${extension.toUpperCase()} файл подготавливается`,
					description:
						'Загрузка должна начаться автоматически. Если этого не произошло, нажмите кнопку ниже.',
					downloadAgain: `${extension.toUpperCase()} скачать`,
					goBack: 'Вернуться к заявке',
				}
			: {
					title: `${extension.toUpperCase()} fayl tayyorlanmoqda`,
					description:
						'Yuklab olish avtomatik boshlanishi kerak. Boshlanmasa, quyidagi tugmani bosing.',
					downloadAgain: `${extension.toUpperCase()} yuklab olish`,
					goBack: 'Arizaga qaytish',
				}

	useEffect(() => {
		if (!recordId) {
			return undefined
		}

		const iframe = document.createElement('iframe')
		iframe.style.display = 'none'
		iframe.src = downloadUrl
		document.body.appendChild(iframe)

		return () => {
			if (document.body.contains(iframe)) {
				document.body.removeChild(iframe)
			}
		}
	}, [downloadUrl, recordId])

	return (
		<Box variant='grey'>
			<Box bg='white' p='xxl' borderRadius='xl' boxShadow='card'>
				<H2>{text.title}</H2>
				<Text mt='default' mb='xl' color='grey100'>
					{text.description}
				</Text>

				<Box display='flex' flexWrap='wrap' gap='default'>
					<Button as='a' href={downloadUrl}>
						<Icon icon='Download' mr='sm' />
						{text.downloadAgain}
					</Button>
					<Button as='a' href={backUrl} variant='outlined'>
						{text.goBack}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default PurchaseDownloadAction
