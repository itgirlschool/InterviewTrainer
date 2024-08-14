import React from "react";
import VideoPlayerPagination from "./VideoPlayerPagination.jsx";
import "./VideoPlayer.scss";

function VideoPlayer({ src }) {
  return (
    <div className="video__container">
      <div className="video__wrapper">
        <video controls>
          <source src={src} type="video/mp4" />
          <p>Ваш браузер не поддерживает видео</p>
        </video>
      </div>
      <VideoPlayerPagination />
    </div>
  );
}

export default VideoPlayer;
