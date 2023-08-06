// Style
import style from './List.module.scss';

// Interface
import { ITask } from '../../types/task';

// Components
import Task from './Task';

function List({ tasks }: { tasks: ITask[] }) {
  return (
    <aside className={style.taskList}>
      <h2>Daily Studies</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            {...task}
          />
        ))}
      </ul>
    </aside>
  )
}

export default List;