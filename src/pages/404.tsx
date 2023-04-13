import {
	createStyles,
	Image,
	Container,
	Title,
	Text,
	Button,
	SimpleGrid,
	rem,
	Box,
	Center,
} from '@mantine/core'
import { Player } from '@lottiefiles/react-lottie-player'
import { useViewportSize } from '@mantine/hooks'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		paddingBottom: rem(80),
	},

	title: {
		fontWeight: 900,
		fontSize: rem(34),
		marginBottom: theme.spacing.md,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(32),
		},
	},

	control: {
		[theme.fn.smallerThan('sm')]: {
			width: '100%',
		},
	},

	mobileImage: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	desktopImage: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},
}))

const NotFoundPage = () => {
	const { classes } = useStyles()
	const { height } = useViewportSize()
    const { back } = useRouter()
	const options = {
		src: 'https://assets1.lottiefiles.com/packages/lf20_GIyuXJ.json',
		loop: true,
		background: 'transparent',
		speed: 1,
		style: { width: 300, height: 300 },
		controls: true,
		autoplay: true,
	}

	return (
		<Center sx={{ height }}>
			<Container className={classes.root}>
				<SimpleGrid
					spacing={80}
					cols={2}
					breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
				>
					<Box className={classes.mobileImage}>
						<Player {...options} />
					</Box>
					<div>
						<Title className={classes.title}>Something is not right...</Title>
						<Text color='dimmed' size='lg'>
							Page you are trying to open does not exist. You may have mistyped
							the address, or the page has been moved to another URL. If you
							think this is an error contact support.
						</Text>
						<Button
							variant='outline'
							size='md'
							mt='xl'
							className={classes.control}
                            onClick={back}
						>
							Get back to home page
						</Button>
					</div>
					<Box className={classes.desktopImage}>
						<Player {...options} />
					</Box>
				</SimpleGrid>
			</Container>
		</Center>
	)
}

export default NotFoundPage
