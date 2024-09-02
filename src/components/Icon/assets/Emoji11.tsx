import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement>;

const Icon: React.FC<IconProps> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={24}
        height={24}
        viewBox="0 0 36 36"
        aria-label="Clown Face"
        {...props}
    >
        <g fill="#4289c1">
            <circle cx="29" cy="3" r="2"></circle>
            <circle cx="33" cy="8" r="3"></circle>
            <circle cx="33" cy="4" r="3"></circle>
            <circle cx="7" cy="3" r="2"></circle>
            <circle cx="3" cy="8" r="3"></circle>
            <circle cx="3" cy="4" r="3"></circle>
        </g>
        <path fill="#fee7b8" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"></path>
        <circle cx="30.5" cy="4.5" r="2.5" fill="#4289c1"></circle>
        <circle cx="32" cy="7" r="2" fill="#4289c1"></circle>
        <circle cx="5.5" cy="4.5" r="2.5" fill="#4289c1"></circle>
        <circle cx="4" cy="7" r="2" fill="#4289c1"></circle>
        <circle cx="6.93" cy="21" r="4" fill="#ff7892"></circle>
        <circle cx="28.93" cy="21" r="4" fill="#ff7892"></circle>
        <path
            fill="#da2f47"
            d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 00-.729.657C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743a.499.499 0 00-.094-.628z"
        ></path>
        <path
            fill="none"
            d="M27.335 23.629a.501.501 0 00-.635-.029c-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 00-.729.657C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743a.499.499 0 00-.094-.628z"
        ></path>
        <ellipse cx="11.5" cy="11.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
        <ellipse cx="25.5" cy="11.5" fill="#664500" rx="2.5" ry="3.5"></ellipse>
        <circle cx="18.5" cy="19.5" r="3.5" fill="#bb1a34"></circle>
    </svg>
);
export default Icon;
