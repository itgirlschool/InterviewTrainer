import React from "react";
import "./VideoPlayer.scss";

function VideoPlayerInner({ src }) {
  return (
    <div className="video__wrapper">
      <video controls>
        <source src={src} type="video/mp4" />
        <p>Ваш браузер не поддерживает видео</p>
      </video>
    </div>
  );
}

export default VideoPlayerInner;
