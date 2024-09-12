import "./ThemeNavBar.scss";
import check from "../../assets/images/video_checked.svg";
import pinkFlag from "../../assets/images/pink_flag.svg";
import ThemeNavBarLink from "./ThemeNavBarLink";
import ThemeNavBarItem from "../ThemeNavBar/ThemeNavBarItem";

function ThemeNavBar({
  data,
  pagePath,
  navBarIsHidden,
  setQuestId = () => {},
}) {
  return (
    <div
      className={
        navBarIsHidden
          ? "theme__wrapper__hidden"
          : "theme__wrapper"
      }
    >
      <ul className="theme">
        {pagePath.length
          ? data?.map(item => (
              <li key={item.id} className="theme__item">
                <ThemeNavBarLink
                  pagePath={pagePath}
                  itemId={item.id}
                  itemTitle={item.title}
                />
                {item.isFinished && (
                  <div className="theme__item_div">
                    <img src={check} alt="finished" />
                  </div>
                )}
              </li>
            ))
          : data?.map(item => (
              <li key={item.id} className="theme__item">
                <ThemeNavBarItem
                  setQuestId={setQuestId}
                  activeItem={item.active}
                  itemId={item.id}
                  itemTitle={item.question}
                />
                {item.flag && (
                  <div className="theory__item__div">
                    <img
                      className="theory__item__img"
                      src={pinkFlag}
                      alt="finished"
                    />
                  </div>
                )}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default ThemeNavBar;
