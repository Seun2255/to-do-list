import style from "./styles/addTaskModal.module.css";
import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import cross from "./img/cross.png";
import radius from "./img/radius.png";

const AddTask = (props) => {
  const [inputStr, setInputStr] = useState("");
  const [hover, setHover] = useState(false);
  const { newTask, newList, title, type, setTaskModal } = props;

  const buttonProps = useSpring({
    color: hover ? "white" : "cornflowerblue",
    backgroundColor: hover ? "cornflowerblue" : "white",
    from: { color: "cornflowerblue", backgroundColor: "white" },
  });

  const [topText, infoText, button] =
    title === "list"
      ? ["Add a new list", "List Name:", "Add List"]
      : ["Add a new task", "Task details:", "Add Task"];

  return (
    <div className={style.body}>
      <div className={style.form}>
        <div className={style.close__button}>
          <div className={style.white}></div>
          <img
            src={cross}
            alt="close-button"
            className={style.close}
            onClick={() => setTaskModal(false)}
          />
        </div>
        <div className={style.top__text}>{topText}</div>
        <div className={style.container}>
          <label className={style.head}>{infoText}</label>
          <input
            className={style.info}
            placeholder={"input here"}
            onChange={(e) => setInputStr(e.target.value)}
          />
        </div>
        <animated.button
          className={style.button}
          style={buttonProps}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() =>
            title === "list"
              ? newList({ text: inputStr, img: radius, tasks: [] })
              : newTask({ task: inputStr, type: type })
          }
        >
          {button}
        </animated.button>
      </div>
    </div>
  );
};

export default AddTask;