import Image from "next/image"

export default function Nominees() {
	const nominees = [
		{
			name: "Mr. Tanmay G Sengupta",
			title: "Writer Director",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/WhatsApp+Image+2025-08-01+at+16.19.38_109d331b.jpg",
			gradient: "from-blue-500 to-indigo-600",
			bgGradient: "from-blue-50 to-indigo-100",
		},
		{
			name: "Miss Meenakshi Dixit",
			title: "Artist",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/meenakshi_dixit_latest_stills_0802140422_065.jpg",
			gradient: "from-emerald-500 to-teal-600",
			bgGradient: "from-emerald-50 to-teal-100",
		},
		{
			name: "Mr. Harsha Bhogle",
			title: "Cricket Commentator",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/harsha.jpg",
			gradient: "from-purple-500 to-violet-600",
			bgGradient: "from-purple-50 to-violet-100",
		},
		{
			name: "Mr. Dnyandeo Yashwantrao Patil",
			title: "Governor of West Bengal",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/Shri_D.Y._Patil_(cropped%2C_3x4).jpg",
			gradient: "from-red-500 to-pink-600",
			bgGradient: "from-red-50 to-pink-100",
		},
		{
			name: "Dr.Ashok Chauhan",
			title: "Founder of Amity",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/dr.chauhan.jpg",
			gradient: "from-amber-500 to-orange-600",
			bgGradient: "from-amber-50 to-orange-100",
		},
		{
			name: "Mr. Papu Butani",
			title: "CEO of Butani Jewelry",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/butani.jpg",
			gradient: "from-cyan-500 to-blue-600",
			bgGradient: "from-cyan-50 to-blue-100",
		},
		{
			name: "Mr. Baba Kalyani",
			title: "MD of Bharat Forge",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/baba.webp",
			gradient: "from-violet-500 to-purple-600",
			bgGradient: "from-violet-50 to-purple-100",
		},
		{
			name: "Dr. Subodh Varshney",
			title: "Medical Director and Incharge",
			image: "https://blueribbonawards.s3.ap-southeast-1.amazonaws.com/subodh.png",
			gradient: "from-pink-500 to-rose-600",
			bgGradient: "from-pink-50 to-rose-100",
		},
	]

	return (
		<section className="relative py-20 bg-gradient-to-br from-neutral-50 via-stone-100 to-amber-50 overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 right-10 w-4 h-4 bg-amber-400/20 rounded-full animate-bounce"></div>
				<div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
				<div className="absolute top-1/2 right-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-ping"></div>
				<div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-emerald-500/25 rounded-full animate-bounce"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-300/50 rounded-full px-6 py-2 mb-8">
						<div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
						<span className="text-sm font-bold text-neutral-800 tracking-wide uppercase">
							2024 Nominees
						</span>
					</div>

					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-tight mb-6">
						Meet the
						<span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 mt-2">
							Exceptional Nominees
						</span>
					</h2>

					<p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-light">
						Celebrating visionary leaders and innovators who are shaping the future and making extraordinary
						contributions to our world.
					</p>
				</div>

				{/* Nominees Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
					{nominees.map((nominee, index) => (
						<div
							key={index}
							className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
							{/* Nominee Image */}
							<div className="h-48 sm:h-56 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
								{/* Actual Profile Image */}
								<Image
									src={nominee.image}
									alt={nominee.name}
									fill
									className="object-contain group-hover:scale-105 transition-transform duration-500"
									sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
								/>

								{/* Gradient Overlay */}
								<div
									className={`absolute inset-0 bg-gradient-to-t ${nominee.bgGradient} opacity-30 group-hover:opacity-20 transition-opacity duration-300`}></div>

								{/* Floating decorative elements */}
								<div className="absolute top-4 left-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
								<div className="absolute top-6 right-6 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
								<div className="absolute bottom-6 left-6 w-2 h-2 bg-white/50 rounded-full animate-ping"></div>
							</div>

							{/* Nominee Info */}
							<div className="p-4 sm:p-6 text-center">
								<h3 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2 leading-tight group-hover:text-neutral-900 transition-colors">
									{nominee.name}
								</h3>
								<p
									className={`text-sm sm:text-base font-semibold bg-gradient-to-r ${nominee.gradient} bg-clip-text text-transparent leading-relaxed`}>
									{nominee.title}
								</p>
							</div>

							{/* Gradient border on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${nominee.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>

							{/* Subtle glow effect */}
							<div
								className={`absolute inset-0 bg-gradient-to-r ${nominee.gradient} opacity-0 group-hover:opacity-5 blur-xl rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl mb-16">
					<div className="inline-block bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 font-black text-lg px-6 py-2 rounded-lg mb-6 uppercase tracking-wide">
						Global Impact
					</div>

					<h3 className="text-2xl sm:text-3xl font-bold mb-8 leading-tight">Nominees Making a Difference</h3>

					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-3xl sm:text-4xl font-black text-amber-400 mb-2">500+</div>
							<div className="text-white/80 font-semibold text-sm uppercase tracking-wide">
								Total Nominees
							</div>
						</div>

						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-3xl sm:text-4xl font-black text-blue-400 mb-2">45</div>
							<div className="text-white/80 font-semibold text-sm uppercase tracking-wide">Countries</div>
						</div>

						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-2">25</div>
							<div className="text-white/80 font-semibold text-sm uppercase tracking-wide">
								Categories
							</div>
						</div>

						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
							<div className="text-3xl sm:text-4xl font-black text-purple-400 mb-2">100M+</div>
							<div className="text-white/80 font-semibold text-sm uppercase tracking-wide">
								Lives Impacted
							</div>
						</div>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center">
					<div className="bg-gradient-to-r from-white/70 via-amber-50/80 to-white/70 backdrop-blur-sm rounded-2xl border border-amber-200/50 p-8 max-w-4xl mx-auto shadow-xl">
						<h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 mb-4">Discover More Stories</h3>
						<p className="text-neutral-600 text-lg mb-6 leading-relaxed">
							Each nominee represents excellence, innovation, and positive impact. Explore their full
							stories and achievements.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 border border-amber-300/30">
								<span className="relative z-10 flex items-center justify-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									View All Nominees
								</span>
							</button>

							<button className="group relative px-8 py-4 bg-white/80 backdrop-blur-md text-neutral-800 rounded-full font-bold text-lg tracking-wide border border-neutral-300 transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-xl">
								<span className="relative z-10 flex items-center justify-center">
									<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									Nominate Someone
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
