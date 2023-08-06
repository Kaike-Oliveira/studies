// Core
import { useState } from 'react';

// Style
import style from './List.module.scss';

// Components
import Task from './Task';

function List() {
  const [tasks, setTasks] = useState(
    [
      {
        task: 'React',
        time: '02:00:00'
      },
      {
        task: 'Javascript',
        time: '01:00:00'
      },
      {
        task: 'Typescript',
        time: '03:00:00'
      }
    ]
  );

  return (
    <aside className={style.taskList}>
      <h2 onClick={() => setTasks([...tasks, {task: "Studie state", time: "02:00:00"}])}>Daily Studies</h2>
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