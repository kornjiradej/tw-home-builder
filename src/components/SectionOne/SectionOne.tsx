/* eslint-disable jsx-a11y/alt-text */
import {
	createStyles,
	Image,
	Container,
	Title,
	Button,
	Group,
	Text,
	List,
	ThemeIcon,
	rem,
	Center,
} from '@mantine/core'
import { Player } from '@lottiefiles/react-lottie-player'
import { IconCheck } from '@tabler/icons-react'
import { Link } from 'react-scroll'

const useStyles = createStyles((theme) => ({
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 4)`,
		paddingBottom: `calc(${theme.spacing.xl} * 4)`,
	},

	content: {
		maxWidth: rem(480),
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(44),
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28),
		},
	},

	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
	},

	button: {
		[theme.fn.smallerThan('xs')]: {
			width: '100%',
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor,
		}).background,
		borderRadius: theme.radius.sm,
		padding: `${rem(4)} ${rem(12)}`,
	},
}))

export const SectionOne = () => {
	const { classes } = useStyles()
	const options = {
		src: 'https://assets10.lottiefiles.com/packages/lf20_o6hQ8m.json',
		loop: true,
		background: 'transparent',
		speed: 1,
		style: { width: 300, height: 300 },
		controls: true,
		autoplay: true,
	}

	return (
		<section id='section-one'>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							ให้เรื่อง<span className={classes.highlight}>บ้าน</span>
							เป็นเรื่องง่าย
							<br />{' '}
						</Title>
						<Text color='dimmed' mt='md'>
							พร้อมงานบริการที่ครอบคลุมทั่วจังหวัดสกลนคร และจังหวัดใกล้เคียง
						</Text>
						<List
							mt={30}
							spacing='sm'
							size='sm'
							icon={
								<ThemeIcon size={20} radius='xl'>
									<IconCheck size={rem(12)} stroke={1.5} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>บริการออกแบบ</b> – ลงลึกทุกรายละเอียดตั้งแต่เริ่มออกแบบ
								ให้ตำแนะนำโดยผู้เชี่ยวชาญ เน้นความสวยงามและฟังก์ชั่นที่ลงตัว
								เพื่อการใช้พื้นที่อย่างคุ้มค่า อยู่ในงบที่ไม่บานปลาย
								ตอบโจทย์กับความต้องการของแต่ละครอบครัว
								รวมถึงการเลือกใช้วัสดุที่เหมาะสมกับการใช้งานในแต่ละพื้นที่
							</List.Item>
							<List.Item>
								<b>บริการรับเหมาก่อสร้าง</b> – บริการรับเหมาก่อสร้างบ้าน
								และอาคารที่พักอาศัยตั้งแต่ขนาดเล็กจนถึงขนาดใหญ่โดยผู้เชี่ยวชาญ
								มืออาชีพมากประสบการณ์ เริ่มตั้งแต่ขั้นตอนออกแบบ จนถึงงานก่อสร้าง
							</List.Item>
							<List.Item>
								<b>งานปรับปรุงและต่อเติม</b> – รับต่อเติมและปรับปรุงบ้าน
								ดูแลบ้านตั้งแต่ขั้นตอนออกแบบจนถึงก่อสร้างอย่างมืออาชีพด้วยประสบการณ์มากกว่า
								20 ปี ให้คุณได้บ้านอย่างที่คุณต้องการ
							</List.Item>
						</List>
						<Group mt={30}>
							<Link
								to={'footer'}
								smooth
								duration={500}
								className={classes.control}
							>
								<Button className={classes.button} radius='xl' size='md'>
									ติดต่อเรา
								</Button>
							</Link>
							<Link to={'/'} className={classes.control}>
								<Button
									className={classes.button}
									variant='default'
									radius='xl'
									size='md'
								>
									รีวิว
								</Button>
							</Link>
						</Group>
					</div>
					<Center className={classes.image}>
						<Player {...options} />
					</Center>
				</div>
			</Container>
		</section>
	)
}
