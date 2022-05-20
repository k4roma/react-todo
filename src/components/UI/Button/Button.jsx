import "./Button.scss";

const Button = ({ children, icon, ...props }) => {
  return (
    <button {...props}>
      {icon ? <span className="btn__icon">{icon}</span> : null}
      {children}
    </button>
  );
};

export default Button;
