import style from "./styles/taskList.module.css";
import TaskItem from "./common/taskItem";
import plus from "./img/plus.png";

const TaskList = (props) => {
  const { store, list, setTaskModal } = props;

  return (
    <div className={style.body}>
      {store.map((item) =>
        item.text === list
          ? item.tasks.map((item, id) => (
              <TaskItem item={item} key={id} curlist={list} {...props} />
            ))
          : null
      )}
      <div className={style.task__adder} onClick={() => setTaskModal("task")}>
        <img alt="plus icon" src={plus} className={style.clickable__circle} />
        <p className={style.adder__text}>Add a task</p>
      </div>
    </div>
  );
};

export default TaskList;
