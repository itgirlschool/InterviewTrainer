import { Link } from "react-router-dom";
import "./LinkBack.scss";

export default function LinkBack({ linkBack }) {
  return (
    <Link className="linkBack" to={linkBack}>
      Вернуться к градации
    </Link>
  );
}
