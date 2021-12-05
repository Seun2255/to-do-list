import style from "../styles/searchItem.module.css";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function SearchItem(props) {
  const { item, highlight, setSearch, closeSidebar } = props;
  const [hover, setHover] = useState(false);

  const springProps = useSpring({
    transform: hover ? "scale(1.3,1.3)" : "scale(1,1)",
    from: { transform: "scale(1,1)" },
    config: { duration: 300 },
  });

  return (
    <div
      className={style.container}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={() => {
        closeSidebar();
        highlight(item.text, item.type);
        setSearch(false);
      }}
    >
      <div className={style.info}>{item.text}</div>
      <div className={style.type} style={springProps}>
        {item.type}
      </div>
    </div>
  );
}

export default SearchItem;
