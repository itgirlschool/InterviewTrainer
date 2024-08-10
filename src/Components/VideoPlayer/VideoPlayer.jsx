import React, { useRef } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer.js";
import "./VideoPlayer.scss";
import play from "../../assets/images/player_play.svg";
import pause from "../../assets/images/player_pause.svg";
import mute from "../../assets/images/player_mute.svg";
import unmute from "../../assets/images/player_unmute.svg";

function VideoPlayer() {
  const videoElement = useRef(null);

  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <React.Fragment>
      <div className="container">
        <div className="video__wrapper">
          <video
            src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1"
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
            onClick={togglePlay}
          />
          <div className="controls">
            <button
              className="controls__action"
              onClick={togglePlay}
            >
              {playerState.isPlaying ? (
                <img src={pause} alt="pause" />
              ) : (
                <img src={play} alt="play" />
              )}
            </button>
            <input
              className="controls__progress"
              type="range"
              min="0"
              max="100"
              value={playerState.progress}
              onChange={e => handleVideoProgress(e)}
            />
            <select
              className="controls__velocity"
              value={playerState.speed}
              onChange={e => handleVideoSpeed(e)}
            >
              <option value="0.50">0.50x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="2">2x</option>
            </select>
            <button
              className="controls__mute"
              onClick={toggleMute}
            >
              {playerState.isMuted ? (
                <img src={mute} alt="mute" />
              ) : (
                <img src={unmute} alt="unmute" />
              )}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoPlayer;
