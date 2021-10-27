import style from "../styles/taskList.module.css";
import TaskItem from "./common/taskItem";
import AddTask from "./addTaskModal";
import { useState } from 'react';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [taskModal, setTaskModal] = useState(false);

    const addTask = ( task ) => {
        let setter = tasks;
        setter.push(task);
        setTasks(setter);
    }

    return (
        <div className={style.body}>
            {tasks.map( (item) => <TaskItem />)}
            <div className={style.task__adder} onClick={setTaskModal(true)}>
                <img className={style.adder__img} src="./" alt="blue cross"/>
                <p className={style.adder__text}>Add a task</p>
            </div>
            { taskModal &&
            <div className={style.taskModal}>
                <AddTask newTask={() => addTask()}/>
            </div>
            }
        </div>
    );
}

export default TaskList;