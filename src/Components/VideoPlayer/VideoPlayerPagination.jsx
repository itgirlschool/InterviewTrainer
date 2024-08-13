import React, { useState } from "react";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";

function VideoPlayerPagination() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);
    // props.handleCheckButton();
  };

  return (
    <React.Fragment>
      <div className="video__nav">
        <button
          className="video__nav-prev"
          onClick={props.handleShowPrev}
        >
          <img src={prev} alt="video-prev" />
          <p>Предыдущее видео</p>
        </button>
        {!isChecked ? (
          <button
            className="video__nav-finish"
            onClick={handleCheck}
          >
            <img src={check} alt="video-checked" />
            <p>Я посмотрела</p>
          </button>
        ) : (
          <button
            className="video__nav-next"
            onClick={props.handleShowNext}
          >
            <p>Следующее видео</p>
            <img src={next} alt="video-next" />
          </button>
        )}
      </div>
    </React.Fragment>
  );
}

export default VideoPlayerPagination;
