import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import AwardCategories from "./components/AwardCategories"
import AwardBenefits from "./components/AwardBenefits"
import UpcomingEvents from "./components/UpcomingEvents"
import Nominees from "./components/Nominees"
import ActionSection from "./components/ActionSection"
import FeaturesSection from "./components/FeaturesSection"
import Footer from "./components/Footer"

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<AboutUs />
			<AwardCategories />
			<AwardBenefits />
			<UpcomingEvents />
			<Nominees />
			<ActionSection />
			<FeaturesSection />
			<Footer />
		</>
	)
}
