import * as icons from "./assets";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: keyof typeof icons;
    size?: number;
}

const Icon: React.FC<IconProps> = (props) => {
    const { name, size = 24, className, ...otherProps } = props;
    const IconComponent = icons[name];
    return (
        <span className={className} {...otherProps}>
            <IconComponent width={size} height={size} />
        </span>
    );
};

export default Icon;
