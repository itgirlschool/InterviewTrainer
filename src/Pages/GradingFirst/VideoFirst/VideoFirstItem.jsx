import { useParams } from "react-router-dom";
import VideoPlayer from "../../../Components/VideoPlayer/VideoPlayer";

export default function VideoFirstItem() {
  const { id } = useParams();
  const src =
    "https://www.dropbox.com/scl/fi/18rvmy0g56n5wveytynuq/.mp4?rlkey=xita2x1j1tc04f3fm6nzqjz3v&st=mol9u7ps&dl=1";
  return <VideoPlayer id={id} src={src} />;
}
