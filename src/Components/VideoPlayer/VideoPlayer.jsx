import React, { useState } from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import "./VideoPlayer.scss";

function VideoTest() {
  const [isFinished, setIsFinished] = useState(false);
  const handleFinished = () => {
    setIsFinished(true);
  };

  return (
    <React.Fragment>
      <div className="container">
        <VideoPlayerInner src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1" />
        <div className="video__nav">
          <button className="video__nav-prev">
            Предыдущее видео
          </button>
          {!isFinished ? (
            <button
              className="video__nav-finish"
              onClick={handleFinished}
            >
              Я посмотрела
            </button>
          ) : (
            <button className="video__nav-next">
              Следующее видео
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoTest;
