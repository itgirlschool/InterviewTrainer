import "./AutoTestsFirst.scss";
import {
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTests } from "../../../Services/fetchTests";
import LinkBack from "../../../Components/LinkBack/LinkBack";

export default function AutoTestsFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const tests = useSelector(state => state.autotests.tests);
  const status = useSelector(
    state => state.autotests.status,
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTests());
    }
  }, [dispatch]);

  useEffect(() => {
    if (
      tests.length > 0 &&
      pathname === "/gradingfirst/testsfirst"
    ) {
      navigate("/gradingfirst/testsfirst/1", {
        replace: true,
      });
    }
  }, [tests, pathname, navigate]);

  return (
    <div className="autotests">
      <div className="autotests__title">
        <LinkBack linkBack="/gradingfirst" />
      </div>
      <Outlet />
    </div>
  );
}
