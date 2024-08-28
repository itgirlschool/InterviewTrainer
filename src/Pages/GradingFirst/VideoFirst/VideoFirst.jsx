import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./VideoFirst.scss";
import { fetchVideos } from "../../../Services/fetchVideos.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function VideoFirst() {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.videos.videos);
  const status = useSelector(state => state.videos.status);
  const error = useSelector(state => state.videos.error);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/gradingfirst/videofirst") {
      navigate("/gradingfirst/videofirst/1", {
        replace: true,
      });
    }
  }, [pathname, navigate]);

  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);
  const handleToggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };

  return (
    <div className="videoPage">
      <div className="videoPage__title">
        <Link
          className="videoPage__mainlink"
          to="/gradingfirst"
        >
          Вернуться назад к градации
        </Link>
      </div>
      <div
        className={
          navBarIsHidden
            ? "videoPage__main__modified"
            : "videoPage__main"
        }
      >
        <ThemeNavBar
          data={videos || []}
          error={error}
          status={status}
          pagePath="videofirst"
          toggleNavBar={handleToggleNavBar}
        />
        <Outlet navBarIsHidden={navBarIsHidden} />
      </div>
    </div>
  );
}
