import {
	Box,
	Button,
	DropDown,
	DropDownItem,
	DropDownMenu,
	DropDownTrigger,
	Icon,
} from '@adminjs/design-system'
import { useCurrentAdmin, useTranslation } from 'adminjs'
import { useMemo } from 'react'

const TopBar = ({ toggleSidebar }) => {
	const [currentAdmin] = useCurrentAdmin()
	const profileLink = currentAdmin?.id
		? `/admin/resources/User/records/${currentAdmin.id}/show`
		: '/admin'
	const {
		i18n: {
			language,
			options: { supportedLngs },
			changeLanguage,
		},
		translateComponent,
	} = useTranslation()

	const availableLanguages = useMemo(
		() =>
			supportedLngs ? supportedLngs.filter(lang => lang !== 'cimode') : [],
		[supportedLngs],
	)

	return (
		<Box
			bg='white'
			borderBottom='default'
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			flexWrap='wrap'
			gap='default'
			px='lg'
			py='default'
		>
			<Box display='flex' alignItems='center' gap='default'>
				<Box
					py='sm'
					onClick={toggleSidebar}
					display={['block', 'block', 'block', 'block', 'none']}
					style={{ cursor: 'pointer' }}
				>
					<Icon icon='Menu' size={24} />
				</Box>
			</Box>

			<Box display='flex' alignItems='center' flexWrap='wrap' gap='default'>
				{availableLanguages.length > 1 ? (
					<DropDown>
						<DropDownTrigger>
							<Button color='text'>
								<Icon icon='Globe' />
								{translateComponent(
									`LanguageSelector.availableLanguages.${language}`,
									{
										defaultValue: language,
									},
								)}
							</Button>
						</DropDownTrigger>
						<DropDownMenu>
							{availableLanguages.map(lang => (
								<DropDownItem key={lang} onClick={() => changeLanguage(lang)}>
									{translateComponent(
										`LanguageSelector.availableLanguages.${lang}`,
										{
											defaultValue: lang,
										},
									)}
								</DropDownItem>
							))}
						</DropDownMenu>
					</DropDown>
				) : null}

				<Button as='a' href={profileLink} variant='outlined'>
					<Icon icon='User' mr='sm' />
					Mening profilim
				</Button>
				<Box width='8px' />
				<Button as='a' href='/admin/logout' variant='outlined'>
					<Icon icon='LogOut' mr='sm' />
					Chiqish
				</Button>
			</Box>
		</Box>
	)
}

export default TopBar
