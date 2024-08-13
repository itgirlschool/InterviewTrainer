import React from "react";
import VideoPlayerInner from "./VideoPlayerInner.jsx";
import VideoPlayerPagination from "./VideoPlayerPagination.jsx";
import ThemeNavBar from "../ThemeNavBar/ThemeNavBar.jsx";
import "./VideoPlayer.scss";
import testData from "./test_data.json";

function VideoPlayer() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="themeNavBar__container">
          <ThemeNavBar themeArray={testData} />
        </div>
        <div className="video__container">
          <VideoPlayerInner src="https://www.dropbox.com/scl/fi/wju7gayfi0px8x1u4vcch/.mp4?rlkey=kv78rg1o21jzpueqjp5xpa3zl&st=h242md6n&dl=1" />
          <VideoPlayerPagination />
        </div>
      </div>
    </React.Fragment>
  );
}

export default VideoPlayer;
