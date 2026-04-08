import { Box, Button, H2, Text } from '@adminjs/design-system'
import { useCurrentAdmin } from 'adminjs'
import { useParams } from 'react-router'

import { pageMap } from '../page-data.js'

const PlaceholderPage = () => {
	const { pageName } = useParams()
	const [currentAdmin] = useCurrentAdmin()
	const page = pageMap[pageName] || {
		label: 'Sahifa',
		shortUz: 'Bu sahifa hozircha tayyor holatda turibdi.',
		shortRu: 'Эта страница пока подготовлена в черновом виде.',
	}
	const profileShowLink = currentAdmin?.id
		? `/admin/resources/User/records/${currentAdmin.id}/show`
		: '/admin'
	const profileEditLink = currentAdmin?.id
		? `/admin/resources/User/records/${currentAdmin.id}/edit`
		: '/admin'

	if (pageName === 'mening-profilim') {
		return (
			<Box variant='grey'>
				<Box bg='white' p='xxl' borderRadius='xl' boxShadow='card'>
					<Text color='primary100' fontWeight='bold' mb='default'>
						Zaxira.uz
					</Text>
					<H2>Mening profilim</H2>
					<Text mt='default' mb='xl'>
						Siz hozir{' '}
						<strong>{currentAdmin?.title || currentAdmin?.username}</strong>{' '}
						profilida turibsiz. Bu sahifada ma’lumotlaringizni ko‘rishingiz va
						tahrirlashingiz mumkin.
					</Text>

					<Box display='grid' gridTemplateColumns={['1fr', '1fr 1fr']} gap='lg'>
						<Box p='xl' bg='filterBg' borderRadius='xl'>
							<Text fontWeight='bold' mb='sm'>
								Foydalanuvchi nomi
							</Text>
							<Text>{currentAdmin?.username}</Text>
						</Box>
						<Box p='xl' bg='filterBg' borderRadius='xl'>
							<Text fontWeight='bold' mb='sm'>
								Ism va familya
							</Text>
							<Text>
								{currentAdmin?.firstName} {currentAdmin?.lastName}
							</Text>
						</Box>
						<Box p='xl' bg='filterBg' borderRadius='xl'>
							<Text fontWeight='bold' mb='sm'>
								Tuzilma
							</Text>
							<Text>{currentAdmin?.organizationName}</Text>
						</Box>
						<Box p='xl' bg='filterBg' borderRadius='xl'>
							<Text fontWeight='bold' mb='sm'>
								Telefon va rol
							</Text>
							<Text>{currentAdmin?.phoneNumber}</Text>
							<Text mt='sm'>Rol: {currentAdmin?.role}</Text>
						</Box>
					</Box>

					<Box display='flex' flexWrap='wrap' gap='default' mt='xl'>
						<Button as='a' href={profileEditLink}>
							Profilni tahrirlash
						</Button>
						<Button as='a' href='/admin/logout' variant='outlined'>
							Chiqish
						</Button>
					</Box>

					<Text mt='lg' color='grey100'>
						Eslatma: rol maydoni faqat administrator tomonidan o‘zgartiriladi.
					</Text>
				</Box>
			</Box>
		)
	}

	return (
		<Box variant='grey'>
			<Box bg='white' p='xxl' borderRadius='xl' boxShadow='card'>
				<Text color='primary100' fontWeight='bold' mb='default'>
					Zaxira.uz
				</Text>
				<Text mb='lg'>
					Kirish qilingan profil:{' '}
					<strong>{currentAdmin?.title || currentAdmin?.username}</strong>
				</Text>
				<Box display='flex' flexWrap='wrap' gap='default' mb='xl'>
					<Button as='a' href={profileShowLink} variant='outlined'>
						Mening profilim
					</Button>
					<Button as='a' href={profileEditLink}>
						Profilni tahrirlash
					</Button>
					<Button as='a' href='/admin/logout' variant='outlined'>
						Chiqish
					</Button>
				</Box>
				<H2>{page.label}</H2>
				<Text mt='default'>
					Bu bo‘lim hozircha tayyor sahifa sifatida qo‘shildi. Keyingi vazifani
					aytganingizdan so‘ng aynan shu yerga kerakli ish jarayoni ulanadi.
				</Text>

				<Box mt='xl' p='xl' bg='filterBg' borderRadius='xl'>
					<Text fontWeight='bold' mb='sm'>
						O‘zbekcha
					</Text>
					<Text>{page.shortUz}</Text>

					<Text fontWeight='bold' mt='lg' mb='sm'>
						Русский
					</Text>
					<Text>{page.shortRu}</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default PlaceholderPage
