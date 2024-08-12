import { Link } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer.jsx";
import { Pagination } from "antd";

export default function VideoFirst() {
  return (
    <>
      <Link to="/gradingfirst">Градация 1</Link>
      <span> {">"} Видеоуроки</span>
      <div>Навигация по видеоурокам</div>
      <div>
        <VideoPlayer />
      </div>
      <Pagination />
    </>
  );
}
