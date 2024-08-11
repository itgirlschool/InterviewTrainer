import React, { useRef } from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import "./VideoPlayer.scss";

function VideoTest() {
  return (
    <React.Fragment>
      <div className="container">
        <VideoPlayerInner src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1" />
      </div>
    </React.Fragment>
  );
}

export default VideoTest;
