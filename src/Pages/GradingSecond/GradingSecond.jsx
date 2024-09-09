import {
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";

export default function GradingSecond() {
  const location = useLocation();
  const showNavigation =
    location.pathname === "/gradingsecond";

  return (
    <div>
      {showNavigation && (
        <Link className="button" to="interviewsecond">
          Собеседования
        </Link>
      )}
      <Outlet />
    </div>
  );
}
