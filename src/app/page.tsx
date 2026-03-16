import Layout from '../app/layout'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Navbar } from '@/components/Navbar/Navbar';
import { Landingpage } from '@/components/Landingpage/Landingpage';
import { CiLocationOn } from "react-icons/ci";

export default function MainPage() {
	let iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [FaGithub, CiLinkedin, CiLocationOn];
	const pageSectionNames: string[] = ["Landingpage", "About", "Skills", "Projects", "Contact"];

	return (
		<Layout>
			<Navbar pageSectionNames={pageSectionNames} iconsArray={iconsArray} />
			<Landingpage iconsArray={iconsArray} />
		</Layout>
	)
}
