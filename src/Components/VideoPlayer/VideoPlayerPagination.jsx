import { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";
import catBottomPic from "../../assets/images/background_cat-video.svg";

function VideoPlayerPagination({ isEnded }) {
  const [hasWatched, setHasWatched] = useState(false);

  const watching = (
    <>
      <img src={check} alt="video-checked" />
      <p>Я посмотрела</p>
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
      <Link className="video__button" to="/">
        <img src={prev} alt="video-prev" />
        <p>Предыдущее видео</p>
      </Link>
      <div className="video__cat">
        <img
          className="bg-image__cat"
          src={catBottomPic}
          alt="video_cat"
        />
      </div>
      <Link
        className="video__button"
        to="/"
        disabled={!isEnded}
        onClick={handleCheck}
      >
        {hasWatched && isEnded ? watched : watching}
      </Link>
    </div>
  );
}

export default VideoPlayerPagination;
