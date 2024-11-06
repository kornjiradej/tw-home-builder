import {
	Text,
	Container,
	createStyles,
	Image,
	rem,
	SimpleGrid,
	AspectRatio,
	Card,
	Tooltip,
} from '@mantine/core'
import { useRouter } from 'next/router'
import reviews from '../../data/reviews.json'
import { TWHomeBuilderBucketURL } from '@/config'

const useStyles = createStyles((theme) => ({
	paper: {
		background: theme.colors.red[5],
		height: '100%',
		color: theme.colors.gray[0],
		cursor: 'pointer',
	},
	container: {
		minHeight: 'calc(100dvh - 282px)',
		margin: 'auto',
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
	},
	carousel: {
		root: {
			'.mantine-Carousel-indicators': {
				bottom: '-1rem',
				backgroundColor: theme.colors.red[5],
			},
		},
		indicators: {
			bottom: '-1rem',
			backgroundColor: theme.colors.red[5],
		},
	},
	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontSize: rem(50),
		lineHeight: 1.2,
		fontWeight: 900,
	},
	card: {
		boxShadow: theme.shadows.md,
		transition: 'transform 150ms ease, box-shadow 150ms ease',
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.01)',
			boxShadow: theme.shadows.md,
		},
	},
	tooltip: {},
}));

export const PortfolioList = () => {
	const { classes } = useStyles()
	const { push } = useRouter()

	const onClickCard = (id: string) => push(`portfolio/${id}`)

	const cards = reviews.map((r) => (
		<Card
			key={r.title}
			p='md'
			radius='md'
			className={classes.card}
			onClick={() => onClickCard(r.id)}
		>
			<AspectRatio ratio={1920 / 1080}>
				<Image
					src={`${TWHomeBuilderBucketURL}/${r.id}/${r.images[0]}.webp`}
					alt='cover-card'
				/>
			</AspectRatio>
			<Tooltip
				label={r.title}
				multiline
				className={classes.tooltip}
				zIndex={999}
				position='bottom'
				withArrow
			>
				<Text size={18} fw={700} lineClamp={3} mt={5}>
					{r.title}
				</Text>
			</Tooltip>
			<Text color='dimmed' size='xs' transform='uppercase' weight={700}>
				{r.createdDate}
			</Text>
			<Text color='dimmed' size='xs' transform='uppercase' mt='md'>
				{r.description}
			</Text>
		</Card>
	))

	return (
		<section id='section-two'>
			<Container className={classes.container}>
				<Text className={classes.title} align='center' mb='lg'>
					การันตีด้วยผลงานคุณภาพมากมาย
				</Text>
				<SimpleGrid
					cols={3}
					breakpoints={[
						{ maxWidth: 'sm', cols: 1 },
						{ maxWidth: 'md', cols: 2 },
					]}
				>
					{cards}
				</SimpleGrid>
			</Container>
		</section>
	)
}
