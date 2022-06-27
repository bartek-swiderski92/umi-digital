import "./Button.css";

export const Button = ({ buttonContent, className }) => {
    return <button className={`button ${className}`}>{buttonContent}</button>
}