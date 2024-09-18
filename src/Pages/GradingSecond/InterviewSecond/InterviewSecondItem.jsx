import { useParams } from "react-router-dom";
import IframePlayer from "../../../Components/IframePlayer/IframePlayer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function InterviewSecondItem() {
  const { id } = useParams();
  const data = useSelector(
    state => state.interviews.interviews,
  );
  const status = useSelector(
    state => state.interviews.status,
  );
  const error = useSelector(
    state => state.interviews.error,
  );

  const [video, setVideo] = useState({});

  useEffect(() => {
    if (data && id) {
      const newVideo = data.find(item => item.id === id);
      setVideo(newVideo);
    }
  }, [data, id]);

  if (status === "loading")
    return <div>Загрузка видео...</div>;
  if (status === "failed" || error)
    return <div>Невозможно загрузить видео...</div>;
  if (!data) return <div>Видео не найдены</div>;

  return (
    <IframePlayer
      currentVideo={video.youtubeId}
      pagePath="interviewsecond"
      gradingPath="gradingsecond"
    />
  );
}
