import { useEffect, useState } from "react";
import "./styles.css";
import Button from "../Button";

export interface HeaderProps {
    hasStarted: boolean;
    handleReset: () => void;
    soundEnabled: boolean;
    handleSoundToggle: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
    const { hasStarted, handleReset, soundEnabled, handleSoundToggle } = props;
    const [time, setTime] = useState(0);

    useEffect(() => {
        let timer: number;
        if (hasStarted) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        } else {
            setTime(0);
        }
        return () => clearInterval(timer);
    }, [hasStarted, time]);

    return (
        <header className="header">
            <div className="content container">
                <div className="logo">
                    <h1>😎 Emoji Match</h1>
                </div>
                <div className="header-right">
                    <span className="timer">{time}s</span>
                    <Button className="reset-button" onClick={handleReset} disabled={!hasStarted}>
                        Reset
                    </Button>
                    <button
                        className="sound-button"
                        onClick={handleSoundToggle}
                        title={soundEnabled ? "Turn off sound" : "Turn on sound"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            width={18}
                            height={18}
                            viewBox="0 0 512 512"
                            stroke-width="5"
                            fill="currentColor"
                        >
                            {soundEnabled ? (
                                <>
                                    <path d="M232 416a23.88 23.88 0 0 1-14.2-4.68a8.27 8.27 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8.27 8.27 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24m88-80a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81c0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336" />
                                    <path d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8" />
                                    <path d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432" />
                                </>
                            ) : (
                                <>
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="32"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        d="M416 432L64 80"
                                    />
                                    <path d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51l-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71m8 236.43L96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3M352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256m64 0c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256" />
                                    <path d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
