import { ReactElement, Suspense } from 'react'
import { LoadingOverlay } from '@mantine/core'
import type { NextPageWithLayout } from './_app'

import dynamic from 'next/dynamic'

const Content = dynamic(() => import('@/views/Content'), {
	suspense: true,
	ssr: false,
	loading: () => <LoadingOverlay visible />,
})

const Page: NextPageWithLayout = () => <Content />

const getLayout = (page: ReactElement) => (
	<Suspense fallback={<LoadingOverlay visible={true} />}>{page}</Suspense>
)

Page.getLayout = getLayout

export default Page
