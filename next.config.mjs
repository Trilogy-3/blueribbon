/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "blueribbonawards.s3.ap-southeast-1.amazonaws.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
