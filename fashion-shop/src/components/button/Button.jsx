import "./Button.css";

const Button = (props) => {
  return (
    <button
      style={props.style}
      className={`button ${props.hoverColorClass}`}
      onClick={props.onButtonClick}
      disabled={props.isDisabled}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
