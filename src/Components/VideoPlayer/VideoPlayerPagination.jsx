import { useState } from "react";
import { Link } from "react-router-dom";
import "./VideoPlayer.scss";
import prev from "../../assets/images/video_arr-prev.svg";
import next from "../../assets/images/video_arr-next.svg";
import check from "../../assets/images/video_checked.svg";

function VideoPlayerPagination(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);
    // props.handleCheckButton();
  };

  return (
    <div className="video__nav">
      <Link className="video__button" to="/">
        <img src={prev} alt="video-prev" />
        <p>Предыдущее видео</p>
      </Link>
      {!isChecked ? (
        <div
          className="video__button"
          onClick={handleCheck}
        >
          <img src={check} alt="video-checked" />
          <p>Я посмотрела</p>
        </div>
      ) : (
        <Link className="video__button" to="/">
          <p>Следующее видео</p>
          <img src={next} alt="video-next" />
        </Link>
      )}
    </div>
  );
}

export default VideoPlayerPagination;
