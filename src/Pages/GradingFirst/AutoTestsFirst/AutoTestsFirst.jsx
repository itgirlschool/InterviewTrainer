import "./AutoTestsFirst.scss";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTests } from "../../../Services/fetchTests";
import LinkBack from "../../../Components/LinkBack/LinkBack";
import findCorrectAnswersInSlice from "../../../common/helpers/findCorrectAnswersInSlice.js";
import { addCorrectAnswers } from "../../../app/store/slice/AutoTestsSlice";

export default function AutoTestsFirst() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const tests = useSelector(state => state.autoTests.tests);
  const status = useSelector(state => state.autoTests.status);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTests());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (tests.length > 0) {
      const correctAnswers = findCorrectAnswersInSlice(tests);
      dispatch(addCorrectAnswers(correctAnswers));
    }
  }, [tests]);

  useEffect(() => {
    if (tests.length > 0 && progressItem !== undefined) {
      const nextTest =
        progressItem > 0 && progressItem < tests.length ? Number(progressItem) + 1 : 1;
      if (pathname === `/gradingfirst/testsfirst`) {
        navigate(`/gradingfirst/testsfirst/${nextTest}`, { replace: true });
      }
    }
  }, [tests, pathname, navigate, progressItem]);

  return (
    <div className="autotests">
      <div className="autotests__title">
        <LinkBack linkBack="/gradingfirst" />
      </div>
      <Outlet />
    </div>
  );
}
