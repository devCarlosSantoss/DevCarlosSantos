import React from 'react';
import style from './style.module.scss'
import Header from '../components/Header/Header';
import Home from '../components/Header/Home/Home';

function App() {
  return (
    <div className={style.AppStyle}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
