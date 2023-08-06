// Core
import React, { useState } from 'react';

// Interface
import { ITask } from '../types/task';

// Style
import style from './App.module.scss';

// Components
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
