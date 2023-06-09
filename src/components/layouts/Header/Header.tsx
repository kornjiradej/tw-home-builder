import { animateScroll } from 'react-scroll'
import {
	createStyles,
	Header,
	Menu,
	Group,
	Center,
	Burger,
	Container,
	rem,
	Avatar,
	useMantineColorScheme,
	Switch,
	useMantineTheme,
	Drawer,
	Text,
	Box,
	ActionIcon,
	Flex,
} from '@mantine/core'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import { HeaderSearchProps } from '@/types'
import { TWHomeBuilderBucketURL } from '@/config'
import { useRouter } from 'next/router'

const useStyles = createStyles(
	(
		theme,
		{
			isScrolled,
			isPaintBackgroundColor,
		}: { isScrolled: boolean; isPaintBackgroundColor: boolean }
	) => ({
		header: {
			height: '3.5rem',
			position: 'fixed',
			top: 0,
			backgroundColor: isScrolled
				? theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.red[5]
				: isPaintBackgroundColor
				? theme.colorScheme === 'dark'
					? theme.colors.dark[7]
					: theme.colors.red[5]
				: 'transparent',
			transition: 'all 0.3s ease',
			zIndex: 10,
			borderBottom: isScrolled ? `${rem(1)} double ${theme.colors.red[3]}` : 0,

			'&::after': {
				content: '""',
				position: 'absolute',
				left: 0,
				right: 0,
				bottom: 0,
			},
		},

		inner: {
			height: rem(56),
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},

		links: {
			[theme.fn.smallerThan('sm')]: {
				display: 'none',
			},
		},

		burger: {
			[theme.fn.largerThan('sm')]: {
				display: 'none',
			},
		},

		link: {
			cursor: 'pointer',
			display: 'block',
			lineHeight: 1,
			padding: `${rem(8)} ${rem(12)}`,
			borderRadius: theme.radius.sm,
			textDecoration: 'none',
			color: isScrolled
				? theme.colorScheme === 'dark'
					? theme.colors.dark[0]
					: theme.white
				: theme.white,
			[theme.fn.smallerThan('sm')]: {
				color: theme.colorScheme === 'dark' ? 'white' : 'black',
			},
			fontSize: theme.fontSizes.sm,
			fontWeight: 500,

			'&:hover': {
				backgroundColor:
					theme.colorScheme === 'dark'
						? theme.colors.dark[6]
						: theme.colors.red[6],
				color: theme.white,
			},
		},

		linkLabel: {
			marginRight: rem(5),
		},

		logoTitle: {
			color: isScrolled
				? theme.colorScheme === 'dark'
					? theme.colors.dark[0]
					: theme.white
				: 'white',
		},

		drawer: {
			body: {
				maxWidth: 250,
			},
		},
	})
)

export const HeaderMenu = ({ links }: HeaderSearchProps) => {
	const theme = useMantineTheme()
	const [scroll] = useWindowScroll()
	const { pathname, push } = useRouter()
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const [opened, { toggle, close }] = useDisclosure(false)
	const { classes } = useStyles({
		isScrolled: scroll.y > 0,
		isPaintBackgroundColor: pathname !== '/' ? true : false,
	})

	const onClickLogo = () => {
		if (pathname === '/') {
			return animateScroll.scrollToTop()
		}
		return push(`/`)
	}

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link} onClick={close}>
				{item.label}
			</Menu.Item>
		))

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger='hover'
					transitionProps={{ exitDuration: 0 }}
					withinPortal
				>
					<Menu.Target>
						<Center
							className={classes.link}
							onClick={(event) => {
								event.preventDefault()
								close()
								push(link.link)
							}}
						>
							<span className={classes.linkLabel}>{link.label}</span>
							<IconChevronDown size='0.9rem' stroke={1.5} />
						</Center>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			)
		}
		return (
			<Text
				key={link.label}
				className={classes.link}
				onClick={() => push(link.link)}
			>
				{link.label}
			</Text>
		)
	})

	const switchTheme = (
		<Switch
			size='md'
			color={colorScheme === 'dark' ? 'gray' : 'dark'}
			onLabel={
				<IconSun size='1rem' stroke={2.5} color={theme.colors.yellow[4]} />
			}
			offLabel={
				<IconMoonStars size='1rem' stroke={2.5} color={theme.colors.blue[6]} />
			}
			onClick={() => toggleColorScheme()}
			style={{
				cursor: 'pointer',
			}}
		/>
	)

	return (
		<Header height={56} className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<Flex>
						<ActionIcon onClick={onClickLogo} mr={10}>
							<Avatar
								src={`${TWHomeBuilderBucketURL}/TW-Home-Builder-Logo.webp`}
								size={28}
								radius={2}
							/>
						</ActionIcon>
						<Text className={classes.logoTitle}>TW Home Builder</Text>
					</Flex>
					<Group spacing={5} className={classes.links}>
						{items}
						{switchTheme}
					</Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size='sm'
						color='white'
					/>
					<Drawer
						opened={opened}
						onClose={close}
						title='Menu'
						overlayProps={{ opacity: 0.5, blur: 4 }}
						position='right'
						className={classes.drawer}
						size='15rem'
					>
						{items}
						<Box m={'xs'}>{switchTheme}</Box>
					</Drawer>
				</div>
			</Container>
		</Header>
	)
}
