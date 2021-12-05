import TopBar from './desktop/topBar';
import SideBar from './desktop/sideBar';
import TaskList from "./desktop/taskList";
import style from "./styles/Desktop.module.css";
import { useState } from "react";
import shop from "./desktop/img/shopping-bag.png";
import important from "./desktop/img/important.png";
import planning from "./desktop/img/planning.png";
import radius from "./desktop/img/radius.png";
import AddTask from "./desktop/addTaskModal";
import { animated, useSpring } from "@react-spring/web";

function Desktop() {
  const [store, setStore] = useState([
    { text: "My Day", img: shop, tasks: [] },
    { text: "Important", img: important, tasks: [] },
    { text: "Planned", img: planning, tasks: [] },
    { text: "Tasks", img: radius, tasks: [] },
  ]);
  const [taskModal, setTaskModal] = useState(false);
  const [modalType, setModalType] = useState("task");
  const [open, setOpen] = useState(false);
  const [list, setList] = useState("My Day");
  const [sidebar, setSidebar] = useState(false);
  const [highlight, setHighlight] = useState("");

  const divProps = useSpring({
    transform: open ? "scale(1,1)" : "scale(0.05,0.05)",
    from: { transform: "scale(0.05,0.05)" },
    config: { duration: 300 },
  });

  const outerProps = useSpring({
    backgroundColor: open ? "rgba(19, 19, 35, 0.8)" : "rgba(19, 19, 35, 0.0)",
    from: { backgroundColor: "rgba(19, 19, 35, 0.0)" },
    config: { duration: 300 },
  });

  const mediaQuery = window.matchMedia("(max-width: 600px)");

  const slideBar = useSpring({
    transform: sidebar ? "translateX(0%)" : "translateX(-100%)",
    from: { transform: "translateX(-100%)" },
    config: { duration: 300 },
  });

  const addTask = (task) => {
    var newStore = [...store];
    var test = { ...task };
    test.type === "Important"
      ? (test.important = true)
      : (test.important = false);
    newStore.map((item) => {
      if (item.text === task.type) item.tasks.push(test);
      return item;
    });
    updateStore(newStore);
    setTaskModal(false);
    setOpen(false);
  };

  const addList = (list) => {
    var newStore = [...store];
    newStore.push(list);
    updateStore(newStore);
    setTaskModal(false);
    setOpen(false);
  };

  const updateStore = (store) => {
    setStore(store);
  };

  const showModal = (type) => {
    setModalType(type);
    setTaskModal(true);
    setOpen(true);
  };

  const currentList = (list) => {
    setList(list);
  };

  const closeSideBar = () => {
    setSidebar(false);
  };

  const openSideBar = () => {
    setSidebar(true);
  };

  const props = {
    store: store,
    update: updateStore,
    list: list,
    currentList: currentList,
    highlighted: highlight,
  };

  function toggleBar() {
    setSidebar(!sidebar);
  }

  function highlighting(text, list) {
    setList(list);
    setHighlight(text);
  }

  return (
    <div className={style.body}>
      <animated.div
        className={style.left}
        style={mediaQuery.matches ? slideBar : null}
      >
        <SideBar
          {...props}
          setTaskModal={showModal}
          highlight={highlighting}
          closeSidebar={closeSideBar}
        />
      </animated.div>
      <div className={style.right}>
        <TopBar
          className={style.topBar}
          list={list}
          openSideBar={openSideBar}
          sidebar={sidebar}
        />
        <div className={style.content}>
          <TaskList {...props} setTaskModal={showModal} />
        </div>
      </div>
      {taskModal && (
        <animated.div className={style.taskModal} style={outerProps}>
          <animated.div className={style.modalContainer} style={divProps}>
            <AddTask
              newTask={addTask}
              newList={addList}
              title={modalType}
              type={list}
              setTaskModal={setTaskModal}
            />
          </animated.div>
        </animated.div>
      )}
    </div>
  );
}

export default Desktop;