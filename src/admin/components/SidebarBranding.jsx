import { Box, Icon, Text } from '@adminjs/design-system'
import { Link } from 'react-router-dom'

const SidebarBranding = () => {
	return (
		<Box
			as={Link}
			to='/admin'
			display='block'
			px='lg'
			pt='lg'
			pb='xl'
			style={{ textDecoration: 'none' }}
		>
			<Box
				display='flex'
				alignItems='center'
				p='lg'
				style={{
					gap: '12px',
					borderRadius: '16px',
					background: 'linear-gradient(135deg, #163d7a 0%, #2563eb 100%)',
					boxShadow: '0 12px 28px rgba(37, 99, 235, 0.22)',
					textDecoration: 'none',
				}}
			>
				<Box
					width='44px'
					height='44px'
					display='flex'
					alignItems='center'
					justifyContent='center'
					style={{
						flexShrink: 0,
						borderRadius: '12px',
						background: 'rgba(255, 255, 255, 0.14)',
						border: '1px solid rgba(255, 255, 255, 0.22)',
					}}
				>
					<Icon icon='Archive' size={24} color='white' />
				</Box>

				<Box flex='1'>
					<Text
						as='span'
						display='block'
						fontWeight='900'
						fontSize='xl'
						color='white'
					>
						Zaxira.uz
					</Text>
				</Box>
			</Box>
		</Box>
	)
}

export default SidebarBranding
