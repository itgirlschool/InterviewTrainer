import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./VideoFirst.scss";
import { fetchVideos } from "../../../Services/fetchVideos.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";
import { unwrapResult } from "@reduxjs/toolkit";

export default function VideoFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videos = useSelector(state => state.videos.videos);
  const status = useSelector(state => state.videos.status);
  const error = useSelector(state => state.videos.error);
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const [navBarIsHidden, setNavBarIsHidden] = useState(false);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  useEffect(() => {
    const nextVideo =
      progressItem > 0 && progressItem < videos.length ? Number(progressItem) + 1 : 1;

    if (pathname === `/gradingfirst/videofirst`) {
      if (status === "idle") {
        dispatch(fetchVideos())
          .unwrap()
          .then(() => {
            navigate(`/gradingfirst/videofirst/${nextVideo}`, { replace: true });
          })
          .catch(error => {
            console.error("Ошибка загрузки видео:", error);
          });
      } else {
        navigate(`/gradingfirst/videofirst/${nextVideo}`, { replace: true });
      }
    }
  }, [dispatch, status, pathname, navigate, progressItem, videos.length]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };

  return (
    <div>
      <div className="videoPage">
        <div className="videoPage__title">
          <Link className="videoPage__mainlink" to="/gradingfirst">
            Вернуться назад к градации
          </Link>
        </div>
        {status === "loading" ? (
          <div className="loader">Загрузка видео...</div>
        ) : (
          <div
            className={navBarIsHidden ? "videoPage__main__modified" : "videoPage__main"}
          >
            <ThemeNavBar
              data={videos || []}
              error={error}
              status={status}
              pagePath="videofirst"
              gradingPath="gradingfirst"
              toggleNavBar={toggleNavBar}
            />
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}
