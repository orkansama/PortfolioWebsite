import "./style/navbarStyle.css"
import { IconWrapperProperties } from '../../types/IconWrapperProperties'

let iconSize: number = 30

interface NavbarProps {
	pageSectionNames: string[]
	iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[]
}

export function Navbar({ pageSectionNames, iconsArray }: NavbarProps) {
	let githubIcon: IconWrapperProperties = {
		icon: iconsArray[0],
		name: "githubIcon",
		size: iconSize
	}

	let linkedinIcon: IconWrapperProperties = {
		icon: iconsArray[1],
		name: "linkedinIcon",
		size: iconSize
	}

	return (
		<div className="boxArround-tab-nav-container">
			<div className="tab-nav-container">
				<div>
					<li className='liTableCell'>
						<a className='hyperlink' href="#">
							<githubIcon.icon width={githubIcon.size} />.
						</a>
					</li>
					<li className='liTableCell'>
						<a className='hyperlink' href="#">
							<linkedinIcon.icon width={linkedinIcon.size} />
						</a>
					</li>
				</div>
				<div>
					{pageSectionNames.map((element, index) => (
						<li key={index} className='liTableCell'>
							<a className='hyperlink' href="#">{element}</a>
						</li>
					))}
				</div>
			</div>
		</div>
	)
}