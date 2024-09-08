import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./InterviewSecond.scss";
import { fetchInterviews } from "../../../Services/fetchInterviews.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function VideoFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videos = useSelector(
    state => state.interviews.interviews,
  );
  const status = useSelector(
    state => state.interviews.status,
  );
  const error = useSelector(
    state => state.interviews.error,
  );
  const { pathname } = useLocation();
  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchInterviews());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (
      videos.length > 0 &&
      pathname === "/gradingsecond/interviewsecond"
    ) {
      navigate("/gradingsecond/interviewsecond/1", {
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
            to="/gradingsecond"
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
            pagePath="interviewsecond"
            toggleNavBar={toggleNavBar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
