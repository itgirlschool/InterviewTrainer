import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TheoryFirst.scss";
import { fetchTheoryFirst } from "../../../Services/fetchTheoryFirst.js";
import ThemeNavBar from "../../../Components/ThemeNavBar/ThemeNavBar.jsx";

export default function TheoryFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theoryFirst = useSelector(state => state.theoryFirst.theoryFirst);
  const status = useSelector(state => state.theoryFirst.status);
  const error = useSelector(state => state.theoryFirst.error);
  const { pathname } = useLocation();
  const [gradeName, blockName] = pathname.split("/").slice(1);
  const [navBarIsHidden, setNavBarIsHidden] = useState(false);
  const progressItem = useSelector(state => {
    const grade = state.userAuth.progress.find(grade => grade.gradeName === gradeName);
    return grade?.blocks?.find(block => block.blockName === blockName)?.lastItem || 0;
  });

  useEffect(() => {
    const nextTheme =
      progressItem > 0 && progressItem < theoryFirst.length
        ? Number(progressItem) + 1
        : 1;

    // navigate(`/gradingfirst/theoryfirst/${nextTheme}`, { replace: true });

    if (pathname === `/gradingfirst/theoryfirst`) {
      if (status === "idle") {
        dispatch(fetchTheoryFirst())
          .unwrap()
          .then(() => {
            navigate(`/gradingfirst/theoryfirst/${nextTheme}`, { replace: true });
          })
          .catch(error => {
            console.error("Ошибка загрузки теории:", error);
          });
      } else {
        navigate(`/gradingfirst/theoryfirst/${nextTheme}`, { replace: true });
      }
    }
  }, [dispatch, status, theoryFirst, pathname, navigate, progressItem]);

  const toggleNavBar = () => {
    setNavBarIsHidden(!navBarIsHidden);
  };
  return (
    <div>
      <div className="theoryPage">
        <div className="theoryPage__title">
          <Link className="theoryPage__mainlink" to="/gradingfirst">
            Вернуться назад к градации
          </Link>
        </div>
        {status === "loading" ? (
          <div className="loader">Загрузка теории...</div>
        ) : (
          <div
            className={navBarIsHidden ? "theoryPage__main__modified" : "theoryPage__main"}
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
        )}
      </div>
    </div>
  );
}
