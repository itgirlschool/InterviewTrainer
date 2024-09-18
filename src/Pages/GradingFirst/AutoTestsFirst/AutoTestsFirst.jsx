import "./AutoTestsFirst.scss";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTests } from "../../../Services/fetchTests";
import LinkBack from "../../../Components/LinkBack/LinkBack";
import findCorrectAnswersInSlice from "../../../common/helpers/findCorrectAnswersInSlice";
import { addCorrectAnswers } from "../../../app/store/slice/AutoTestsSlice";

export default function AutoTestsFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const tests = useSelector(state => state.autoTests.tests);
  const status = useSelector(state => state.autoTests.status);
  const isAuth = useSelector(state => state.userAuth.isAuth);
  const userAutoTestsProgress = useSelector(state => state.userAutoTests.userProgress);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTests());
    }
  }, [dispatch]);

  useEffect(() => {
    if (tests.length > 0) {
      const correctAnswers = findCorrectAnswersInSlice(tests);
      dispatch(addCorrectAnswers(correctAnswers));
    }
  }, [tests]);

  // вариант без сохранения прогресса и возврата к нему
  useEffect(() => {
    if (tests.length > 0 && pathname === "/gradingfirst/testsfirst") {
      navigate("/gradingfirst/testsfirst/1", {
        replace: true,
      });
    }
  }, [tests, pathname, navigate]);

  //вариант с сохранением прогресса
  // useEffect(() => {
  //   if (
  //     tests.length > 0 &&
  //     pathname === "/gradingfirst/testsfirst" &&
  //     userAutoTestsProgress &&
  //     isAuth
  //   ) {
  //     navigate(`/gradingfirst/testsfirst/${userAutoTestsProgress + 1}`, {
  //       replace: true,
  //     });
  //   } else if (
  //     tests.length > 0 &&
  //     pathname === "/gradingfirst/testsfirst" &&
  //     !userAutoTestsProgress
  //   ) {
  //     navigate("/gradingfirst/testsfirst/1", {
  //       replace: true,
  //     });
  //   }
  // }, [tests, pathname, navigate]);

  return (
    <div className="autotests">
      <div className="autotests__title">
        <LinkBack linkBack="/gradingfirst" />
      </div>
      <Outlet />
    </div>
  );
}
