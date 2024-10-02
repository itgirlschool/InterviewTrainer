import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
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
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const [navBarIsHidden, setNavBarIsHidden] = useState(false);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVideos());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const nextVideo =
      progressItem > 0 && progressItem < videos.length ? Number(progressItem) + 1 : 1;

    if (pathname === `/gradingfirst/videofirst`) {
      navigate(`/gradingfirst/videofirst/${nextVideo}`, { replace: true });
    }
  }, [videos, pathname, navigate, progressItem]);

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
        <div className={navBarIsHidden ? "videoPage__main__modified" : "videoPage__main"}>
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
      </div>
    </div>
  );
}
