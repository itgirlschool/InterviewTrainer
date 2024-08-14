import React, { useState, useEffect } from "react";
import "./ThemeNavBar.scss";
import ThemeNavBar from "./ThemeNavBar.jsx";

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

  return (
    <div>
      {isMobile ? (
        <button className="navbar__mobile_btn">
          Все темы
        </button>
      ) : (
        <ThemeNavBar data={data} />
      )}
    </div>
  );
}

export default ThemeNavBarResponsive;
