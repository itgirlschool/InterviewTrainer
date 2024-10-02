import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ThemeNavBar.scss";

function ThemeNavBarLink({ pagePath, gradingPath, itemId, itemTitle }) {
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  console.log(itemId, progressItem, typeof progressItem);

  useEffect(() => {
    setActive(itemId === id);
    setDisabled(Number(itemId) > progressItem + 1);
  }, [id, itemId]);

  const handleClick = () => {
    if (!disabled) {
      navigate(`/${gradingPath}/${pagePath}/${itemId}`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`theme__item_link ${active ? "active" : ""}`}
      disabled={disabled}
    >
      {itemTitle}
    </button>
  );
}

export default ThemeNavBarLink;
