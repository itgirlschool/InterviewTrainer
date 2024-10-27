import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./InterviewFirst.scss";
import { fetchInterviews } from "../../../Services/fetchInterviews.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function InterviewFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videos = useSelector(state => state.interviews.interviews);
  const status = useSelector(state => state.interviews.status);
  const error = useSelector(state => state.interviews.error);
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const [navBarIsHidden, setNavBarIsHidden] = useState(false);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  useEffect(() => {
    if (videos.length > 0 && progressItem !== undefined) {
      const nextVideo =
        progressItem > 0 && progressItem < videos.length ? Number(progressItem) + 1 : 1;
      if (pathname === `/gradingfirst/interviewfirst`) {
        navigate(`/gradingfirst/interviewfirst/${nextVideo}`, { replace: true });
      }
    } else if (videos.length === 0) {
      dispatch(fetchInterviews())
        .unwrap()
        .catch(error => {
          console.error("Ошибка загрузки видео:", error);
        });
    }
    // апарпеп
  }, [dispatch, status, pathname, navigate, progressItem, videos.length]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };

  return (
    <div>
      <div className="videoPage">
        <div className="videoPage__title">
          <Link className="videoPage__mainlink" to="/gradingfirst">
            Вернуться назад к градации
          </Link>
        </div>
        <div className={navBarIsHidden ? "videoPage__main__modified" : "videoPage__main"}>
          <ThemeNavBar
            data={videos || []}
            error={error}
            status={status}
            pagePath="interviewfirst"
            gradingPath="gradingfirst"
            toggleNavBar={toggleNavBar}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
