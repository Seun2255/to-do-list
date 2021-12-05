import React from 'react';
import style from './styles/topBar.module.css'
import newDay from '../../Utilities/time';
import menu from "./img/menu.png";

function TopBar(props) {
  const { list, openSideBar, sidebar } = props;
  return (
    <div className={style.body}>
      <div className={style.left}>
        {!sidebar && (
          <img
            src={menu}
            alt="Menu icon"
            id={style.menu}
            onClick={() => openSideBar()}
          />
        )}
        <h1 id={style.text}>{list}</h1>
        <p id={style.day}>{newDay}</p>
      </div>
      <div className={style.right}></div>
    </div>
  );
}

export default TopBar;