import { Link } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer.jsx";
import "./VideoFirst.scss";

export default function VideoFirst() {
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
        <VideoPlayer />
      </div>
    </div>
  );
}
