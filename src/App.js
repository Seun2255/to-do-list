import React from 'react';
import Desktop from './Components/Desktop';
import style from "./App.module.css";


function App() {
  console.log("Why Bitch");
  return (
    <div className={style.body}>
      <Desktop />
    </div>
  );
}

export default App;
