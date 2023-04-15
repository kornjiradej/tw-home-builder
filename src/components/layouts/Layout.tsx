import { FooterLinksProps, HeaderSearchProps, LayoutProps } from '@/types'
import { HeaderMenu } from './Header'
import { FooterLinks } from './Footer'
import { PATH } from '@/config'

const menusHeader: HeaderSearchProps = {
	links: [
		{
			link: PATH.about,
			label: 'เกี่ยวกับเรา',
		},
		{
			link: PATH.portfolio,
			label: 'ผลงานของเรา',
		},
		{
			link: PATH.contact,
			label: 'ติดต่อเรา',
		},
	],
}

const menuFooter: FooterLinksProps = {
	data: [
		{
			title: 'ที่อยู่',
			links: [
				{
					label: '704/44 ถนนเลี่ยงเมือง ต.ธาตุเชิงชุม อ.เมืองสกลนคร จ.สกลนคร',
					link: 'https://goo.gl/maps/JAvutFRp15gajdQt9',
				},
			],
		},
		{
			title: 'ติดต่อเรา',
			links: [
				{
					label: '080-154-9887',
					link: '0801549887',
					isClipboard: true,
				},
				{
					label: 'proteusraccon@gmail.com',
					link: 'proteusraccon@gmail.com',
					isClipboard: true,
				},
			],
		},
		{
			title: 'ติดตามข่าวสาร',
			links: [
				{
					label: 'Facebook: Twhomebuilder',
					link: 'https://www.facebook.com/Twhomebuilder',
				},
				{
					label: 'Line: gb_boat',
					link: '#', // TODO: Ask to get the link
				},
			],
		},
	],
}
export const Layout = ({ children, footer }: LayoutProps) => {
	return (
		<>
			<HeaderMenu links={menusHeader.links} />
			<main>{children}</main>
			<FooterLinks data={menuFooter.data} {...footer} />
		</>
	)
}
