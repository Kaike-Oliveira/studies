// Style
import style from './Button.module.scss';

// Type
interface ButtonProps {
  text: string
};

function Button({ text }: ButtonProps) {
  return (
    <button className={style.button}>
      {text}
    </button>
  )
}

export default Button;