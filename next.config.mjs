/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static site generation for Firebase hosting
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
	
	// Environment variables
	env: {
		NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://oneqid.com',
	},
};

export default nextConfig;
