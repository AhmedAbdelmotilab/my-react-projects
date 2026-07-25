import IButtonProps from "../interfaces/IButtonProps";

function ButtonComponent({ children, onClick }: IButtonProps) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default ButtonComponent;
