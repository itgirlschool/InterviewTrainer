import React, { useRef } from "react";

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
