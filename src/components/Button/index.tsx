// Style
import style from './Button.module.scss';

// Type
interface ButtonProps {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
};

function Button({
  children, type = "button"
}: ButtonProps) {
  return (
    <button
      className={style.button}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button;