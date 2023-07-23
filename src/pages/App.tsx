// Core
import React from 'react';

// Style
import style from './App.module.scss';

// Components
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
