import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";

import "./Error.scss";
import cat_error from "../../assets/images/ErrorImg.svg"

export default function Error() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/"); // Redirect to the home page
  };
  return (
      
    <> 
      <div className="error">
      <div className="error_container">
        <h1>404</h1>
        <p>Ошибка! <br></br>
        К сожалению, запрашиваемая Вами страница не найдена...</p>
        <button className="home__button" onClick={handleSelect} >Вернуться на главную</button>
      </div>
      <div className="error_image">
        <img className="cat_error" src={cat_error} alt="image" />
      </div>
    </div>

  </>
)
}
