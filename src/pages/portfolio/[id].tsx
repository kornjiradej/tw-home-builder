import { NextPage } from 'next'
import { Suspense } from 'react'
import { LoadingOverlay } from '@mantine/core'
import dynamic from 'next/dynamic'

const Detail = dynamic(() => import('@/components/Portfolio/detail'), {
	suspense: true,
	ssr: false,
	loading: () => <LoadingOverlay visible />,
})

const PortfolioIDPage: NextPage = () => {
	return (
		<Suspense fallback={<LoadingOverlay visible={true} />}>
			<Detail />
		</Suspense>
	)
}

export default PortfolioIDPage
