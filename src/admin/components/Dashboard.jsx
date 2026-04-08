import { Box, Button, H2, Text } from '@adminjs/design-system'
import { useCurrentAdmin } from 'adminjs'

import { sidebarPages } from '../page-data.js'

const Dashboard = () => {
	const [currentAdmin] = useCurrentAdmin()
	const visiblePages = sidebarPages.filter(page => {
		if (page.id === 'mening-profilim') {
			return false
		}

		if (
			page.id === 'foydalanuvchilar' &&
			!['admin', 'monitoring'].includes(currentAdmin?.role)
		) {
			return false
		}

		if (
			page.id === 'buyurtma-qilish' &&
			!['admin', 'monitoring', 'sotib_oluvchi'].includes(currentAdmin?.role)
		) {
			return false
		}

		return true
	})

	return (
		<Box variant='grey'>
			<Box bg='white' p='xxl' borderRadius='xl' boxShadow='card'>
				<Text color='primary100' fontWeight='bold' mb='default'>
					Zaxira.uz
				</Text>
				<H2>Omborxona nazorati uchun asosiy bo‘limlar</H2>
				<Text mt='default' mb='lg'>
					Siz tizimga{' '}
					<strong>{currentAdmin?.title || currentAdmin?.username}</strong>{' '}
					sifatida kirgansiz. Rolingiz: <strong>{currentAdmin?.role}</strong>
				</Text>

				<Box display='flex' flexWrap='wrap' gap='default' mb='xl'>
					<Button
						as='a'
						href={`/admin/resources/User/records/${currentAdmin?.id}/edit`}
					>
						Profilni tahrirlash
					</Button>
				</Box>

				<Box display='grid' gridTemplateColumns={['1fr', '1fr 1fr']} gap='lg'>
					{visiblePages.map(page => (
						<Box
							key={page.id}
							bg='filterBg'
							border='1px solid #E5E7EB'
							borderRadius='xl'
							p='xl'
						>
							<Text fontWeight='bold' mb='sm'>
								{page.label}
							</Text>
							<Text color='grey100' mb='lg'>
								{page.shortUz}
							</Text>
							<Button
								as='a'
								href={page.resourceLink || `/admin/pages/${page.id}`}
								variant='outlined'
							>
								Bo‘limni ochish
							</Button>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default Dashboard
