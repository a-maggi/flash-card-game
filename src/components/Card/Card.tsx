import React, { useRef, useState } from "react";
import clsx from "clsx";
import Icon, { IconProps } from "../Icon/Icon";
import "./styles.css";

export interface CardProps {
    isActive?: boolean;
    icon: IconProps["name"];
    onClick: () => void;
}

const Card: React.FC<CardProps> = (props) => {
    const { icon, isActive, onClick } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!buttonRef.current || isActive) return;

        const button = buttonRef.current;
        const rect = button.getBoundingClientRect();

        // Calculate the mouse position relative to the center of the button
        const centerX = e.clientX - (rect.left + rect.width / 2);
        const centerY = e.clientY - (rect.top + rect.height / 2);

        // Setting the transformed position based on mouse over the center
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });

        // Calculate rotation angles
        const rotationX = centerY / 100;
        const rotationY = -centerX / 100;

        // Apply transformation with no transition for immediate effect
        button.style.transition = "none";
        button.style.transform = `
        rotate3d(${rotationX}, ${rotationY}, 0, ${Math.sqrt(centerX ** 2 + centerY ** 2) / 10}deg)
        `;
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;
        buttonRef.current.style.transform = "none";
        setPosition({ x: 0, y: 0 });
    };

    const handleClick = () => {
        if (!buttonRef.current || isActive) return;
        buttonRef.current.style.transition = "transform 0.6s";
        buttonRef.current.style.transform = "none";
        onClick();
    };

    return (
        <button
            ref={buttonRef}
            aria-pressed={isActive}
            disabled={isActive}
            onClick={handleClick}
            onMouseLeave={handleMouseLeave}
            className={clsx("card card-spotlight-effect", { active: isActive })}
        >
            <div className="card-inner" onMouseMove={handleMouseMove}>
                <div className="card-front">
                    <div
                        className="spotlight"
                        style={{
                            background: `radial-gradient(
                                circle at
                                ${position.x}px
                                ${position.y}px,
                                #ffffff55,
                                #0000000f
                            )`
                        }}
                    />
                </div>
                <div className="card-back">
                    <div className="card-content">
                        <Icon name={icon} size={124} />
                    </div>
                </div>
            </div>
        </button>
    );
};

export default Card;
