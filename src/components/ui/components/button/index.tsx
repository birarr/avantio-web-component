import { ComponentBaseProps } from "../../models/ComponentBaseProps";

interface ButtonProps extends ComponentBaseProps {
  text: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
}

export const Button = ({
  text,
  disabled,
  onClick,
  className,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {text && <p>{text}</p>}
    </button>
  );
};
