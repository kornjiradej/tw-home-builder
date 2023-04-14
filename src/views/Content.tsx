import {
	Home,
	SectionOne,
	SectionTwo,
	// SectionThree,
	// SectionFour,
	// SectionFive,
} from '@/components'
import { LoadingOverlay } from '@mantine/core'
import { Suspense } from 'react'

const Content = () => {
	return (
		<Suspense fallback={<LoadingOverlay visible />}>
			<Home />
			<SectionOne />
			<SectionTwo />
			{/* <SectionThree /> */}
			{/* <SectionFour /> */}
			{/* <SectionFive /> */}
		</Suspense>
	)
}

export default Content
