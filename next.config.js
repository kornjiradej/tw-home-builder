/**
 * @type {import('next').NextConfig}
 */

const { PHASE_PRODUCTION_SERVER } = require('next/constants')

let nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		basePath: '',
	},
}

module.exports = (phase) => {
	if (phase === PHASE_PRODUCTION_SERVER) {
		nextConfig.env.basePath = 'tw-home-builder'
	}
	return {
		nextConfig,
	}
}
