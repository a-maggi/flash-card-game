import React from "react";
import "./styles.css";

export interface DialogProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = (props) => {
    const { title, isOpen, onClose, children } = props;
    return (
        <>
            <div className={`dialog-overlay ${isOpen ? "is-open" : ""}`} />
            {isOpen && (
                <div className="dialog" role="dialog" aria-modal="true">
                    <button type="button" className="dismiss" onClick={onClose}>
                        ×
                    </button>
                    <div className="dialog-content">
                        <div className="image">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                width={64}
                                height={64}
                                aria-label="Success icon"
                            >
                                <g stroke-linejoin="round" stroke-linecap="round"></g>
                                <g>
                                    <path
                                        stroke-linejoin="round"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                        stroke="#000000"
                                        d="M20 7L9.00004 18L3.99994 13"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                        <div className="content">
                            <span className="title">{title}</span>
                            <div className="message">{children}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Dialog;
