import React, { useState } from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";

function VideoTest() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(true);
  };

  return (
    <React.Fragment>
      <div className="container">
        <VideoPlayerInner src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1" />
        <div className="video__nav">
          <button className="video__nav-prev">
            <img src={prev} alt="video-prev" />
            <p>Предыдущее видео</p>
          </button>
          {!isFinished ? (
            <button
              className="video__nav-finish"
              onClick={handleCheck}
            >
              <img src={check} alt="video-checked" />
              <p>Я посмотрела</p>
            </button>
          ) : (
            <button className="video__nav-next">
              <p>Следующее видео</p>
              <img src={next} alt="video-next" />
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoTest;
