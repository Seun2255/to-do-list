import style from "../styles/taskItem.module.css";

function TaskItem(task, type) {
    return (
        <div className={style.body}>
            <div className={style.left}>
                <img />
                <div className={style.task__details}>
                    <p className={style.task__info}>{task}</p>
                    <p className={style.task__type}>{type}</p>
                </div>
            </div>
            <div className={style.right}>
                <img />
            </div>
        </div>
    );
}

export default TaskItem;