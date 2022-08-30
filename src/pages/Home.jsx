import About from "../components/About/About";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Intro from "../components/Intro/Intro";
import Languages from "../components/Languages/Languages";
import Skills from "../components/Skills/Skills";

export default function Home () {
	return (
		<>
			<Intro></Intro>
			<About></About>
			<Education></Education>
			<Experience></Experience>
			<Skills />
			<Languages />
		</>
	)
}