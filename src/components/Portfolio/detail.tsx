import {
	AspectRatio,
	Box,
	Card,
	Container,
	createStyles,
	SimpleGrid,
	Text,
	Image,
	Modal,
	useMantineTheme,
} from '@mantine/core'
import { useRouter } from 'next/router'
import reviews from '../../data/reviews.json'
import { TRANSITION_DURATION, TWHomeBuilderBucketURL } from '@/config'
import { useState } from 'react'
import { TitleContent } from '../TitleContent'
import { Layout } from '@/components/layouts'

const useStyles = createStyles((theme) => ({
	container: {
		margin: 'auto',
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		paddingBottom: `calc(${theme.spacing.xl} * 3)`,
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
	description: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
	},
}));

const Detail = () => {
	const {
		query: { id },
	} = useRouter()
	const { classes } = useStyles()
	const theme = useMantineTheme()
	const data = reviews.find((r) => r.id === id)
	const [imageId, setImageId] = useState<string | null>(null)

	const cards = data?.images.map((img) => (
		<Card
			key={img}
			p='md'
			radius='md'
			className={classes.card}
			onClick={() => setImageId(img)}
		>
			<AspectRatio ratio={1920 / 1080}>
				<Image
					src={`${TWHomeBuilderBucketURL}/${data.id}/${img}.webp`}
					alt='image-card'
				/>
			</AspectRatio>
		</Card>
	))

	return (
		<Layout>
			<Container className={classes.container}>
				<Box mt={20}>
					<TitleContent title={`${data?.owner}`} />
					<Text size={18} fw={500} mt={'md'}>
						{data?.title}
					</Text>
					<Text className={classes.description} size={14} mt={'md'}>
						{data?.description}
					</Text>
				</Box>
				<SimpleGrid
					mt={30}
					mb={60}
					cols={3}
					breakpoints={[
						{ maxWidth: 'sm', cols: 1 },
						{ maxWidth: 'md', cols: 2 },
					]}
				>
					{cards}
				</SimpleGrid>
				<Modal
					opened={imageId ? true : false}
					onClose={() => setImageId(null)}
					title={''}
					centered
					withCloseButton={false}
					transitionProps={{
						transition: 'fade',
						duration: TRANSITION_DURATION,
					}}
					radius='md'
					size='100%'
					overlayProps={{
						color:
							theme.colorScheme === 'dark'
								? theme.colors.dark[9]
								: theme.colors.gray[2],
						opacity: 0.55,
						blur: 3,
					}}
				>
					<AspectRatio ratio={1080 / 720} mx='auto'>
						<Image
							radius='xs'
							src={`${TWHomeBuilderBucketURL}/${data?.id}/${imageId}.webp`}
							alt='image'
						/>
					</AspectRatio>
				</Modal>
			</Container>
		</Layout>
	)
}

export default Detail
