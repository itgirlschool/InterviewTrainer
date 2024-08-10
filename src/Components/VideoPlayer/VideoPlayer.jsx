import React, { useRef } from "react";
import useVideoPlayer from "../../hooks/useVideoPlayer.js";
import "./VideoPlayer.scss";
import play from "../../assets/images/player_play.svg";
import pause from "../../assets/images/player_pause.svg";
import mute from "../../assets/images/player_mute.svg";
import unmute from "../../assets/images/player_unmute.svg";

function VideoPlayer() {
  const videoElement = useRef(null);
  return (
    <React.Fragment>
      <video
        src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1"
        ref={videoElement}
      />
    </React.Fragment>
  );
}

export default VideoPlayer;
