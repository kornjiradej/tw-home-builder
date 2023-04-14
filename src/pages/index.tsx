import { ReactElement } from 'react'
import { LoadingOverlay } from '@mantine/core'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layouts'

import dynamic from 'next/dynamic'

const Content = dynamic(() => import('@/views/Content'), {
	suspense: true,
	ssr: false,
	// loading: () => <LoadingOverlay visible />,
})

const Page: NextPageWithLayout = () => <Content />

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
