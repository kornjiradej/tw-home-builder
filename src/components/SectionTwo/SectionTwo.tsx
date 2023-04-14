import { LoadingOverlay } from '@mantine/core'
import { Suspense } from 'react'
import { PortfolioList } from '../Portfolio'

export const SectionTwo = () => {
	return (
		<Suspense fallback={<LoadingOverlay visible />}>
			<section id='section-two'>
				<PortfolioList />
			</section>
		</Suspense>
	)
}
