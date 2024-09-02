import React from "react";
import clsx from "clsx";
import "./styles.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    const { className, ...otherProps } = props;
    return <button className={clsx(`button`, className)} {...otherProps} />;
};

export default Button;
