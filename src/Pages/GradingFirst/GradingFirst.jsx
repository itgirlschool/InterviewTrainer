import { Outlet, useLocation } from "react-router-dom";


export default function GradingFirst() {
  const location = useLocation();

  const showNavigation =
    location.pathname === "/gradingfirst";

  return (
    <div>

    </div>
  );
}
