import Image from "next/image"

export default function Header() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center space-x-8">
						<div className="relative h-8 sm:h-10 w-auto">
							<Image
								src="/logo4.png"
								alt="BlueRibbon Awards"
								height={40}
								width={120}
								className="object-contain drop-shadow-lg h-full w-auto"
								priority
							/>
						</div>
						<nav className="hidden md:flex space-x-8">
							<a
								href="#categories"
								className="header-text-adaptive transition-colors text-sm font-bold uppercase font-mono">
								Categories
							</a>
							<a
								href="#winners"
								className="header-text-adaptive transition-colors text-sm font-bold uppercase font-mono">
								Winners
							</a>
							<a
								href="#jury"
								className="header-text-adaptive transition-colors text-sm font-bold uppercase font-mono">
								Jury
							</a>
							<a
								href="#events"
								className="header-text-adaptive transition-colors text-sm font-bold uppercase font-mono">
								Events
							</a>
						</nav>
					</div>

					<div className="flex items-center space-x-4">
						<button className="header-text-adaptive transition-colors text-sm font-bold uppercase font-mono">
							Login
						</button>
						<button className="bg-white/20 backdrop-blur-sm header-text-adaptive px-6 py-2 rounded-full text-sm font-bold hover:bg-white/30 transition-colors border border-white/30 uppercase font-mono">
							Vote
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
