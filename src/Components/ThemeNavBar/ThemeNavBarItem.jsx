import "./ThemeNavBar.scss";
import { useEffect, useState } from "react";

export default function ThemeNavBarItem({
  itemId,
  itemTitle,
  activeItem,
  setQuestId = () => {},
}) {
  const [active, setActive] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    activeItem === true
      ? setActive(true)
      : setActive(false);
    setId(itemId);
  });

  const handleClick = () => {
    setQuestId(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`theory__item ${active ? "active" : ""}`}
    >
      {itemTitle}
    </button>
  );
}
