// Core
import { useState } from 'react';

import { ITask } from '../../types/task';

// Style
import style from './Form.module.scss';

// Components
import Button from "../Button";

function Form({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>> }) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00:00");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTasks(oldTasks => [...oldTasks, {task, time}]);
    setTask("");
    setTime("00:00:00");
  };

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Add a new task
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Time
        </label>
        <input
          type="time"
          step="1"
          value={time}
          onChange={e => setTime(e.target.value)}
          name="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
        <Button type="submit">Add</Button>
    </form>
  )
}

export default Form;