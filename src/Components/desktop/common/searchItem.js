import style from "../styles/searchItem.module.css";

function SearchItem(props) {
  const { item, highlight, setSearch, closeSidebar } = props;

  return (
    <div
      className={style.container}
      onClick={() => {
        closeSidebar();
        highlight(item.text, item.type);
        setSearch(false);
      }}
    >
      <div className={style.info}>{item.text}</div>
      <div className={style.type}>{item.type}</div>
    </div>
  );
}

export default SearchItem;
