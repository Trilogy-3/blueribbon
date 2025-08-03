export default function AboutUs() {
	return (
		<section className="py-20 bg-gradient-to-br from-neutral-50 via-stone-100 to-amber-50 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-10 right-20 w-3 h-3 bg-amber-300/20 rounded-full animate-bounce"></div>
				<div className="absolute bottom-20 left-10 w-2 h-2 bg-neutral-300/30 rounded-full animate-pulse"></div>
				<div className="absolute top-1/2 left-1/4 w-1 h-1 bg-amber-400/40 rounded-full animate-ping"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					{/* Section Header */}
					<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200/50 rounded-full px-6 py-2 mb-8">
						<div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
						<span className="text-sm font-bold text-neutral-800 tracking-wide uppercase">
							About BlueRibbon
						</span>
					</div>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
						Celebrating Excellence
						<span className="block text-3xl sm:text-4xl lg:text-5xl text-amber-600 mt-2">
							Since Day One
						</span>
					</h2>

					<p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-light">
						BlueRibbon Awards represents the pinnacle of recognition across industries, honoring those who
						push boundaries and set new standards of excellence.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
					{/* Left Content */}
					<div>
						<h3 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6 leading-tight">
							Our Mission & Vision
						</h3>

						<div className="space-y-6">
							<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-lg">
								<h4 className="text-xl font-bold text-neutral-800 mb-3 flex items-center">
									<div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
									Mission
								</h4>
								<p className="text-neutral-600 leading-relaxed">
									To identify, celebrate, and amplify outstanding achievements that inspire innovation
									and drive positive change across all sectors of society.
								</p>
							</div>

							<div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-lg">
								<h4 className="text-xl font-bold text-neutral-800 mb-3 flex items-center">
									<div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
									Vision
								</h4>
								<p className="text-neutral-600 leading-relaxed">
									To become the world's most trusted platform for recognizing excellence, where being
									honored represents the highest standard of achievement.
								</p>
							</div>
						</div>
					</div>

					{/* Right Content - Stats */}
					<div className="grid grid-cols-2 gap-6">
						<div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 text-center border border-amber-200/50 shadow-lg">
							<div className="text-4xl sm:text-5xl font-black text-amber-700 mb-3">10+</div>
							<div className="text-neutral-700 font-semibold uppercase tracking-wide text-sm">
								Years of Excellence
							</div>
						</div>

						<div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center border border-blue-200/50 shadow-lg">
							<div className="text-4xl sm:text-5xl font-black text-blue-700 mb-3">150+</div>
							<div className="text-neutral-700 font-semibold uppercase tracking-wide text-sm">
								Countries Reached
							</div>
						</div>

						<div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 text-center border border-green-200/50 shadow-lg">
							<div className="text-4xl sm:text-5xl font-black text-green-700 mb-3">5000+</div>
							<div className="text-neutral-700 font-semibold uppercase tracking-wide text-sm">
								Winners Honored
							</div>
						</div>

						<div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl p-8 text-center border border-purple-200/50 shadow-lg">
							<div className="text-4xl sm:text-5xl font-black text-purple-700 mb-3">200+</div>
							<div className="text-neutral-700 font-semibold uppercase tracking-wide text-sm">
								Expert Judges
							</div>
						</div>
					</div>
				</div>

				{/* Values Section */}
				<div className="text-center">
					<h3 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-12">Our Core Values</h3>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-lg group hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
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
							</div>
							<h4 className="text-xl font-bold text-neutral-800 mb-4">Integrity</h4>
							<p className="text-neutral-600 leading-relaxed">
								We maintain the highest standards of fairness and transparency in our evaluation
								process.
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-lg group hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-bold text-neutral-800 mb-4">Innovation</h4>
							<p className="text-neutral-600 leading-relaxed">
								We celebrate breakthrough thinking and revolutionary approaches that shape the future.
							</p>
						</div>

						<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-lg group hover:shadow-xl transition-all duration-300">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h4 className="text-xl font-bold text-neutral-800 mb-4">Community</h4>
							<p className="text-neutral-600 leading-relaxed">
								We foster connections and collaborations that amplify positive impact worldwide.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
