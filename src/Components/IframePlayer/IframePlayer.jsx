import React, { useEffect, useRef, useState } from "react";
import "./IframePlayer.scss";
import star from "../../assets/images/background_star.svg";
import IframePlayerPagination from "./IframePlayerPagination";

function IframePlayer({ currentVideo }) {
  const playerRef = useRef(null);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    // Инициализации YouTube плеера
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new YT.Player("youtube-player", {
        videoId: currentVideo,
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // Загрузка YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag =
        document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(
        tag,
        firstScriptTag,
      );
      window.onYouTubeIframeAPIReady =
        onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    // Очистка при изменении видео
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [currentVideo]);

  //Функция отслеживания завершения видео
  const onPlayerStateChange = event => {
    if (event.data === YT.PlayerState.ENDED) {
      handleEnded();
    }
  };

  const handleEnded = () => {
    setIsEnded(true);
  };

  return (
    <div className="video__container">
      <img
        className="bg-image__star"
        src={star}
        alt="star_video"
      />
      <div id="youtube-player"></div>
      <IframePlayerPagination isEnded={isEnded} />
    </div>
  );
}

export default IframePlayer;
