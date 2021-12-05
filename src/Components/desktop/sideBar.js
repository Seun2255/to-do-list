import React, { useState } from "react";
import style from "./styles/sideBar.module.css";
import me from "./img/zuriperson.png";
import searchIcon from "./img/search.png";
import plus from "./img/plus.png";
import ListItem from "./common/listItem";
import SearchItem from "./common/searchItem";
import close from "./img/black_X.png";

function SideBar(props) {
  const { store, list, setTaskModal, highlight, closeSidebar } = props;
  const setList = props.currentList;
  const [search, setSearch] = useState(false);
  const [results, setResults] = useState([]);
  const [inputStr, setInputStr] = useState("");

  function searching(text) {
    var items = [];
    store.map((item) => {
      let string = item.text;
      let check = string.toLowerCase().includes(text.toLowerCase());
      var data = { text: string, type: "list" };
      check
        ? items.push(data)
        : item.tasks.map((small) => {
            let string = small.task;
            let check = string.toLowerCase().includes(text.toLowerCase());
            var data = { text: string, type: small.type };
            check ? items.push(data) : (data = {});
            return null;
          });
      return null;
    });
    text === "" ? setResults([]) : setResults(items);
  }

  function searchButton() {
    setSearch(!search);
  }

  return (
    <div className={style.body}>
      <div className={style.details}>
        <div className={style.app__container}>
          <p id={style.app}>Primal To Do</p>
          <img
            src={close}
            alt="close button"
            id={style.close__button}
            onClick={() => closeSidebar()}
          />
        </div>
        <div className={style.user__container}>
          {!search ? (
            <div className={style.userDetails}>
              <img alt="my pic" src={me} className={style.me} />
              <p id={style.user}>Mr. Primal</p>
            </div>
          ) : (
            <input
              className={style.info}
              onChange={(e) => {
                searching(e.target.value);
                setInputStr(e.target.value);
              }}
              value={inputStr}
            />
          )}
          <img
            alt="search icon"
            className={style.search__icon}
            src={searchIcon}
            onClick={() => searchButton()}
          />
        </div>
        {search && results !== [] && (
          <div className={style.results__container}>
            {results.map((i) => (
              <SearchItem
                item={i}
                highlight={highlight}
                setSearch={setSearch}
                closeSidebar={closeSidebar}
              />
            ))}
          </div>
        )}
      </div>
      <div className={style.lists}>
        {store.map((item, id) => (
          <ListItem items={item} set={setList} list={list} key={id} />
        ))}
        <div className={style.task__adder} onClick={() => setTaskModal("list")}>
          <img alt="plus icon" src={plus} className={style.clickable__circle} />
          <p className={style.adder__text}>Add a new list</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
