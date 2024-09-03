import { Outlet, useLocation } from "react-router-dom";
import GradeContents from "../../Components/GradeContents/GradeContents";

export default function GradingFirst() {
  const location = useLocation();

  const showNavigation =
    location.pathname === "/gradingfirst";

  return (
    <div>
      {showNavigation && (
        <GradeContents
          grading="Градация 1"
          gradeDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit."
          videoPath="videofirst"
          theoryPath="/"
          testsPath="testsfirst"
          videoDescription="Description for videos: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          theoryDescription="Description for theory: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
          testsDescription="Description for autotests: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
        />
      )}

      <Outlet />
    </div>
  );
}
