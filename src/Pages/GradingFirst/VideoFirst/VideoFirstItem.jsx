import { useParams } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import { useGetVideosQuery } from "../../../app/store/middleware/videosApi.js";
import { useEffect, useState } from "react";
import db from "../../../db.json";

export default function VideoFirstItem() {
  const { id } = useParams();
  const { data, error, isLoading } = useGetVideosQuery();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (data && id) {
      const newVideo = data.stage1.find(
        item => item.id === id,
      );
      setVideo(prevVideo => newVideo);
    } else {
      const newVideo = db.videos.stage1.find(
        item => item.id === id,
      );
      console.log(newVideo.title);
      setVideo(prevVideo => newVideo);
    }
  }, [data, id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos</div>;
  if (!video) return <div>Video not found</div>;

  return <VideoPlayer src={video.src} />;
}
