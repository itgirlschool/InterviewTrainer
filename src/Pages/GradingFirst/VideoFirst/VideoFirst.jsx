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
  const navigate = useNavigate();
  const videos = useSelector(state => state.videos.videos);
  const status = useSelector(state => state.videos.status);
  const error = useSelector(state => state.videos.error);
  const { pathname } = useLocation();
  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVideos());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (
      videos.length > 0 &&
      pathname === "/gradingfirst/videofirst"
    ) {
      navigate("/gradingfirst/videofirst/1", {
        replace: true,
      });
    }
  }, [videos, pathname, navigate]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };

  return (
    <div>
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
            toggleNavBar={toggleNavBar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
