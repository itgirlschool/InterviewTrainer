import "./VideoPlayer.scss";

function VideoPlayerInner({ src, videoRef }) {
  return (
    <div className="video__wrapper">
      <video ref={videoRef} controls>
        <source src={src} type="video/mp4" />
        <p>Ваш браузер не поддерживает видео</p>
      </video>
    </div>
  );
}
export default VideoPlayerInner;
