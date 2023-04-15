import { Home, SectionOne, SectionTwo } from '@/components'
import { LoadingOverlay } from '@mantine/core'
import { Suspense } from 'react'
import { Layout } from '@/components/layouts'

const Content = () => {
	return (
		<Suspense fallback={<LoadingOverlay visible />}>
			<Layout>
				<Home />
				<SectionOne />
				<SectionTwo />
			</Layout>
		</Suspense>
	)
}

export default Content
