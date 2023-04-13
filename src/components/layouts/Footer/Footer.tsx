import {
	createStyles,
	Text,
	Container,
	rem,
	Avatar,
	Stack,
	Center,
	ActionIcon,
	CopyButton,
	Flex,
} from '@mantine/core'
import dayjs from 'dayjs'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { FooterLinksProps } from '@/types'
import { TWHomeBuilderBucketURL } from '@/config'

const useStyles = createStyles(
	(theme, { showContact }: { showContact: boolean }) => ({
		footer: {
			paddingTop: showContact ? `calc(${theme.spacing.xl} * 2)` : 0,
			paddingBottom: showContact ? `calc(${theme.spacing.xl} * 2)` : 0,
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.red[0],
			borderTop: `${rem(1)} solid ${
				theme.colorScheme === 'dark'
					? theme.colors.dark[5]
					: theme.colors.gray[2]
			}`,
		},

		logo: {
			maxWidth: rem(200),
			[theme.fn.smallerThan('md')]: {
				display: 'flex',
				flexDirection: 'column',
				marginBottom: rem(30),
			},
		},
		inner: {
			display: 'flex',
			justifyContent: 'space-between',
			[theme.fn.smallerThan('md')]: {
				flexDirection: 'column',
				alignItems: 'center',
			},
		},

		groups: {
			display: 'flex',
			flexWrap: 'wrap',

			[theme.fn.smallerThan('sm')]: {
				flexDirection: 'column',
				alignItems: 'center',
			},
		},

		wrapper: {
			width: rem(200),
			[theme.fn.smallerThan('md')]: {
				width: rem(230),
			},
			[theme.fn.smallerThan('sm')]: {
				width: '100%',
				marginTop: rem(20),
				marginBottom: rem(20),
			},
		},

		link: {
			display: 'flex',
			alignItems: 'center',
			color:
				theme.colorScheme === 'dark'
					? theme.colors.dark[1]
					: theme.colors.gray[6],
			fontSize: theme.fontSizes.sm,
			paddingTop: rem(3),
			paddingBottom: rem(3),

			'&:hover': {
				textDecoration: 'underline',
			},
		},

		title: {
			fontSize: theme.fontSizes.lg,
			fontWeight: 700,
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			marginBottom: `calc(${theme.spacing.xs} / 2)`,
			color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		},

		afterFooter: {
			marginTop: showContact ? theme.spacing.xl : 0,
			paddingTop: theme.spacing.xl,
			paddingBottom: theme.spacing.xl,
			borderTop: showContact
				? `${rem(1)} solid ${
						theme.colorScheme === 'dark'
							? theme.colors.dark[4]
							: theme.colors.gray[2]
				  }`
				: 0,
		},

		social: {
			[theme.fn.smallerThan('sm')]: {
				marginTop: theme.spacing.xs,
			},
		},
	})
)

export function FooterLinks({ data, showContact = true }: FooterLinksProps) {
	const { classes } = useStyles({ showContact })

	const groups = data.map((group) => {
		const links = group.links.map((link, index) => {
			if (link.isClipboard) {
				return (
					<CopyButton key={link.link} value={link.link} timeout={1000}>
						{({ copied, copy }) => (
							<Flex>
								<Text className={classes.link} span onClick={copy}>
									{link.label}
								</Text>
								<ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
									{copied ? (
										<IconCheck size='1rem' />
									) : (
										<IconCopy size='1rem' />
									)}
								</ActionIcon>
							</Flex>
						)}
					</CopyButton>
				)
			}
			return (
				<Text<'a'>
					key={index}
					className={classes.link}
					component='a'
					href={link.link}
					target='_blank'
				>
					{link.label}{' '}
				</Text>
			)
		})

		return (
			<div className={classes.wrapper} key={group.title}>
				<Text className={classes.title}>{group.title}</Text>
				{links}
			</div>
		)
	})

	return (
		<footer className={classes.footer} id='footer'>
			{showContact && (
				<Container className={classes.inner}>
					<div className={classes.logo}>
						<Flex justify={'center'} align={'center'}>
							<Avatar
								src={`${TWHomeBuilderBucketURL}/TW-Home-Builder-Logo.webp`}
								size={45}
								radius={2}
								mr={10}
							/>
							<Stack spacing={0}>
								<Text size='md'>TW Home Builder</Text>
								<Text size='xs' color='dimmed'>
									เรื่องบ้านให้เราดูแล
								</Text>
							</Stack>
						</Flex>
					</div>
					<div className={classes.groups}>{groups}</div>
				</Container>
			)}
			<Container className={classes.afterFooter}>
				<Center>
					<Text color='dimmed' size='sm'>
						{`Copyright © ${dayjs().format(
							'YYYY'
						)} ห้างหุ้นส่วนจำกัด ทีดับบลิว โฮมบิ้วเดอร์`}
					</Text>
				</Center>
			</Container>
		</footer>
	)
}
