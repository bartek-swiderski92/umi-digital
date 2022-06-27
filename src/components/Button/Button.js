import "./Button.css";

export const Button = ({ onClick, buttonContent, className }) => {
    return <button onClick={onClick} className={`button ${className}`}>{buttonContent}</button>
}