import React from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import VideoPlayerPagination from "./VideoPlayerPagination.jsx";
import "./VideoPlayer.scss";

function VideoPlayer({ src }) {
  return (
    <div className="video__container">
      <VideoPlayerInner src={src} />
      <VideoPlayerPagination />
    </div>
  );
}

export default VideoPlayer;
