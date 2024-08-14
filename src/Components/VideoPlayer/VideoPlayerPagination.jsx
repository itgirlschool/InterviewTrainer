import { useState } from "react";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";

function VideoPlayerPagination({ isEnded }) {
  const [hasWatched, setHasWatched] = useState(false);

  const watching = (
    <>
      <img src={check} alt="video-checked" />
      <p style={{ opacity: "0.5" }}>Я посмотрела</p>
    </>
  );

  const watched = (
    <>
      <img src={next} alt="video-next" />
      <p>Следующее видео</p>
    </>
  );

  const handleCheck = () => {
    if (isEnded) setHasWatched(true);
  };

  return (
    <div className="video__nav">
      <button className="video__button">
        <img src={prev} alt="video-prev" />
        <p>Предыдущее видео</p>
      </button>
      <button
        className="video__button"
        disabled={!isEnded}
        onClick={handleCheck}
      >
        {hasWatched && isEnded ? watched : watching}
      </button>
    </div>
  );
}

export default VideoPlayerPagination;
