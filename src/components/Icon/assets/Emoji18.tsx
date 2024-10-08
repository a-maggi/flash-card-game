import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Smiling Face"
        {...props}
    >
        <circle cx="18" cy="18" r="18" fill="#ffcc4d"></circle>
        <g fill="#664500">
            <path d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379a.499.499 0 00-.237-.554.505.505 0 00-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855a.502.502 0 00-.598-.081.5.5 0 00-.239.557z"></path>
            <ellipse cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse>
            <ellipse cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse>
        </g>
    </svg>
);
export default Icon;
