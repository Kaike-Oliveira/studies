// Style
import style from './Button.module.scss';

// Type
interface ButtonProps {
  children: string;
};

function Button({ children }: ButtonProps) {
  return (
    <button className={style.button}>
      {children}
    </button>
  )
}

export default Button;