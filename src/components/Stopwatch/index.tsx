// Style
import style from './Stopwatch.module.scss';

// Components
import Button from "../Button";
import Clock from './Clock';

function Stopwatch() {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the Stopwatch</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  )
}

export default Stopwatch;