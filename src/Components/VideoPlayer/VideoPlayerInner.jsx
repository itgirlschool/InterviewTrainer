import React from "react";
import "./VideoPlayer.scss";

function VideoPlayerInner(props) {
  return (
    <React.Fragment>
      <div className="video__wrapper">
        <video poster={props.poster} controls>
          <source src={props.src} type="video/mp4" />
          <p>Ваш браузер не поддерживает видео</p>
        </video>
      </div>
    </React.Fragment>
  );
}

export default VideoPlayerInner;
