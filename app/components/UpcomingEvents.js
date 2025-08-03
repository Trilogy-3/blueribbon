export default function UpcomingEvents() {
	const criteria = [
		{
			number: "1",
			title: "Honorary Doctorate",
			description:
				"For lifelong excellence in fields such as science, philosophy, global diplomacy, education, art, and humanitarian leadership. Conferred under royal and academic review this is a symbol of global intellectual distinction.",
			type: "Highest Honor",
			icon: "🎓",
			gradient: "from-amber-500 to-yellow-600",
		},
		{
			number: "2",
			title: "Blue Ribbon Maha Shree Award",
			description:
				"For global visionaries whose leadership or innovation has created national or international-scale impact in governance, social reform, or business ethics.",
			type: "Leadership",
			icon: "🌟",
			gradient: "from-blue-500 to-cyan-600",
		},
		{
			number: "3",
			title: "Blue Ribbon Shree Shree Award",
			description:
				"For changemakers driving community development, environmental leadership, women's empowerment, and grassroots transformation.",
			type: "Community Impact",
			icon: "🌱",
			gradient: "from-green-500 to-emerald-600",
		},
		{
			number: "4",
			title: "Blue Ribbon Shree Award",
			description:
				"For rising trailblazers making a mark in entrepreneurship, education, arts, or technology—symbolizing emerging excellence with global promise.",
			type: "Emerging Excellence",
			icon: "🚀",
			gradient: "from-purple-500 to-indigo-600",
		},
	]

	const eventInfo = {
		date: "25",
		month: "October",
		year: "2024",
		time: "7:00 PM",
		location: "Birmingham Convention Centre, UK",
		title: "Grand Awards Ceremony",
	}

	return (
		<section className="relative py-20 bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-900 overflow-hidden">
			{/* Background Video */}
			<div className="absolute inset-0 z-0">
				<video autoPlay muted loop playsInline className="w-full h-full object-cover">
					<source src="/bg3.mp4" type="video/mp4" />
				</video>
			</div>

			{/* Animated Background Elements */}
			<div className="absolute inset-0 z-20">
				<div className="absolute top-20 left-10 w-3 h-3 bg-amber-400/20 rounded-full animate-pulse"></div>
				<div className="absolute top-60 right-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
				<div className="absolute bottom-40 left-1/4 w-4 h-4 bg-purple-400/25 rounded-full animate-ping"></div>
				<div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full px-6 py-2 mb-8">
						<div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
						<span className="text-sm font-bold text-white tracking-wide uppercase">Award Categories</span>
					</div>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
						Blue Ribbon
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mt-2">
							Award Categories
						</span>
					</h2>

					<p className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
						Four distinguished categories recognizing excellence, leadership, and innovation across various
						fields of human achievement.
					</p>
				</div>

				{/* Criteria Grid */}
				<div className="grid lg:grid-cols-2 gap-8 mb-16">
					{criteria.map((criterion, index) => (
						<div
							key={index}
							className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:bg-white/15 hover:scale-105 transition-all duration-300">
							{/* Criterion Header */}
							<div className="flex items-start justify-between mb-6">
								{/* Number Card */}
								<div
									className={`bg-gradient-to-r ${criterion.gradient} p-1 rounded-2xl shadow-lg flex-shrink-0`}>
									<div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center min-w-[100px]">
										<div
											className={`text-3xl font-black bg-gradient-to-r ${criterion.gradient} bg-clip-text text-transparent`}>
											{criterion.number}
										</div>
										<div className="text-neutral-600 font-bold text-xs uppercase">Category</div>
									</div>
								</div>

								{/* Criterion Icon and Type */}
								<div className="flex flex-col items-end">
									<span className="text-4xl mb-2">{criterion.icon}</span>
									<div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-white/30">
										<span
											className={`text-xs font-bold bg-gradient-to-r ${criterion.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
											{criterion.type}
										</span>
									</div>
								</div>
							</div>

							{/* Criterion Content */}
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-white leading-tight">{criterion.title}</h3>

								<p className="text-white/80 leading-relaxed">{criterion.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Event Date & Time Information */}
				<div className="bg-gradient-to-r from-white/15 via-white/25 to-white/15 backdrop-blur-xl rounded-3xl border border-white/30 p-8 lg:p-12 shadow-2xl">
					<div className="text-center mb-8">
						<div className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-900 font-black text-lg px-6 py-2 rounded-lg mb-6 uppercase tracking-wide">
							Event Information
						</div>

						<h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
							{eventInfo.title}
						</h3>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-4xl mb-4">📅</div>
							<h4 className="text-lg font-bold text-white mb-2">Event Date</h4>
							<p className="text-white/80 text-sm">
								{eventInfo.date} {eventInfo.month}, {eventInfo.year}
							</p>
						</div>

						<div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-4xl mb-4">🕰️</div>
							<h4 className="text-lg font-bold text-white mb-2">Event Time</h4>
							<p className="text-white/80 text-sm">{eventInfo.time}</p>
						</div>

						<div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-4xl mb-4">📍</div>
							<h4 className="text-lg font-bold text-white mb-2">Location</h4>
							<p className="text-white/80 text-sm">{eventInfo.location}</p>
						</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="text-center mt-16">
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 border border-amber-300/30">
							<span className="relative z-10 flex items-center justify-center">
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
								Apply for Nomination
							</span>
						</button>

						<button className="group relative px-8 py-4 bg-white/20 backdrop-blur-md text-white rounded-full font-bold text-lg tracking-wide border border-white/40 transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-xl">
							<span className="relative z-10 flex items-center justify-center">
								<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
									/>
								</svg>
								Learn More
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
