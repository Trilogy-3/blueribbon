export default function AwardCategories() {
	const categories = [
		{
			number: "1",
			title: "Honorary Doctorate",
			icon: "🏛️",
			description:
				"For lifelong excellence in fields such as science, philosophy, global diplomacy, education, art, and humanitarian leadership. Conferred under royal and academic review this is a symbol of global intellectual distinction.",
			color: "from-amber-500 to-yellow-600",
			badge: "Most Prestigious",
		},
		{
			number: "2",
			title: "Blue Ribbon Maha Shree Award",
			icon: "🌟",
			description:
				"For global visionaries whose leadership or innovation has created national or international-scale impact in governance, social reform, or business ethics.",
			color: "from-blue-500 to-indigo-600",
			badge: "Global Impact",
		},
		{
			number: "3",
			title: "Blue Ribbon Shree Shree Award",
			icon: "🌱",
			description:
				"For changemakers driving community development, environmental leadership, women's empowerment, and grassroots transformation.",
			color: "from-emerald-500 to-teal-600",
			badge: "Community Leaders",
		},
		{
			number: "4",
			title: "Blue Ribbon Shree Award",
			icon: "🚀",
			description:
				"For rising trailblazers making a mark in entrepreneurship, education, arts, or technology—symbolizing emerging excellence with global promise.",
			color: "from-purple-500 to-violet-600",
			badge: "Rising Stars",
		},
	]

	return (
		<section className="relative min-h-screen py-20 overflow-hidden">
			{/* Video Background */}
			<div className="absolute inset-0 z-0">
				<video autoPlay muted loop playsInline className="w-full h-full object-cover">
					<source src="/bg2.mp4" type="video/mp4" />
				</video>
			</div>

			{/* Light Overlay for Readability */}
			<div className="absolute inset-0 bg-black/30 z-10"></div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-20">
				<div className="absolute top-20 left-10 w-3 h-3 bg-amber-400/30 rounded-full animate-pulse"></div>
				<div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce"></div>
				<div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-400/20 rounded-full animate-ping"></div>
				<div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400/35 rounded-full animate-pulse"></div>
			</div>

			{/* Main Content */}
			<div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-xl border border-white/50 rounded-full px-6 py-2 mb-8">
						<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
						<span className="text-sm font-bold text-white tracking-wide uppercase">Award Categories</span>
					</div>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
						Blue Ribbon Award
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mt-2">
							Categories
						</span>
					</h2>

					<p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
						Four prestigious levels of recognition, from emerging excellence to lifetime achievement,
						honoring global visionaries and changemakers.
					</p>
				</div>

				{/* Categories - Horizontal scroll on mobile, grid on larger screens */}
				<div className="mb-16">
					{/* Mobile: Horizontal Scrolling */}
					<div className="sm:hidden">
						<div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
							{categories.map((category, index) => (
								<div
									key={index}
									className="group relative bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 min-w-[320px] snap-center">
									{/* Number Badge */}
									<div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20">
										<span className="text-lg font-black text-white">{category.number}</span>
									</div>

									{/* Badge */}
									<div className="absolute -top-2 -right-2">
										<div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/50">
											<span className="text-xs font-bold text-neutral-700">{category.badge}</span>
										</div>
									</div>

									{/* Category Icon */}
									<div className="text-4xl mb-4 mt-4 transform group-hover:scale-110 transition-transform duration-300">
										{category.icon}
									</div>

									{/* Category Title */}
									<h3 className="text-xl font-bold text-white mb-3 leading-tight">
										{category.title}
									</h3>

									{/* Category Description */}
									<p className="text-white/80 text-sm leading-relaxed mb-4">{category.description}</p>

									{/* Gradient Border */}
									<div
										className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

									{/* Floating Background Gradient */}
									<div
										className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
								</div>
							))}
						</div>

						{/* Swipe Indicator */}
						<div className="flex justify-center mt-4">
							<p className="text-white/60 text-xs font-medium flex items-center">
								<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M7 16l-4-4m0 0l4-4m-4 4h18"
									/>
								</svg>
								Swipe to explore categories
								<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</p>
						</div>
					</div>

					{/* Desktop: Grid Layout */}
					<div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{categories.map((category, index) => (
							<div
								key={index}
								className="group relative bg-white/20 backdrop-blur-xl border border-white/40 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
								{/* Number Badge */}
								<div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/20">
									<span className="text-lg font-black text-white">{category.number}</span>
								</div>

								{/* Badge */}
								<div className="absolute -top-2 -right-2">
									<div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 border border-white/50">
										<span className="text-xs font-bold text-neutral-700">{category.badge}</span>
									</div>
								</div>

								{/* Category Icon */}
								<div className="text-4xl mb-4 mt-4 transform group-hover:scale-110 transition-transform duration-300">
									{category.icon}
								</div>

								{/* Category Title */}
								<h3 className="text-xl font-bold text-white mb-3 leading-tight">{category.title}</h3>

								{/* Category Description */}
								<p className="text-white/80 text-sm leading-relaxed mb-4">{category.description}</p>

								{/* Gradient Border */}
								<div
									className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>

								{/* Floating Background Gradient */}
								<div
									className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
							</div>
						))}
					</div>
				</div>

				{/* Award Evaluation Process */}
				<div className="mb-16">
					<div className="bg-gradient-to-r from-white/15 via-white/25 to-white/15 backdrop-blur-xl rounded-2xl border border-white/40 p-8 max-w-5xl mx-auto">
						<div className="text-center mb-8">
							<div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-900 font-black text-lg px-6 py-2 rounded-lg mb-4 uppercase tracking-wide">
								Award Evaluation
							</div>
							<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
								Rigorous Assessment Process
							</h3>
						</div>

						<div className="grid md:grid-cols-2 gap-8 mb-8">
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
								<h4 className="text-xl font-bold text-white mb-3 flex items-center">
									<span className="text-2xl mr-3">🏛️</span>
									Expert Evaluation
								</h4>
								<p className="text-white/80 leading-relaxed">
									Nomination-based and jury-evaluated with expert input from international scholars,
									leaders, and cultural institutions, ensuring transparency, merit, and neutrality.
								</p>
							</div>

							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
								<h4 className="text-xl font-bold text-white mb-3 flex items-center">
									<span className="text-2xl mr-3">🌏</span>
									Cultural Programs
								</h4>
								<p className="text-white/80 leading-relaxed">
									Award winners receive priority facilitation for cultural and spiritual programs
									across South and Southeast Asian countries (Pakistan excluded).
								</p>
							</div>
						</div>

						<div className="text-center bg-white/5 rounded-xl p-6 border border-white/10">
							<p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
								Each category represents a pinnacle of achievement, with awards ranging from emerging
								excellence to lifetime recognition of extraordinary contributions to humanity.
							</p>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<div className="bg-gradient-to-r from-white/15 via-white/25 to-white/15 backdrop-blur-xl rounded-2xl border border-white/40 p-8 max-w-4xl mx-auto">
						<h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
							Ready to Nominate Excellence?
						</h3>
						<p className="text-white/90 text-lg mb-6 leading-relaxed">
							Submit nominations for visionary leaders who exemplify the highest standards of achievement
							in their respective fields.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 border border-amber-300/30">
								<span className="relative z-10 flex items-center justify-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									Submit Nomination
								</span>
							</button>

							<button className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg tracking-wide border border-white/40 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
								<span className="relative z-10 flex items-center justify-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									View Guidelines
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Statistics Banner */}
				<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="text-center bg-white/20 backdrop-blur-xl border border-white/40 rounded-xl p-6">
						<div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 mb-2">
							4
						</div>
						<div className="text-white/90 font-semibold text-sm uppercase tracking-wide">
							Award Categories
						</div>
					</div>

					<div className="text-center bg-white/20 backdrop-blur-xl border border-white/40 rounded-xl p-6">
						<div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">
							Global
						</div>
						<div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Recognition</div>
					</div>

					<div className="text-center bg-white/20 backdrop-blur-xl border border-white/40 rounded-xl p-6">
						<div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
							Lifetime
						</div>
						<div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Excellence</div>
					</div>

					<div className="text-center bg-white/20 backdrop-blur-xl border border-white/40 rounded-xl p-6">
						<div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 mb-2">
							Royal
						</div>
						<div className="text-white/90 font-semibold text-sm uppercase tracking-wide">Endorsement</div>
					</div>
				</div>
			</div>
		</section>
	)
}
