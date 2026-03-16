type LandingpageProp = {
    iconsArray: React.ComponentType<React.SVGProps<SVGSVGElement>>[];
};

export function Landingpage({ iconsArray }: LandingpageProp) {
    const scrollDown = "Scroll down for more information"
    const fancyText = "this whole backend thing"

    return (
        <div id="landing-page">
            <p>
                Hi, im Orkan Gökcen and i do
                <p className="input">
                    {fancyText}
                </p>
            </p>
            {scrollDown}
            <Location iconsArray={iconsArray} index={2} />
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