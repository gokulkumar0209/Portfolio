import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import DotGroup from "./components/DotGroup";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
	// const [selectedPage, setSelectedPage] = useState("home");
	const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
	// const [isTopOfPage, setIsTopOfPage] = useState(true);

	// useEffect(() => {
	// 	// eslint-disable-next-line
	// 	const handleScroll = () => {
	// 		if (window.scrollY === 0) {
	// 			setIsTopOfPage(true);
	// 		}
	// 		if (window.scrollY !== 0) {
	// 			setIsTopOfPage(false);
	// 		}
	// 		window.addEventListener("scroll", handleScroll);
	// 		return () => window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<div className="app bg-deep-blue">
			<Navbar />
			<Landing/>
			<LineGradient />
			<MySkills />
			<Projects />
			<LineGradient />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
