export default function AwardBenefits() {
	const benefits = [
		{
			number: "1",
			title: "Wellness for Life",
			subtitle: "5 Million Stem Cell Therapy Package",
			description:
				"Each Awardee will receive a 5 Million Stem Cell Therapy Package, fully sponsored, for advanced regenerative health and wellness.",
			icon: "🧬",
			gradient: "from-emerald-500 to-teal-600",
			bgGradient: "from-emerald-500/20 to-teal-600/20",
		},
		{
			number: "2",
			title: "Gift of Brilliance",
			subtitle: "1-Carat Diamond",
			description:
				"Diamond Men and Women Honorees will receive a 1-Carat Diamond. Timeless symbols of recognition and excellence.",
			icon: "💎",
			gradient: "from-blue-500 to-indigo-600",
			bgGradient: "from-blue-500/20 to-indigo-600/20",
		},
		{
			number: "3",
			title: "Legacy Asset in the UK",
			subtitle: "250 sq. ft. Premium Land",
			description:
				"Jury recommended recipient will be granted 250 sq. ft. of land in Birmingham, UK prime location where they can develop High-Tech Glamping Pod, list them on Airbnb, ensuring lifetime passive income.",
			icon: "🏡",
			gradient: "from-amber-500 to-orange-600",
			bgGradient: "from-amber-500/20 to-orange-600/20",
		},
	]

	return (
		<section className="relative py-20 bg-gradient-to-br from-neutral-50 via-stone-100 to-amber-50 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 right-10 w-4 h-4 bg-amber-400/20 rounded-full animate-bounce"></div>
				<div className="absolute bottom-20 left-10 w-3 h-3 bg-emerald-400/30 rounded-full animate-pulse"></div>
				<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-ping"></div>
				<div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-amber-500/25 rounded-full animate-bounce"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-300/50 rounded-full px-6 py-2 mb-8">
						<div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
						<span className="text-sm font-bold text-neutral-800 tracking-wide uppercase">
							Exclusive Privileges
						</span>
					</div>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
						Award Winner
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 mt-2">
							Benefits & Privileges
						</span>
					</h2>

					<p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-light">
						Beyond recognition, our award winners receive life-changing benefits worth millions, creating
						lasting impact and generational wealth.
					</p>
				</div>

				{/* Benefits Grid */}
				<div className="grid lg:grid-cols-3 gap-8 mb-16">
					{benefits.map((benefit, index) => (
						<div
							key={index}
							className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-neutral-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
							{/* Number Badge */}
							<div
								className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-full flex items-center justify-center shadow-lg`}>
								<span className="text-white font-black text-xl">{benefit.number}</span>
							</div>

							{/* Benefit Icon */}
							<div className="text-6xl mb-6 mt-4 text-center transform group-hover:scale-110 transition-transform duration-300">
								{benefit.icon}
							</div>

							{/* Benefit Content */}
							<div className="text-center">
								<h3 className="text-2xl font-bold text-neutral-800 mb-2 leading-tight">
									{benefit.title}
								</h3>

								<div
									className={`inline-block px-4 py-1 bg-gradient-to-r ${benefit.bgGradient} rounded-full mb-4`}>
									<p
										className={`text-sm font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent uppercase tracking-wide`}>
										{benefit.subtitle}
									</p>
								</div>

								<p className="text-neutral-600 leading-relaxed text-base">{benefit.description}</p>
							</div>

							{/* Decorative gradient overlay */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
						</div>
					))}
				</div>

				{/* Evaluation Process Section */}
				<div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
					<div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 font-black text-lg px-6 py-2 rounded-lg mb-6 uppercase tracking-wide">
						Evaluation Process
					</div>

					<h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">International Jury Selection</h3>

					<div className="max-w-4xl mx-auto">
						<p className="text-lg text-neutral-200 leading-relaxed mb-8">
							An international jury selects the Blue Ribbon Award recipients, an honor designed to
							identify and celebrate those brilliant individuals whose groundbreaking contributions have
							set new benchmarks in the development of emerging economies. The Blue Ribbon initiative
							actively seeks out innovative entrepreneurs who are passionately dedicated to molding the
							future of our global landscape.
						</p>

						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<p className="text-base text-neutral-300 leading-relaxed">
								<strong className="text-white">Hosted by the Sramram Group of Companies</strong> on
								behalf of the Asian continent, this award champions excellence across the international
								communities globally.
							</p>

							<div className="mt-4 pt-4 border-t border-white/20">
								<p className="text-sm text-amber-300 font-semibold">
									** Selection for Award is the International jury's decision solely.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Stats Section */}
				<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="text-center bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
						<div className="text-3xl sm:text-4xl font-black text-emerald-700 mb-2">$5M+</div>
						<div className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
							Health Package Value
						</div>
					</div>

					<div className="text-center bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
						<div className="text-3xl sm:text-4xl font-black text-blue-700 mb-2">1 Carat</div>
						<div className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
							Premium Diamond
						</div>
					</div>

					<div className="text-center bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
						<div className="text-3xl sm:text-4xl font-black text-amber-700 mb-2">250 sq ft</div>
						<div className="text-amber-600 font-semibold text-sm uppercase tracking-wide">
							UK Prime Land
						</div>
					</div>

					<div className="text-center bg-gradient-to-br from-purple-100 to-violet-100 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
						<div className="text-3xl sm:text-4xl font-black text-purple-700 mb-2">Lifetime</div>
						<div className="text-purple-600 font-semibold text-sm uppercase tracking-wide">
							Passive Income
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-16">
					<div className="bg-gradient-to-r from-white/70 via-amber-50/80 to-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/50 p-8 max-w-4xl mx-auto shadow-xl">
						<h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4">
							Ready to Transform Lives?
						</h3>
						<p className="text-neutral-600 text-lg mb-6 leading-relaxed">
							Nominate exceptional individuals who deserve these life-changing benefits and global
							recognition.
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

							<button className="group relative px-8 py-4 bg-white/80 backdrop-blur-md text-neutral-800 rounded-full font-bold text-lg tracking-wide border border-neutral-300 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl">
								<span className="relative z-10 flex items-center justify-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									Learn Selection Process
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
