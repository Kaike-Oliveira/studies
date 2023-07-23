// Style
import style from '../List.module.scss';

// Type
interface TaskProps {
  task: string;
  time: string
}

function Task({ task, time }: TaskProps) {
  return (
    <li className={style.task}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  )
}

export default Task;