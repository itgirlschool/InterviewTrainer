import React from "react";
import "./ThemeNavBar.scss";
import check from "../../assets/images/video_checked.svg";
import { Link } from "react-router-dom";

function ThemeNavBar({ data }) {
  return (
    <div className="theme__wrapper">
      <ul className="theme">
        {data &&
          data.map(item => {
            return (
              <li className="theme__item">
                {!item.isFinished ? (
                  <Link key={item.id}>{item.title}</Link>
                ) : (
                  <>
                    <Link key={item.id}>{item.title}</Link>
                    <div>
                      <img src={check} alt="finished" />
                    </div>
                  </>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ThemeNavBar;
