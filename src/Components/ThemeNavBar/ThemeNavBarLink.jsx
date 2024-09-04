import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ThemeNavBar.scss";

function ThemeNavBarLink({ pagePath, itemId, itemTitle }) {
  const [active, setActive] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setActive(itemId === id);
  }, [id, itemId]);

  return (
    <Link
      to={`/gradingfirst/${pagePath}/${itemId}`}
      className={`theme__item_link ${
        active ? "active" : ""
      }`}
    >
      {itemTitle}
    </Link>
  );
}

export default ThemeNavBarLink;
