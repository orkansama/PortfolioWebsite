import './style/landingpageStyle.css'

type LandingpageProp = {
    iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
};

export function Landingpage({ iconsArray }: LandingpageProp) {
    const scrollDown = "Scroll down for more information"
    const fancyText = "backend"

    return (
        <div id="landing-page">
            <div>
                <p className='text'>
                    Hi, im Orkan Gökcen and i do this whole
                    <span className='input'>
                        {fancyText}
                    </span>
                    thing
                </p>
                <div className='centerTextInDiv'>
                    <div className='subText'>
                        <p>{scrollDown}</p>
                    </div>
                    <div className='subText'>
                        <Location iconsArray={iconsArray} index={2} />
                    </div>
                </div>
            </div>
        </div>
    )
};

type LocationProps = {
    iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
    index: number;
};

function Location({ iconsArray, index }: LocationProps) {
    const Icon = iconsArray[index];
    return (
        <p>
            {Icon && <Icon />} Hannover
        </p>
    );
}