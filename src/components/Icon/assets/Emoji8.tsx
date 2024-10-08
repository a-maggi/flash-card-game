import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Astonished Face"
        {...props}
    >
        <path
            fill="#ffcc4d"
            d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        ></path>
        <ellipse cx="18" cy="27" fill="#664500" rx="5" ry="6"></ellipse>
        <path
            fill="#664500"
            d="M5.999 11A1 1 0 015.2 9.4C8.462 5.05 12.816 5 13 5a1 1 0 01.004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 01-.801.4zm24.002 0a.998.998 0 01-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6a1.002 1.002 0 01-.991-1.005A.997.997 0 0123 5c.184 0 4.537.05 7.8 4.4a1 1 0 01-.799 1.6z"
        ></path>
        <path fill="#f5f8fa" d="M18 23c-1.657 0-3 1.79-3 4h6c0-2.21-1.343-4-3-4z"></path>
        <g fill="#664500">
            <ellipse cx="12" cy="14.5" rx="2.5" ry="3.5"></ellipse>
            <ellipse cx="24" cy="14.5" rx="2.5" ry="3.5"></ellipse>
        </g>
    </svg>
);
export default Icon;
