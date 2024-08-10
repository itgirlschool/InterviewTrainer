import {
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import "./GradingFirst.scss";

export default function GradingFirst() {
  const location = useLocation();

  const showNavigation =
    location.pathname === "/gradingfirst";

  return (
    <div>
      {showNavigation && (
        <>
          <h2>Градация 1</h2>
          <div>
            <Link to="videofirst">Видео</Link>
            <p>Теория</p>
            <p>Тесты</p>
          </div>
        </>
      )}

      <Outlet />
    </div>
  );
}
