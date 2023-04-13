import { ReactNode } from 'react'

interface IFooter {
	showContact: boolean
}
export interface LayoutProps {
	children: ReactNode
	footer?: IFooter
}

export interface HeaderSearchProps {
	links: {
		link: string
		label: string
		links?: { link: string; label: string }[]
	}[]
}

export interface FooterLinksProps {
	data: {
		title: string
		links: { label: string | ReactNode; link: string; isClipboard?: boolean }[]
	}[]
	showContact?: boolean
}

export interface NestedLayoutProps {
	children: ReactNode
}
