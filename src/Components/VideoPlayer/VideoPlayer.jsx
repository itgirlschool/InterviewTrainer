import React, { useEffect, useRef, useState } from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import VideoPlayerPagination from "./VideoPlayerPagination.jsx";
import "./VideoPlayer.scss";
import star from "../../assets/images/background_star.svg";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.load();
      setIsEnded(false);

      const handleEnded = () => {
        setIsEnded(true);
      };

      videoElement.addEventListener("ended", handleEnded);

      return () => {
        videoElement.removeEventListener(
          "ended",
          handleEnded,
        );
      };
    }
  }, [src]);

  return (
    <div className="video__container">
      <img
        className="bg-image__star"
        src={star}
        alt="star_video"
      />
      <VideoPlayerInner src={src} videoRef={videoRef} />
      <VideoPlayerPagination isEnded={isEnded} />
    </div>
  );
}

export default VideoPlayer;
