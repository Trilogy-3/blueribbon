import { Geist, Geist_Mono, Fragment_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const fragmentMono = Fragment_Mono({
	variable: "--font-fragment-mono",
	subsets: ["latin"],
	weight: ["400"],
})

export const metadata = {
	title: {
		default: "BlueRibbon Excellence Awards 2024 | Celebrating Outstanding Achievements",
		template: "%s | BlueRibbon Awards",
	},
	description:
		"Celebrating outstanding achievements across industries. BlueRibbon Excellence Awards recognizes deserving candidates with 25+ categories, 50+ expert judges, and 500+ awards given. Nominate someone or become a judge today.",
	keywords: [
		"awards",
		"excellence awards",
		"industry recognition",
		"nominations",
		"judges",
		"achievement recognition",
		"professional awards",
		"BlueRibbon",
		"excellence",
		"outstanding performance",
		"industry leaders",
		"achievement celebration",
	],
	authors: [{ name: "BlueRibbon Awards" }],
	creator: "BlueRibbon Awards",
	publisher: "BlueRibbon Awards",
	category: "Awards and Recognition",
	classification: "Awards Platform",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://blueribbonawards.com",
		siteName: "BlueRibbon Excellence Awards",
		title: "BlueRibbon Excellence Awards 2024 | Celebrating Outstanding Achievements",
		description:
			"Celebrating outstanding achievements across industries. Nominate deserving candidates or join our expert panel of judges. 25+ categories, 50+ expert judges, 500+ awards given.",
		images: [
			{
				url: "/trophy.gif",
				width: 1200,
				height: 630,
				alt: "BlueRibbon Excellence Awards Trophy",
				type: "image/gif",
			},
			{
				url: "/logo4.png",
				width: 800,
				height: 600,
				alt: "BlueRibbon Awards Logo",
				type: "image/png",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@BlueRibbonAwards",
		creator: "@BlueRibbonAwards",
		title: "BlueRibbon Excellence Awards 2024 | Celebrating Outstanding Achievements",
		description:
			"Celebrating outstanding achievements across industries. Nominate deserving candidates or join our expert panel of judges.",
		images: ["/trophy.gif"],
	},
	verification: {
		// Add your verification codes here when ready
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// yahoo: "your-yahoo-verification-code",
		// other: "your-other-verification-code",
	},
	alternates: {
		canonical: "https://blueribbonawards.com",
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/trophy.gif", type: "image/gif", sizes: "32x32" },
		],
		apple: [{ url: "/trophy.gif", sizes: "180x180", type: "image/gif" }],
		other: [
			{
				rel: "mask-icon",
				url: "/trophy.gif",
				color: "#d4af37",
			},
		],
	},
	manifest: "/site.webmanifest",
	other: {
		"mobile-web-app-capable": "yes",
		"apple-mobile-web-app-capable": "yes",
		"apple-mobile-web-app-status-bar-style": "default",
		"apple-mobile-web-app-title": "BlueRibbon Awards",
		"application-name": "BlueRibbon Awards",
		"msapplication-TileColor": "#d4af37",
		"msapplication-TileImage": "/trophy.gif",
		"theme-color": "#d4af37",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${fragmentMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
