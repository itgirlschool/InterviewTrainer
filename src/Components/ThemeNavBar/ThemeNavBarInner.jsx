import "./ThemeNavBar.scss";
import ThemeNavBarLink from "./ThemeNavBarLink";

function ThemeNavBar({ data, pagePath, gradingPath, navBarIsHidden }) {
  return (
    <div className={navBarIsHidden ? "theme__wrapper__hidden" : "theme__wrapper"}>
      <ul className="theme">
        {data?.map(item => (
          <ThemeNavBarLink
            pagePath={pagePath}
            gradingPath={gradingPath}
            itemId={item.id}
            itemTitle={item.title}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ThemeNavBar;
