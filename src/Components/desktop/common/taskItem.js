import style from "../styles/taskItem.module.css";
import star from "../img/star.png";
import important from "../img/important.png";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function TaskItem(props) {
  const { item, store, update, curlist, highlighted } = props;
  const [clicked, setClicked] = useState(false);
  const [simg, setSimg] = useState(item.important);
  const [highlight, setHighlight] = useState(highlighted);

  var imgstar = simg ? important : star;

  const springProps = useSpring({
    opacity: 1,
    backgroundColor: highlight === item.task ? "#eceda7" : "white",
    from: { opacity: 0, backgroundColor: "white" },
    reset: true,
    onRest: () => setHighlight(false),
  });

  function handleClick() {
    var newStore = [...store];
    newStore.map((list) => {
      if (list.text === "Important") {
        var newItem = { ...item };
        newItem.important = true;
        newItem.type = "Important";
        list.tasks.push(newItem);
      } else if (list.text === curlist) {
        list.tasks.map((nitem) => {
          if (nitem.task === item.task) nitem.important = true;
          return nitem;
        });
      }
      return list;
    });
    update(newStore);
    setSimg(true);
  }

  return (
    <animated.div
      className={style.body}
      style={springProps}
      onClick={() => setClicked(!clicked)}
    >
      <div className={style.left}>
        <div className={style.clickable__circle}></div>
        <div className={style.task__details}>
          <p className={style.task__info}>{item.task}</p>
        </div>
      </div>
      <div className={style.right}>
        <img
          src={imgstar}
          alt="Alarm"
          className={style.right__img}
          onClick={() => handleClick()}
        />
      </div>
    </animated.div>
  );
}

export default TaskItem;