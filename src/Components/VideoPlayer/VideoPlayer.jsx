import React, { useEffect, useRef, useState } from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import VideoPlayerPagination from "./VideoPlayerPagination.jsx";
import "./VideoPlayer.scss";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      setIsEnded(false);
    }
  }, [src]);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleEnded = () => {
      setIsEnded(true);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleEnded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "ended",
          handleEnded,
        );
      }
      setIsEnded(false);
    };
  }, []);

  return (
    <div className="video__container">
      <VideoPlayerInner src={src} videoRef={videoRef} />
      <VideoPlayerPagination isEnded={isEnded} />
    </div>
  );
}

export default VideoPlayer;
