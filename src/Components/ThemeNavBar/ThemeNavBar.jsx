import React, { useState, useEffect } from "react";
import "./ThemeNavBar.scss";
import ThemeNavBarInner from "./ThemeNavBarInner.jsx";
import list from "../../assets/images/navbar_mobile_list.svg";
import close from "../../assets/images/navbar_mobile_list-close.svg";

function ThemeNavBarResponsive({ data }) {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 480,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const [mobNavBarClass, setMobNavBarClass] = useState(
    "mobile__t_wrapper",
  );

  const handleOpenNavBar = () => {
    setMobNavBarClass("mobile__t_wrapper__active");
  };
  const handleCloseNavBar = () => {
    setMobNavBarClass("mobile__t_wrapper");
  };

  return (
    <div>
      {isMobile ? (
        <div className="mobile__container">
          <button
            className="mobile__open_btn"
            onClick={handleOpenNavBar}
          >
            <img src={list} alt="list" />
            <p>Все темы</p>
          </button>
          <div className={mobNavBarClass}>
            <button
              className="mobile__close_btn"
              onClick={handleCloseNavBar}
            >
              <img src={close} alt="close" />
            </button>
            <ThemeNavBarInner data={data} />
          </div>
        </div>
      ) : (
        <ThemeNavBarInner data={data} />
      )}
    </div>
  );
}

export default ThemeNavBarResponsive;
