import style from "./styles/addTaskModal.module.css";

const AddTask = (newTask) => {
    return (
        <div className={style.body}>
            <div className={style.upper}>
                <p>Add a New Task</p>
            </div>
            <div className={style.lower}>
                <p>Task:</p>
                <textarea />
                <button onClick={() => newTask()}>Add</button>
            </div>
        </div>
    );
}

export default AddTask;