/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true, // Required for static export
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
			},
			{
				protocol: 'https',
				hostname: '**.oneqid.com',
			},
			{
				protocol: 'https',
				hostname: '**.strapiapp.com',
			},
		],
		// Enable AVIF format for better compression
		formats: ['image/avif', 'image/webp'],
		// Optimize images
		minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
	},
	
	// Compression and optimization
	compress: true,
	
	// Headers for SEO and security
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
			// Cache static assets
			{
				source: '/public/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			// Cache images
			{
				source: '/images/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},

	// Redirects for old URLs (if needed)
	async redirects() {
		return [
			// Add redirects here if you change URL structure
			// {
			//   source: '/old-url',
			//   destination: '/new-url',
			//   permanent: true,
			// },
		];
	},

	// Rewrites
	async rewrites() {
		return {
			beforeFiles: [
				// Add rewrites here if needed
			],
		};
	},

	// Internationalization support (optional)
	i18n: {
		locales: ['en-IN'],
		defaultLocale: 'en-IN',
	},

	// Environment variables
	env: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://oneqid.com',
	},
};

export default nextConfig;
