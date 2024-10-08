import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Grimacing Face"
        {...props}
    >
        <path
            fill="#FFCC4D"
            d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        ></path>
        <ellipse cx="12" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
        <ellipse cx="24" cy="13.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
        <path fill="#FFF" d="M25 21a4 4 0 010 8H11a4 4 0 010-8h14z"></path>
        <path
            fill="#664500"
            d="M25 20H11c-2.757 0-5 2.243-5 5s2.243 5 5 5h14c2.757 0 5-2.243 5-5s-2.243-5-5-5zm0 2a2.997 2.997 0 012.949 2.5H24.5V22h.5zm-1.5 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zm-4 0v2.5h-3V22h3zM11 22h.5v2.5H8.051A2.997 2.997 0 0111 22zm0 6a2.997 2.997 0 01-2.949-2.5H11.5V28H11zm1.5 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4 0v-2.5h3V28h-3zm4.5 0h-.5v-2.5h3.449A2.997 2.997 0 0125 28z"
        ></path>
    </svg>
);
export default Icon;
