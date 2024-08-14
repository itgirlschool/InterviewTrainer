import React from "react";
import "./ThemeNavBar.scss";
import check from "../../assets/images/video_checked.svg";

function ThemeNavBar(props) {
  return (
    <React.Fragment>
      <div className="theme__wrapper">
        <ul className="theme">
          {props.themeArray.map(item => {
            return (
              <li
                className="theme__item"
                key={item.id}
                onClick={key => props.handleThemeClick(key)}
              >
                {!item.isFinished ? (
                  <p>{item.title}</p>
                ) : (
                  <React.Fragment>
                    <p>{item.title}</p>
                    <div>
                      <img src={check} alt="finished" />
                    </div>
                  </React.Fragment>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ThemeNavBar;
