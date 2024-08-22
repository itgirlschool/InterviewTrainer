import { useParams } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import db from "../../../db.json";
import { fetchVideos } from "../../../app/store/middleware/middlewareVideos";

export default function VideoFirstItem() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [video, setVideo] = useState(null);

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

  // useEffect(() => {
  //   if (data && id) {
  //     console.log(data.stage1);
  //     const newVideo = data.stage1.find(
  //       item => item.id === id,
  //     );
  //     setVideo(prevVideo => newVideo);
  //   } else {
  //     const newVideo = db.videos.stage1.find(
  //       item => item.id === id,
  //     );
  //     setVideo(prevVideo => newVideo);
  //   }
  // }, [data, id]);

  useEffect(() => {
    if (data && id) {
      console.log(data);
      const newVideo = data.find(item => item.id === id);
      setVideo(newVideo);
    } else if (db.videos) {
      const newVideo = db.find(item => item.id === id);
      setVideo(newVideo);
    }
  }, [data, id]);

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading videos</div>;
  if (!video) return <div>Video not found</div>;

  return <VideoPlayer src={video.src} />;
}
