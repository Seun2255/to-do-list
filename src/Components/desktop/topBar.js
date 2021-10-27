import React from 'react';
import style from './styles/topBar.module.css'
import newDay from '../../Utilities/time';

function TopBar() {
    return (
    <div className={style.body}>
        <div className={style.left}>
          <h1 id={style.text}>My Day</h1>
          <p id={style.day}>{newDay}</p>
        </div>
        <div className={style.right}></div>
    </div>
    );
}

export default TopBar;