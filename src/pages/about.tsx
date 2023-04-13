import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { AboutContent } from '@/components/About'

const AboutPage: NextPage = () => {
	return (
		<Layout>
			<AboutContent />
		</Layout>
	)
}

export default AboutPage
