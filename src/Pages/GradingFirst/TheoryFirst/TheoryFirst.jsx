import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TheoryFirst.scss";
import { fetchTheoryFirst } from "../../../Services/fetchTheoryFirst.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function TheoryFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theoryFirst = useSelector(
    state => state.theoryFirst.theoryFirst,
  );
  const status = useSelector(
    state => state.theoryFirst.status,
  );
  const error = useSelector(
    state => state.theoryFirst.error,
  );

  const { pathname } = useLocation();
  const [navBarIsHidden, setNavBarIsHidden] =
    useState(false);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTheoryFirst());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (
      theoryFirst.length > 0 &&
      pathname === "/gradingfirst/theoryfirst"
    ) {
      navigate("/gradingfirst/theoryfirst/1", {
        replace: true,
      });
    }
  }, [theoryFirst, pathname, navigate]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };
  return (
    <div>
      <div className="theoryPage">
        <div className="theoryPage__title">
          <Link
            className="theoryPage__mainlink"
            to="/gradingfirst"
          >
            Вернуться назад к градации
          </Link>
        </div>
        <div
          className={
            navBarIsHidden
              ? "theoryPage__main__modified"
              : "theoryPage__main"
          }
        >
          <ThemeNavBar
            data={theoryFirst || []}
            error={error}
            status={status}
            pagePath="theoryfirst"
            gradingPath="gradingfirst"
            toggleNavBar={toggleNavBar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
