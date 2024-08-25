import React from "react";
import "./VideoPlayer.scss";

function VideoPlayerInner({ src, videoRef }) {
  const handleError = () => {
    console.error("Failed to load video:", src);
  };

  return (
    <div className="video__wrapper">
      <video
        ref={videoRef}
        controls /* onError={handleError}*/
      >
        <source src={src} type="video/mp4" />
        <p>Ваш браузер не поддерживает видео</p>
      </video>
    </div>
  );
}
export default VideoPlayerInner;
