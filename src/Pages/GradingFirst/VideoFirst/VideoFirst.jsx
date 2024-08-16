import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import "./VideoFirst.scss";
import { useGetVideosQuery } from "../../../app/store/middleware/videosApi.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function VideoFirst() {
  const { data, error, isLoading } = useGetVideosQuery();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/gradingfirst/videofirst") {
      navigate("/gradingfirst/videofirst/1", {
        replace: true,
      });
    }
  }, [pathname, navigate]);

  return (
    <div className="videoPage">
      <div className="videoPage__title">
        <Link
          className="videoPage__mainlink"
          to="/gradingfirst"
        >
          Градация 1
        </Link>
        <span className="videoPage__titlespan">
          {" "}
          {">"} Видеоуроки
        </span>
      </div>
      <div className="videoPage__main">
        <ThemeNavBar
          data={data?.stage1 || []}
          error={error}
          isLoading={isLoading}
        />
        <Outlet />
      </div>
    </div>
  );
}
