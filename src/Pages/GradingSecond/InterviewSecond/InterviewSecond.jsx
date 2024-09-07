import { NavLink } from "react-router-dom";
import "./InterviewSecond.scss";

export default function InterviewSecond() {
  return (
    <div className="container-interview">
      <div className="title-interview">
        <NavLink to="#">
          Вернуться из интервью к градации
        </NavLink>
      </div>
    </div>
  );
}
