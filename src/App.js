import Contact from "./components/Contact";
import DotGroup from "./components/DotGroup";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./components/MySkills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
		<main className="app bg-deep-blue">
			<Navbar />
			<Landing />
			<LineGradient />
			<MySkills />
			<Experience />
			<Projects />
			<LineGradient />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;
