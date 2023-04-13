import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { PortfolioDetail } from '@/components'

const PortfolioIDPage: NextPage = () => {
	return (
		<Layout>
			<PortfolioDetail />
		</Layout>
	)
}

export default PortfolioIDPage
