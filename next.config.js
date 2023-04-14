const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	let nextConfig = {
		/* config options here */
		reactStrictMode: true,
		env: {
			basePath: 'tw-home-builder',
		},
	}
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		nextConfig = {
			/* development only config options here */
			...nextConfig,
			env: {
				basePath: '',
			},
		}
	}

	return nextConfig
}
