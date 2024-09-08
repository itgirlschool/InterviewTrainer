import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./IframePlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";
import catBottomPic from "../../assets/images/background_cat-video.svg";
import { useSelector } from "react-redux";

function IframePlayerPagination({ isEnded }) {
  const [hasWatched, setHasWatched] = useState(false);
  const data = useSelector(
    state => state.interviews.interviews,
  );
  const { id } = useParams();
  const currentVideo = parseInt(id, 10);
  const navigate = useNavigate();

  useEffect(() => {
    setHasWatched(false);
  }, [id]);

  const handleCheck = () => {
    if (isEnded) setHasWatched(true);
  };

  const handlePrev = () => {
    if (currentVideo > 1) {
      navigate(
        `/gradingsecond/interviewsecond/${
          currentVideo - 1
        }`,
      );
    }
  };

  const handleNext = () => {
    if (currentVideo < data.length) {
      navigate(
        `/gradingsecond/interviewsecond/${
          currentVideo + 1
        }`,
      );
    }
  };

  const watchingBtn = (
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

  const watchedBtn = (
    <button
      className={`video__button ${
        currentVideo === data.length ? "disabled" : ""
      }`}
      disabled={currentVideo === data.length}
      onClick={handleNext}
    >
      <img src={next} alt="video-next" />
      <p>Следующее видео</p>
    </button>
  );

  const prevBtn = (
    <button
      className={`video__button ${
        currentVideo === 1 ? "disabled" : ""
      }`}
      onClick={handlePrev}
      disabled={currentVideo === 1}
    >
      <img src={prev} alt="video-prev" />
      <p>Предыдущее видео</p>
    </button>
  );

  const catImg = (
    <div className="video__cat">
      <img
        className="bg-image__cat"
        src={catBottomPic}
        alt="video_cat"
      />
    </div>
  );

  return (
    <div className="video__nav">
      {prevBtn}
      {catImg}
      {hasWatched ? watchedBtn : watchingBtn}
    </div>
  );
}

export default IframePlayerPagination;
