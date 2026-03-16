import Layout from '../app/layout'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Navbar } from '@/components/Navbar/Navbar';

export default function MainPage() {
	let iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[] = [FaGithub, CiLinkedin];
	const pageSectionNames: string[] = ["Landingpage", "About", "Skills", "Projects", "Contact"];

	return (
		<Layout>
			<Navbar pageSectionNames={pageSectionNames} iconsArray={iconsArray} />
		</Layout>
	)
}
