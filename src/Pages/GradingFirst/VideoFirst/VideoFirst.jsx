import { Link, Outlet } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer.jsx";
import "./VideoFirst.scss";
import { useGetVideosQuery } from "../../../app/store/middleware/videosApi.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function VideoFirst() {
  const { data, error, isLoading } = useGetVideosQuery();

  return (
    <div className="videoPage">
      <div className="videoPage__nav">
        <Link
          className="videoPage__mainlink"
          to="/gradingfirst"
        >
          Градация 1
        </Link>
        <span className="videoPage__navspan">
          {" "}
          {">"} Видеоуроки
        </span>
      </div>
      <div>
        <ThemeNavBar data={data?.stage1 || []} />
        <Outlet />
        {/* <VideoPlayer /> */}
      </div>
    </div>
  );
}
