import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Happy Face"
        {...props}
    >
        <circle cx="18" cy="18" r="18" fill="#ffcc4d"></circle>
        <path
            fill="#664500"
            d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
        ></path>
        <path fill="#fff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z"></path>
        <g fill="#664500">
            <ellipse cx="12" cy="13.5" rx="2.5" ry="3.5"></ellipse>
            <ellipse cx="24" cy="13.5" rx="2.5" ry="3.5"></ellipse>
        </g>
    </svg>
);
export default Icon;
