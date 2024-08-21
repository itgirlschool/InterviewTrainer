import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./VideoFirst.scss";
// import { useGetVideosQuery } from "../../../app/store/middleware/videosApi.js";
import { fetchVideos } from "../../../app/store/middleware/middlewareVideos.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function VideoFirst() {
  // const { data, error, isLoading } = useGetVideosQuery();

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const actionResult = await dispatch(
          fetchVideos(),
        ).unwrap();
        setData(actionResult);
        setStatus("succeeded");
      } catch (err) {
        setError(err);
        setStatus("failed");
      }
    };

    fetchData();
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
          status={status}
        />
        <Outlet />
      </div>
    </div>
  );
}
