import { useEffect } from "react"

export default function SplashScreen() {
	// Restore scrolling when splash screen unmounts
	useEffect(() => {
		// Cleanup function to restore scrolling when component unmounts
		return () => {
			document.body.style.overflowY = "auto"
		}
	}, [])

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-stone-100 via-neutral-50 to-amber-50">
			{/* Background overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-neutral-500/10"></div>

			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/30 rounded-full animate-pulse"></div>
				<div className="absolute top-60 right-20 w-3 h-3 bg-neutral-300/40 rounded-full animate-bounce"></div>
				<div className="absolute bottom-40 left-1/4 w-1 h-1 bg-amber-400/50 rounded-full animate-ping"></div>
				<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-stone-300/35 rounded-full animate-pulse"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 text-center">
				{/* Logo/Brand */}
				<div className="mb-8">
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 tracking-tight leading-tight mb-2">
						BlueRibbon
					</h1>
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-600/80 tracking-wide uppercase">
						Excellence Awards
					</h2>
				</div>

				{/* Loading Animation */}
				<div className="flex flex-col items-center space-y-6">
					{/* Spinner */}
					<div className="relative w-16 h-16">
						<div className="absolute inset-0 rounded-full border-4 border-amber-200/30"></div>
						<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-500 animate-spin"></div>
						<div className="absolute inset-2 rounded-full border-2 border-transparent border-t-yellow-500 animate-spin animation-delay-150"></div>
					</div>

					{/* Loading Text */}
					<div className="space-y-2">
						<p className="text-lg font-semibold text-amber-700/90 animate-pulse">Loading Excellence...</p>
						<div className="flex space-x-1 justify-center">
							<div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce animation-delay-0"></div>
							<div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce animation-delay-150"></div>
							<div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce animation-delay-300"></div>
						</div>
					</div>
				</div>

				{/* Elegant decoration */}
				<div className="mt-8 flex justify-center">
					<div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
				</div>
			</div>

			{/* Additional styling classes for animation delays */}
			<style jsx>{`
				.animation-delay-150 {
					animation-delay: 150ms;
				}
				.animation-delay-300 {
					animation-delay: 300ms;
				}
			`}</style>
		</div>
	)
}
