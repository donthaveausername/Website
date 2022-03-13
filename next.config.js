/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	basePath: process.env.NODE_ENV === 'production' ? '/Website' : '',
	pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.mdx/,
			use: [
				options.defaultLoaders.babel,
				{
					loader: '@mdx-js/loader',
					options: {},
				},
			],
		});

		return config;
	},
};

module.exports = nextConfig;
