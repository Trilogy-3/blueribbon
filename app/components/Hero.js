"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import SplashScreen from "./SplashScreen"

export default function Hero() {
	const imgRef = useRef(null)
	const [imageLoaded, setImageLoaded] = useState(false)
	const [timerExpired, setTimerExpired] = useState(false)

	useEffect(() => {
		if (imgRef.current) {
			imgRef.current
				.decode()
				.then(() => {
					setImageLoaded(true)
				})
				.catch((error) => {
					setImageLoaded(true)
				})
		}
	}, [])

	// Timer to hide splash screen after 7 seconds maximum
	useEffect(() => {
		const timer = setTimeout(() => {
			setTimerExpired(true)
		}, 3500) // 7 seconds

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{!imageLoaded && !timerExpired && <SplashScreen />}
			<section className="h-screen bg-gradient-to-br from-stone-100 via-neutral-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
				{/* Background Video */}
				<div className="absolute inset-0 z-0">
					<video autoPlay muted loop playsInline className="w-full h-full object-cover blur-xs">
						<source src="/bg.mp4" type="video/mp4" />
					</video>
				</div>

				{/* Video Overlay for better text readability */}
				<div className="absolute inset-0 bg-black/10 z-10"></div>

				{/* Animated Background Elements */}
				<div className="absolute inset-0 z-20">
					<div className="absolute top-20 left-10 w-2 h-2 bg-amber-300/20 rounded-full animate-pulse"></div>
					<div className="absolute top-60 right-20 w-3 h-3 bg-neutral-300/30 rounded-full animate-bounce"></div>
					<div className="absolute bottom-40 left-1/4 w-1 h-1 bg-amber-400/40 rounded-full animate-ping"></div>
					<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-stone-300/25 rounded-full animate-pulse"></div>
				</div>

				{/* Elegant Gradient Overlays */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.06)_0%,transparent_60%)] z-20"></div>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,245,244,0.4)_0%,transparent_60%)] z-20"></div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 py-8">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
						{/* Left Column - Content */}
						<div className="text-center lg:text-left order-2 lg:order-1 flex flex-col justify-center">
							{/* Award Badge */}
							<div className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-300/60 rounded-full px-4 py-1.5 mb-4 shadow-xl w-full sm:w-fit sm:inline-flex sm:justify-start">
								<div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full animate-pulse shadow-lg"></div>
								<span className="text-sm font-bold text-white tracking-normal uppercase">
									Awards 2024
								</span>
							</div>

							{/* Main Headline */}
							<div className="mb-4">
								<div className="relative">
									<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-200 tracking-tight leading-[0.9] mb-2 drop-shadow-2xl">
										BlueRibbon
									</h1>
									<div className="absolute inset-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white/10 tracking-tight leading-[0.9] blur-sm">
										BlueRibbon
									</div>
								</div>
								<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-amber-300 tracking-wide leading-tight drop-shadow-lg uppercase">
									Excellence Awards
								</h2>
							</div>

							{/* Tagline */}
							<div className="mb-6 relative">
								<div className="bg-gradient-to-r from-white/10 via-amber-500/10 to-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-xl">
									<p className="text-lg sm:text-xl font-bold text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-lg">
										Celebrating outstanding achievements across industries.
									</p>
									<div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 my-2 mx-auto lg:mx-0"></div>
									<p className="text-base sm:text-lg text-white/90 font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
										Recognize deserving candidates or join our expert panel of judges.
									</p>
								</div>
							</div>

							{/* Primary CTAs */}
							<div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center lg:justify-start">
								<button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 border border-amber-300/30">
									<span className="relative z-10 flex items-center justify-center">
										<svg
											className="w-5 h-5 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
										Nominate Someone
									</span>
								</button>

								<button className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg tracking-wide border border-white/40 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
									<span className="relative z-10 flex items-center justify-center">
										<svg
											className="w-5 h-5 mr-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
										Become a Judge
									</span>
								</button>
							</div>

							{/* Key Features */}
							<div className="grid grid-cols-3 gap-5 max-w-md mx-auto lg:mx-0">
								<div className="text-center lg:text-left group">
									<div className="bg-gradient-to-br from-white/10 to-amber-500/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl h-18 flex flex-col justify-center">
										<div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-1 drop-shadow-lg">
											25+
										</div>
										<div className="text-xs text-white/90 font-bold uppercase tracking-wider">
											Categories
										</div>
									</div>
								</div>
								<div className="text-center lg:text-left group">
									<div className="bg-gradient-to-br from-white/10 to-amber-500/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl h-18 flex flex-col justify-center">
										<div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-1 drop-shadow-lg">
											50+
										</div>
										<div className="text-xs text-white/90 font-bold uppercase tracking-wider">
											Expert Judges
										</div>
									</div>
								</div>
								<div className="text-center lg:text-left group">
									<div className="bg-gradient-to-br from-white/10 to-amber-500/20 backdrop-blur-sm rounded-xl p-3 border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl h-18 flex flex-col justify-center">
										<div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 mb-1 drop-shadow-lg">
											500+
										</div>
										<div className="text-xs text-white/90 font-bold uppercase tracking-wider">
											Awards Given
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Trophy Image */}
						<div className="relative order-1 lg:order-2 flex items-center justify-center lg:justify-end h-full hidden lg:flex">
							<div className="relative w-full max-w-lg lg:max-w-2xl aspect-square flex items-center justify-center">
								{/* Trophy Image */}
								<div className="relative w-4/5 h-full">
									<Image
										src="/test.gif"
										alt="BlueRibbon Awards Trophy"
										fill
										className="object-contain transform hover:scale-105 transition-all duration-700"
										priority={true}
										ref={imgRef}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Bottom Section */}
					<div className="text-center mt-8 lg:mt-12">
						<div className="bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-sm rounded-xl py-4 px-6 border border-white/20">
							<p className="text-white/90 font-semibold mb-3 drop-shadow-md text-sm">
								Want to learn more about our evaluation process?
							</p>
							<button className="group relative px-4 py-1.5 bg-gradient-to-r from-white/20 to-white/10 text-white font-bold tracking-wide transition-all duration-300 rounded-lg border border-white/30 hover:bg-white/30 hover:scale-105 hover:shadow-lg text-sm">
								<span className="flex items-center justify-center">
									Explore Award Categories
									<svg
										className="w-3 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 z-30">
					<div className="flex flex-col items-center space-y-2 animate-bounce">
						<span className="text-xs font-bold tracking-wider uppercase">Scroll</span>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</div>
				</div>
			</section>
		</>
	)
}
