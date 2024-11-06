import {
	Blockquote,
	Box,
	Center,
	Container,
	createStyles,
	rem,
	Text,
	Title,
} from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { Player } from '@lottiefiles/react-lottie-player'

const useStyles = createStyles((theme, { height }: { height: number }) => ({
	container: {
		minHeight: 'calc(100dvh - 282px)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: `calc(${theme.spacing.xl} * 3)`,
		[theme.fn.smallerThan('sm')]: {
			paddingBottom: `calc(${theme.spacing.xl} * 3)`,
		},
	},
	inner: {},
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
	description: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[7],
		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
			fontSize: theme.fontSizes.sm,
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
	lottie: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},
}))

export const AboutContent = () => {
	const { height } = useViewportSize()
	const { classes } = useStyles({ height })
	const options = {
		src: 'https://assets7.lottiefiles.com/packages/lf20_gv6ovc3h.json',
		loop: true,
		background: 'transparent',
		speed: 1,
		style: { width: 500, height: 500 },
		controls: true,
		autoplay: true,
	}
	return (
		<Container className={classes.container}>
			<Box>
				<Center>
					<Blockquote>
						<Title className={classes.title}>เกี่ยวกับเรา</Title>
					</Blockquote>
				</Center>
				<Text className={classes.description}>
					เมื่อเดือนธันวาคม พ.ศ.2561 โมเดิร์น เทจเปิดดำเนินการที่จังหวัดเลย
					ซึ่งถือเป็นธุรกิจรับสร้างบ้านแห่งแรกในภูมิภาคตะวันออกเฉียงเหนือของประเทศไทย
					และในเพียงช่วงเริ่มต้นของบริษัท โมเดิร์นเทจ
					ได้เผชิญกับความต้องการที่เพิ่มสูงขึ้นจากคำบอกเล่าต่อกันของลูกค้าที่พึงพอใจในผลงาน
					ดังนั้นในปี พ.ศ.2562 โมเดิร์นเทจ จึงขยายธุรกิจเพิ่มเป็น 15
					สาขาในภาคเหนือและภาคตะวันออกเฉียงเหนือ และปัจจุบันนี้
					ได้ขยายสาขาทั่วภาคใต้และภาคกลาง รวมกว่า 54 สาขาทั่วประเทศ
					<br />
					<br />
					บริษัท โมเดิร์น เทจ จำกัด
					เราคือบริษัทรับสร้างบ้านที่บริการครบวงจรมากที่สุดก่อสร้างอาคารทุกประเภท
					โดยทีมงานมืออาชีพ วิศวกรมีประสบการณ์สูงการันตีด้วยผลงานมากมาย
					สถาปนิกไอเดียดีมีทักษะในการออกแบบให้คำแนะนำให้ลงตัวตามใจลูกค้ามากที่สุดรวมไปถึงออกแบบตามงบประมาณที่ท่านต้องการ
					และช่างก่อสร้างมืออาชีพ
					เราดำเนินงานโดยเอาใจใส่ทุกรายละเอียดทุกขั้นตอนอย่างใกล้ชิด
					งานก่อสร้างต้องได้มาตรฐานวิศวกรรมและสถาปัตยกรรม
					การันตรีด้วยผลงานมากมายที่ลูกค้า 100% พึงพอใจหลังใช้บริการกับเรา
					รวมไปถึงวัสดุที่ใช้ทุกอย่างต้องมี มอก.
					เรายึดถือความพอใจสูงสุดของลูกค้าเป็นหลักสำคัญ
				</Text>
				<Center className={classes.lottie}>
					<Player {...options} />
				</Center>
			</Box>
		</Container>
	)
}
