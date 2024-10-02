import "./ThemeNavBar.scss";
import check from "../../assets/images/video_checked.svg";
import ThemeNavBarLink from "./ThemeNavBarLink";

function ThemeNavBar({ data, pagePath, gradingPath, navBarIsHidden }) {
  return (
    <div className={navBarIsHidden ? "theme__wrapper__hidden" : "theme__wrapper"}>
      <ul className="theme">
        {data?.map(item => (
          <li key={item.id} className="theme__item">
            <ThemeNavBarLink
              pagePath={pagePath}
              gradingPath={gradingPath}
              itemId={item.id}
              itemTitle={item.title}
            />

            {item.isFinished && (
              <div className="theme__item_div">
                <img src={check} alt="finished" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeNavBar;
