export type IconComponentType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export type IconWrapperProperties = {
    icon: IconComponentType
    name: string
    size: number
}