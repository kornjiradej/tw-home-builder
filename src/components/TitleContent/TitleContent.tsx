import { Button, Flex, Text, createStyles, rem } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
	highlight: {
		backgroundColor: theme.fn.variant({
			variant: 'light',
			color: theme.primaryColor,
		}).background,
		padding: rem(5),
		paddingTop: 0,
		borderRadius: theme.radius.sm,
		display: 'inline-block',
		color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
	},
}))

export const TitleContent = ({ title }: { title: string }) => {
	const { classes } = useStyles()
	const { back } = useRouter()

	return (
		<Flex align={'center'}>
			<Button
				variant='outline'
				leftIcon={<IconArrowLeft />}
				mr='lg'
				onClick={back}
			>
				ย้อนกลับ
			</Button>
			<Text size={36} fw={700}>
				ขอขอบคุณ <Text className={classes.highlight}>{title}</Text>
			</Text>
		</Flex>
	)
}
