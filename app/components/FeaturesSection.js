export default function FeaturesSection() {
	const features = [
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			title: "Rigorous Evaluation",
			description:
				"Our expert panel ensures thorough and fair assessment of all nominations across diverse categories.",
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			title: "Global Recognition",
			description:
				"Winners receive worldwide acknowledgment and become part of an exclusive network of excellence.",
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
					/>
				</svg>
			),
			title: "Diverse Categories",
			description:
				"From innovation to leadership, we celebrate excellence across multiple fields and industries.",
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
			title: "Expert Panel",
			description:
				"Industry leaders and renowned experts form our distinguished jury, ensuring credible evaluations.",
		},
	]

	return (
		<section className="py-24 bg-gradient-to-br from-stone-50 via-neutral-50 to-slate-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6 tracking-tight">
						Excellence Redefined
					</h2>
					<p className="text-xl text-neutral-600 font-light max-w-3xl mx-auto leading-relaxed">
						BlueRibbon Awards represents the pinnacle of recognition, celebrating achievements that shape
						industries and inspire future generations
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div key={index} className="group text-center">
							<div className="mb-6 flex justify-center">
								<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border border-neutral-200 text-neutral-600 group-hover:text-neutral-800 group-hover:shadow-xl transition-all duration-300">
									{feature.icon}
								</div>
							</div>
							<h3 className="text-xl font-light text-neutral-800 mb-4 tracking-wide">{feature.title}</h3>
							<p className="text-neutral-600 font-light leading-relaxed">{feature.description}</p>
						</div>
					))}
				</div>

				{/* Stats Section */}
				<div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
					<div className="group">
						<div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2 group-hover:text-neutral-600 transition-colors">
							500+
						</div>
						<div className="text-neutral-600 font-light tracking-wide">Awards Distributed</div>
					</div>
					<div className="group">
						<div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2 group-hover:text-neutral-600 transition-colors">
							50+
						</div>
						<div className="text-neutral-600 font-light tracking-wide">Expert Judges</div>
					</div>
					<div className="group">
						<div className="text-4xl md:text-5xl font-light text-neutral-800 mb-2 group-hover:text-neutral-600 transition-colors">
							25+
						</div>
						<div className="text-neutral-600 font-light tracking-wide">Award Categories</div>
					</div>
				</div>
			</div>
		</section>
	)
}
