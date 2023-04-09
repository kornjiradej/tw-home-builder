/* eslint-disable react/no-unescaped-entities */
import {
	Center,
	Container,
	Flex,
	Paper,
	Text,
	Title,
	createStyles,
	Image,
	Modal,
	useMantineTheme,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { TWHomeBuilderBucketURL } from '@/config'
import { useEffect, useState } from 'react'
import { useViewportSize } from '@mantine/hooks'

interface IList {
	id: string
	label: string
	img: string
}

const TRANSITION_DURATION = 200

const carouselList: IList[] = [
	{
		id: '1',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/1.jpg`,
	},
	{
		id: '2',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/2.jpeg`,
	},
	{
		id: '3',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/3.jpeg`,
	},
	{
		id: '4',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/4.jpeg`,
	},
	{
		id: '5',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/5.jpeg`,
	},
	{
		id: '6',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/6.jpeg`,
	},
	{
		id: '7',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/7.jpeg`,
	},
	{
		id: '8',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/8.jpeg`,
	},
	{
		id: '9',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/9.jpeg`,
	},
	{
		id: '10',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/10.jpeg`,
	},
	{
		id: '11',
		label: 'Write something here.',
		img: `${TWHomeBuilderBucketURL}/ครอบครัว ผอ.ปนิดา เวกสูงเนิน/11.jpeg`,
	},
]

const useStyles = createStyles((theme) => ({
	paper: {
		background: theme.colors.red[5],
		height: '100%',
		color: theme.colors.gray[0],
		cursor: 'pointer',
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
}))

const useCarouselStyles = createStyles((theme) => ({
	indicators: {
		bottom: '-1rem',
		button: {
			backgroundColor: theme.colors.red[5],
		},
	},
}))

export const SectionTwo = () => {
	const { classes } = useStyles()
	const { classes: carouselClasses } = useCarouselStyles()
	const theme = useMantineTheme()
	const [reviewId, setReviewId] = useState<number | null>(null)

	return (
		<section id='section-two'>
			<Container>
				<Text color='write' align='center' mb='15px'>
					<Title order={1}>รีวิวจากบ้าน ผอ.ปนิดา เวกสูงเนิน</Title>
				</Text>
				<Text color='write' align='center' mb='25px'>
					พื้นที่ใช้สอยโดยรวมประมาณ 180 ตรม.*ตัวบ้าน150 ตร.ม.โรงจอดรถ 30
					ตร.ม.🥰🥰 3ห้องนอน 2ห้องน้ำ 1ห้องรับเเขก 1ห้องครัว ระเบียงหน้าบ้าน
					เเละที่จอดรถ
				</Text>
				<Carousel
					withIndicators
					controlsOffset={'xl'}
					slideSize='33.333333%'
					slideGap='md'
					breakpoints={[
						{ maxWidth: 'md', slideSize: '50%' },
						{ maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
					]}
					loop
					align='start'
					pr='10px'
					pl='10px'
					classNames={carouselClasses}
				>
					{carouselList.map((item) => (
						<Carousel.Slide key={item.id}>
							<Paper
								shadow='xs'
								radius='md'
								p={5}
								className={classes.paper}
								onClick={() => setReviewId(Number(item.id))}
							>
								<Flex direction={'column'} h={'100%'}>
									<Center h={'100%'}>
										<Image
											height={250}
											mx='auto'
											radius='xs'
											src={item.img}
											alt='Random image'
										/>
									</Center>
								</Flex>
							</Paper>
						</Carousel.Slide>
					))}
				</Carousel>
				{reviewId && (
					<Modal
						opened={reviewId ? true : false}
						onClose={() => setReviewId(null)}
						title={''}
						centered
						withCloseButton={false}
						transitionProps={{
							transition: 'fade',
							duration: TRANSITION_DURATION,
						}}
						radius='md'
						size='70rem'
						overlayProps={{
							color:
								theme.colorScheme === 'dark'
									? theme.colors.dark[9]
									: theme.colors.gray[2],
							opacity: 0.55,
							blur: 3,
						}}
					>
						<Image
							radius='xs'
							src={carouselList.find((c) => c.id === `${reviewId}`)?.img}
							alt='Random image'
						/>
					</Modal>
				)}
			</Container>
		</section>
	)
}
