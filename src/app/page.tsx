import Layout from '../app/layout'
import { IconWrapperProperties } from '../types/IconWrapperProperties'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

let globalIconSize: number = 30
let githubIcon: IconWrapperProperties = {
  icon: FaGithub,
  name: "githubIcon",
  size: globalIconSize
}

let linkedinIcon: IconWrapperProperties = {
  icon: CiLinkedin,
  name: "linkedinIcon",
  size: globalIconSize
}

export default function MainPage() {
  let iconsArray: IconWrapperProperties[] = [githubIcon, linkedinIcon];
  const pageSectionNames: string[] = ["Landingpage", "About", "Skills", "Projects", "Contact"];
  return (
    <Layout>
      <div>Test</div>
    </Layout>
  )
}