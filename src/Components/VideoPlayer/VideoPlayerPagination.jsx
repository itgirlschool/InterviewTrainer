import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";
import catBottomPic from "../../assets/images/background_cat-video.svg";

function VideoPlayerPagination({ isEnded }) {
  const [hasWatched, setHasWatched] = useState(false);

  const handleCheck = () => {
    if (isEnded) setHasWatched(true);
  };

  const watching = (
    <button
      className={`video__button ${
        !isEnded ? "disabled" : ""
      }`}
      disabled={!isEnded}
      onClick={handleCheck}
    >
      <img src={check} alt="video-checked" />
      <p>Я посмотрела</p>
    </button>
  );

  const watched = (
    <button
      className="video__button"
      disabled={!isEnded}
      onClick={handleNext}
    >
      <img src={next} alt="video-next" />
      <p>Следующее видео</p>
    </button>
  );

  return (
    <div className="video__nav">
      <button
        className="video__button"
        onClick={handlePrev}
      >
        <img src={prev} alt="video-prev" />
        <p>Предыдущее видео</p>
      </button>
      <div className="video__cat">
        <img
          className="bg-image__cat"
          src={catBottomPic}
          alt="video_cat"
        />
      </div>

      {hasWatched && isEnded ? watched : watching}
    </div>
  );
}

export default VideoPlayerPagination;
