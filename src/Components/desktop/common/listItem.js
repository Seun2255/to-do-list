import style from "../styles/sideBar.module.css";

function ListItem(props) {
  const { set, list } = props;
  const item = props.items;

  return (
    <div
      className={style.list__item}
      onClick={() => set(item.text)}
      id={item.text === list ? style.selected__item : null}
    >
      <div className={style.item__namebox}>
        <img alt="item img" src={item.img} />
        <p className={style.item__name}>{item.text}</p>
      </div>
      <p className={style.list__no}>
        {item.tasks.length !== 0 ? item.tasks.length : null}
      </p>
    </div>
  );
}

export default ListItem;
