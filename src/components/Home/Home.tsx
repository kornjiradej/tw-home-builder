import {
	createStyles,
	Overlay,
	Container,
	Title,
	Button,
	Text,
	rem,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { TWHomeBuilderBucketURL } from '@/config'
import { Link } from 'react-scroll'

const useStyles = createStyles((theme, { height }: { height: number }) => ({
	hero: {
		position: 'relative',
		// Default Cover Image
		// backgroundImage:
		// 	'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
		backgroundImage: `url(${TWHomeBuilderBucketURL}/About-Landscape.webp)`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	container: {
		height: rem(height - 56), // 56 is the height of the navigation bar
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: `calc(${theme.spacing.lg} * 16)`,
		zIndex: 1,
		position: 'relative',
		[theme.fn.smallerThan('sm')]: {
			height: rem(500),
			paddingBottom: `calc(${theme.spacing.xl} * 3)`,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.primaryColor,
		fontSize: rem(60),
		fontWeight: 900,
		lineHeight: 1.1,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(40),
			lineHeight: 1.2,
		},

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28),
			lineHeight: 1.3,
		},
	},

	description: {
		color: theme.white,
		textAlign: 'center',
		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
			fontSize: theme.fontSizes.sm,
		},
	},

	control: {
		marginTop: `calc(${theme.spacing.xl} * 1.5)`,

		[theme.fn.smallerThan('sm')]: {
			width: '100%',
		},
	},
}))

export const Home = () => {
	const { height } = useViewportSize()
	const { classes } = useStyles({ height })

	return (
		<section id='about' className={classes.hero}>
			<Overlay
				gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
				opacity={1}
				zIndex={0}
			/>
			<Container className={classes.container}>
				<Title className={classes.title}>TW Home Builder</Title>
				<Text className={classes.description} size='xl' mt='xl'>
					สร้างบ้าน ออกแบบ เขียนแบบ รีโนเวทบ้าน Interior Designer
					สร้างบ้านสวยตามใจคุณ
				</Text>
				<Link to='section-one' smooth duration={500}>
					<Button
						variant='gradient'
						size='xl'
						radius='xl'
						className={classes.control}
					>
						บริการของเรา
					</Button>
				</Link>
			</Container>
		</section>
	)
}
