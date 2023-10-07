/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "public-files.gumroad.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**"
			}
		],
		domains: [
			"wallpapercave.com",
			"res.cloudinary.com",
			"source.unsplash.com",
			"i.ibb.co",
			"th.bing.com",
			"www.google.com",
			"public-files.gumroad.com",
			"miro.medium.com",
			"developer.mozilla.org",
			"www.w3schools.com",
			"www.cloudflare.com",
			"*"
		]
	}
};

module.exports = nextConfig;
