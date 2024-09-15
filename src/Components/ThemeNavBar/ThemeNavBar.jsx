import React, { useState, useEffect } from "react";
import "./ThemeNavBar.scss";
import ThemeNavBarInner from "./ThemeNavBarInner.jsx";
import list from "../../assets/images/navbar_mobile_list.svg";
import close from "../../assets/images/navbar_mobile_list-close.svg";
import hide from "../../assets/images/navbar_hide.svg";

function ThemeNavBar({
  data,
  error,
  status,
  pagePath,
  gradingPath,
  toggleNavBar = () => {},
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);
  const [mobNavBarClass, setMobNavBarClass] = useState(
    "mobile__wrapper",
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenNavBar = () => {
    setMobNavBarClass("mobile__wrapper__active");
  };

  const handleCloseNavBar = () => {
    setMobNavBarClass("mobile__wrapper");
  };

  const handleHideNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
    toggleNavBar();
  };

  const mobileContainer = (
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
        <ThemeNavBarInner
          data={data}
          pagePath={pagePath}
          gradingPath={gradingPath}
        />
      </div>
    </div>
  );

  const desktopContainer = (
    <div className="desktop__container">
      <button
        className="desktop__hide_btn"
        onClick={handleHideNavBar}
      >
        <img
          className={
            navBarIsHidden ? "unhidden-img" : "hidden-img"
          }
          src={hide}
          alt="hide"
        />
      </button>
      <ThemeNavBarInner
        data={data}
        pagePath={pagePath}
        gradingPath={gradingPath}
        navBarIsHidden={navBarIsHidden}
      />
    </div>
  );

  if (status === "failed" || error) {
    console.error("Status:", status, "Error:", error);
    return (
      <h3>
        Не удалось загрузить данные.... Попробуйте ещё раз
        позже
      </h3>
    );
  }

  if (status === "loading") {
    return <h3>Loading....</h3>;
  }

  return (
    <div>
      {isMobile ? mobileContainer : desktopContainer}
    </div>
  );
}

export default ThemeNavBar;
