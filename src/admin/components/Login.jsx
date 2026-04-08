import {
	Box,
	Button,
	FormGroup,
	H2,
	Input,
	Label,
	MessageBox,
	Text,
} from '@adminjs/design-system'
import { useTranslation } from 'adminjs'
import { useState } from 'react'

const shellStyle = {
	background: 'linear-gradient(135deg, #f8fbff 0%, #eef6ff 45%, #f8fafc 100%)',
}

const cardStyle = {
	border: '1px solid #e2e8f0',
	backdropFilter: 'blur(6px)',
}

const fieldInputStyle = {
	width: '100%',
	minHeight: '42px',
}

const passwordWrapStyle = {
	position: 'relative',
}

const passwordToggleStyle = {
	position: 'absolute',
	top: '50%',
	right: '8px',
	transform: 'translateY(-50%)',
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '34px',
	height: '34px',
	border: 'none',
	background: 'transparent',
	color: '#64748b',
	borderRadius: '999px',
	cursor: 'pointer',
	padding: 0,
}

const EyeIcon = ({ open }) => (
	<svg
		width='18'
		height='18'
		viewBox='0 0 18 18'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M1.5 9C2.7 6.4 5.3 4.5 9 4.5C12.7 4.5 15.3 6.4 16.5 9C15.3 11.6 12.7 13.5 9 13.5C5.3 13.5 2.7 11.6 1.5 9Z'
			stroke='currentColor'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<circle cx='9' cy='9' r='2.2' stroke='currentColor' strokeWidth='1.5' />
		{open ? null : (
			<path
				d='M3 15L15 3'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeLinecap='round'
			/>
		)}
	</svg>
)

const resolveMessage = (message, translateMessage) => {
	if (!message) {
		return ''
	}

	return message.split(' ').length > 1 ? message : translateMessage(message)
}

const Login = () => {
	const props = window.__APP_STATE__ || {}
	const { action, errorMessage: message } = props
	const { translateComponent, translateMessage } = useTranslation()
	const [showPassword, setShowPassword] = useState(false)

	const errorMessage = resolveMessage(message, translateMessage)
	const emailLabel = translateComponent('Login.properties.email')
	const passwordLabel = translateComponent('Login.properties.password')
	const passwordToggleLabel = translateComponent(
		showPassword ? 'Login.hidePassword' : 'Login.showPassword',
	)

	return (
		<Box
			variant='grey'
			display='flex'
			alignItems='center'
			justifyContent='center'
			minHeight='100vh'
			p='xl'
			style={shellStyle}
		>
			<Box
				as='form'
				action={action}
				method='POST'
				bg='white'
				p='x3'
				width={['100%', '520px']}
				borderRadius='xl'
				boxShadow='login'
				style={cardStyle}
			>
				<Box mb='xl'>
					<Text
						as='span'
						color='primary100'
						fontWeight='bold'
						p='sm'
						style={{
							display: 'inline-flex',
							borderRadius: '999px',
							background: '#eff6ff',
						}}
					>
						Zaxira.uz
					</Text>
					<H2 mt='lg'>{translateComponent('Login.welcomeHeader')}</H2>
					<Text mt='default' color='grey100'>
						{translateComponent('Login.welcomeMessage')}
					</Text>
				</Box>

				{errorMessage ? (
					<MessageBox my='lg' message={errorMessage} variant='danger' />
				) : null}

				<FormGroup>
					<Label required>{emailLabel}</Label>
					<Input
						name='email'
						autoFocus
						autoComplete='username'
						placeholder={emailLabel}
						required
						style={fieldInputStyle}
					/>
				</FormGroup>

				<FormGroup>
					<Label required>{passwordLabel}</Label>
					<Box style={passwordWrapStyle}>
						<Input
							type={showPassword ? 'text' : 'password'}
							name='password'
							placeholder={passwordLabel}
							autoComplete='current-password'
							required
							style={{ ...fieldInputStyle, paddingRight: '46px' }}
						/>
						<button
							type='button'
							onClick={() => setShowPassword(currentValue => !currentValue)}
							style={passwordToggleStyle}
							aria-label={passwordToggleLabel}
							title={passwordToggleLabel}
							aria-pressed={showPassword}
						>
							<EyeIcon open={showPassword} />
						</button>
					</Box>
				</FormGroup>

				<Box mt='xl'>
					<Button
						variant='contained'
						type='submit'
						style={{ width: '100%', justifyContent: 'center' }}
					>
						{translateComponent('Login.loginButton')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default Login
