import { Outlet, useLocation } from "react-router-dom";
import GradeBlock from "../../Components/GradeBlock/GradeBlock";
import "./GradingSecond.scss"

export default function GradingSecond({
  videoDescription,
  videoPath,
  title,
}
  
) {
  const location = useLocation();

  const showNavigation =
    location.pathname === "/gradingsecond";

  return (
    <div>
      
    {showNavigation && (
      <div className="grading__container">
        <div className="grading__intro">
          <div className="welcome_title">
            <h1> Junior</h1>
            <p className="wecome_text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  </p>

          </div>

        </div>
      <div className="grading__contents">
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
        <div className="grading__contents_block">
          <GradeBlock
          title={title}
          videoDescription={videoDescription}
          videoPath={videoPath}
        />
        </div>
      </div>
      </div>)}

    <Outlet />
  </div>
);
}
