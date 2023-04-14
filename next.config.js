/**
 * @type {import('next').NextConfig}
 */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

let nextConfig = {
	/* config options here */
	reactStrictMode: true,
	env: {
		basePath: PHASE_DEVELOPMENT_SERVER ? '' : 'tw-home-builder',
	},
}

module.exports = nextConfig
