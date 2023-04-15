/* eslint-disable react/no-unescaped-entities */
import {
	Button,
	Blockquote,
	Center,
	Title,
	Paper,
	List,
	ThemeIcon,
	createStyles,
	rem,
	CopyButton,
	Stack,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import {
	IconBrandFacebook,
	IconCheck,
	IconMail,
	IconPhoneCall,
} from '@tabler/icons-react'
import { Player } from '@lottiefiles/react-lottie-player'

const useStyles = createStyles((theme, { height }: { height: number }) => ({
	container: {
		height: rem(height - 72),
	},
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
	},

	content: {
		maxWidth: rem(480),
		marginLeft: `calc(${theme.spacing.xl} * 3)`,
		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginLeft: 0,
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

export const ContactContent = () => {
	const { height } = useViewportSize()
	const { classes } = useStyles({ height })
	const options = {
		src: 'https://assets6.lottiefiles.com/packages/lf20_ejryvjev.json',
		loop: true,
		background: 'transparent',
		speed: 1,
		style: { width: 500, height: 500 },
		controls: true,
		autoplay: true,
	}
	return (
		<Center className={classes.container} p='xl'>
			<Paper shadow='lg' p='md' radius='md'>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Blockquote>
							<Title className={classes.title}>
								ไว้วางใจเราเรื่อง<span className={classes.highlight}>บ้าน</span>
							</Title>
						</Blockquote>
						<List
							spacing='sm'
							size='sm'
							icon={
								<ThemeIcon size={20} radius='xl'>
									<IconCheck size={rem(12)} stroke={1.5} />
								</ThemeIcon>
							}
						>
							<List.Item>บริการให้คำปรึกษาสอบถามฟรี</List.Item>
							<List.Item>
								แนะแนวทางในการเตรียมความพร้อมก่อนเริ่มสร้างบ้าน
							</List.Item>
							<List.Item>ออกแบบบ้านในฝันด้วยงบประมาณที่ต้องการ</List.Item>
							<List.Item>พูดคุยปรับแบบกับผู้เชี่ยวชาญ</List.Item>
							<List.Item>
								บริการติดต่อ ประสานงาน หน่วยราชการให้ฟรี
								พร้อมขอใบอนุญาตปลูกสร้าง/ขอน้ำ-ไฟ/ทะเบียน
							</List.Item>
							<List.Item>ประเมินราคาบ้านให้ฟรีก่อนตัดสินใจ</List.Item>
						</List>
						<Blockquote mt={rem(40)}>
							<Title className={classes.title}>ติดต่อเรา</Title>
						</Blockquote>
						<Stack align='flex-start'>
							<CopyButton value='0801549887'>
								{({ copied, copy }) => (
									<Button
										color={copied ? 'teal' : 'red'}
										onClick={copy}
										variant='subtle'
										leftIcon={<IconPhoneCall />}
									>
										{copied ? 'Copied phone number' : '080-154-9887'}
									</Button>
								)}
							</CopyButton>
							<CopyButton value='proteusraccon@gmail.com'>
								{({ copied, copy }) => (
									<Button
										color={copied ? 'teal' : 'red'}
										onClick={copy}
										variant='subtle'
										leftIcon={<IconMail />}
									>
										{copied ? 'Copied Email' : 'proteusraccon@gmail.com'}
									</Button>
								)}
							</CopyButton>
							<CopyButton value='gb_boat'>
								{({ copied, copy }) => (
									<Button
										color={copied ? 'teal' : 'red'}
										onClick={copy}
										variant='subtle'
									>
										{copied ? 'Copied LINE_ID' : 'LINE: gb_boat'}
									</Button>
								)}
							</CopyButton>
							<Button
								variant='subtle'
								leftIcon={<IconBrandFacebook />}
								onClick={() =>
									window.open(
										'https://www.facebook.com/Twhomebuilder',
										'_blank'
									)
								}
							>
								Twhomebuilder
							</Button>
						</Stack>
					</div>
					<Center className={classes.image}>
						<Player {...options} />
					</Center>
				</div>
			</Paper>
		</Center>
	)
}
