import React from 'react';
import style from './styles/sideBar.module.css'

function SideBar() {
    return (
    <div className={style.body}>
        <div className={style.details}>
        <p id={style.app}>Primal To Do</p>
        <div className={style.userDetails}>
        <p id={style.user}>Mr. Primal</p>
        </div>
        </div>
    </div>
    );
}

export default SideBar;