import "./VideoPlayer.scss";

function VideoPlayerInner({ src, videoRef }) {
  return (
    <video ref={videoRef} controls>
      <source src={src} type="video/mp4" />
      <p>Ваш браузер не поддерживает видео</p>
    </video>
  );
}
export default VideoPlayerInner;
