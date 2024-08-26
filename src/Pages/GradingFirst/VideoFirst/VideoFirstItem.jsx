import { useParams } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function VideoFirstItem() {
  const { id } = useParams();
  const data = useSelector(state => state.videos.videos);
  const status = useSelector(state => state.videos.status);
  const error = useSelector(state => state.videos.error);
  const [video, setVideo] = useState({});

  useEffect(() => {
    if (data && id) {
      const newVideo = data.find(item => item.id === id);
      setVideo(prevVideo => newVideo);
    }
  }, [data, id]);

  if (status === "loading")
    return <div>Загрузка видео...</div>;

  if (status === "failed" || error)
    return <div>Невозможно загрузить видео...</div>;
  if (!data) return <div>Видео не найдены</div>;

  return <VideoPlayer src={video.src} />;
}
