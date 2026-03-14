import "./style/navbarStyle.css"
import { IconWrapperProperties } from '../../types/IconWrapperProperties'

let iconSize: number = 30
export function Navbar(
    pageSectionNames: string[],
    iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[]
) {
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
        <div className="tab-nav-container">
            <li className='liTableCell'><a className='hyperlink' href="#">{githubIcon.icon}</a></li>
            <li className='liTableCell'><a className='hyperlink' href="#">{linkedinIcon}</a></li>
            {pageSectionNames.map((element, index) => (
                <li key={index} className='liTableCell'>
                    <a className='hyperlink' href="#">{element}</a>
                </li>
            ))}
        </div>
    )
}