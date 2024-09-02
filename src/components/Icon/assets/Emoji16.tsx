import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Flushed Face"
        {...props}
    >
        <path
            fill="#FFCC4D"
            d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        ></path>
        <circle cx="29" cy="23" r="5" fill="#FF7892"></circle>
        <circle cx="7" cy="23" r="5" fill="#FF7892"></circle>
        <circle cx="24.5" cy="16.5" r="5.5" fill="#F5F8FA"></circle>
        <circle cx="11.5" cy="16.5" r="5.5" fill="#F5F8FA"></circle>
        <circle cx="11.5" cy="16.5" r="2.5" fill="#292F33"></circle>
        <circle cx="24.5" cy="16.5" r="2.5" fill="#292F33"></circle>
        <path
            fill="#664500"
            d="M22 30h-8a1 1 0 110-2h8a1 1 0 110 2zm8.001-19a.998.998 0 01-.801-.4c-2.64-3.521-6.061-3.598-6.206-3.6a1.002 1.002 0 01-.991-1.005A.997.997 0 0123 5c.184 0 4.537.05 7.8 4.4a1 1 0 01-.799 1.6zM5.999 11A1 1 0 015.2 9.4C8.462 5.05 12.816 5 13 5a1 1 0 01.004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 01-.801.4z"
        ></path>
    </svg>
);
export default Icon;
