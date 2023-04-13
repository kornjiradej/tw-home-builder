import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { PortfolioList } from '@/components'

const PortfolioPage: NextPage = () => {
	return (
		<Layout>
			<PortfolioList />
		</Layout>
	)
}

export default PortfolioPage
