export default function ActionSection() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-light text-neutral-800 mb-6 tracking-tight">
						Join the Recognition
					</h2>
					<p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
						Be part of celebrating excellence by either evaluating outstanding achievements or nominating
						deserving candidates
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Judge Registration */}
					<div className="group relative">
						<div className="bg-gradient-to-br from-neutral-50 to-stone-100 p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all duration-300 hover:shadow-xl">
							<div className="mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-light text-neutral-800 mb-3">Become a Judge</h3>
								<p className="text-neutral-600 font-light leading-relaxed mb-6">
									Join our esteemed panel of experts and help evaluate submissions across various
									categories. Shape the future of excellence recognition. <br />
								</p>
							</div>

							<ul className="space-y-3 mb-8 text-neutral-600 font-light">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Expert evaluation process
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Industry recognition
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-green-500 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Exclusive access to events
								</li>
							</ul>

							<button className="w-full bg-neutral-800 text-white py-3 px-6 rounded-full font-light hover:bg-neutral-700 transition-colors duration-300 group-hover:bg-blue-600">
								Register as Judge
							</button>
						</div>
					</div>

					{/* Nomination */}
					<div className="group relative">
						<div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-8 rounded-2xl border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl">
							<div className="mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mb-4">
									<svg
										className="w-8 h-8 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
										/>
									</svg>
								</div>
								<h3 className="text-2xl font-light text-neutral-800 mb-3">Submit Nomination</h3>
								<p className="text-neutral-600 font-light leading-relaxed mb-6">
									Recognize outstanding individuals or organizations who deserve acknowledgment for
									their exceptional contributions and achievements.
								</p>
							</div>

							<ul className="space-y-3 mb-8 text-neutral-600 font-light">
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-amber-600 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Multiple categories available
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-amber-600 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Simple submission process
								</li>
								<li className="flex items-center">
									<svg
										className="w-4 h-4 text-amber-600 mr-3"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
									Expert evaluation guaranteed
								</li>
							</ul>

							<button className="w-full bg-neutral-800 text-white py-3 px-6 rounded-full font-light hover:bg-neutral-700 transition-colors duration-300 group-hover:bg-amber-600">
								Submit Nomination
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
