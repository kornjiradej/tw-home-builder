import { NextPage } from 'next'
import { Layout } from '@/components/layouts'
import { ContactContent } from '@/components'

const ContactPage: NextPage = () => {
	return (
		<Layout footer={{ showContact: false }}>
			<ContactContent />
		</Layout>
	)
}

export default ContactPage
