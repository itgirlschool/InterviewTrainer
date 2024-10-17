import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./GradeBlock.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../app/store/slice/UserAuthSlice";
import { updateUserProgress } from "../../Services/fbProgress";
import { resetBlockProgress } from "../../common/helpers/progressUpdate";

export default function GradeBlock({
  gradeName,
  blockTitle,
  blockDescription,
  blockPath,
  blockStartPath,
  blockProgressValue,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const progressArray = useSelector(state => state.userAuth.progress);
  const userID = useSelector(state => state.userAuth.id);
  const currentUserData = useSelector(state => state.userAuth);
  const usersData = useSelector(state => state.users);
  const usersList = usersData.users;

  const handleClick = async () => {
    const newProgress = resetBlockProgress(progressArray, {
      gradeName,
      blockName: blockPath,
    });
    const usersArray = Array.isArray(usersList) ? usersList : Object.values(usersList);
    const userIndex = usersArray.findIndex(
      user => user.id && user.id.trim() === userID.trim(),
    );
    const userEntry = usersArray[userIndex];

    await updateUserProgress(userEntry.key, newProgress);
    const updatedUserData = {
      ...currentUserData,
      progress: newProgress,
    };
    dispatch(setUser(updatedUserData));
    navigate(blockStartPath);
  };

  return (
    <>
      <h2 className="grading__container_title">{blockTitle}</h2>
      {blockProgressValue != 0 ? (
        <div className="progressBar">
          <div className="progressBar__title">
            <span>Пройдено: </span>
            <span className="progressBar__value">{blockProgressValue}</span>
            <span>%</span>
          </div>
          <div className="progressBar__outer">
            <div
              className="progressBar__inner"
              style={{ width: `${blockProgressValue}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div className="progressBar"></div>
      )}
      <div>{blockDescription}</div>
      {blockProgressValue === 0 ? (
        <div className="block__button">
          <Link className="button" to={blockPath}>
            Начать
          </Link>
        </div>
      ) : (
        <div className="block__button">
          <Link className="button" to={blockPath}>
            Продолжить
          </Link>
          {/* <Link className="button_startOver" to={blockStartPath} onClick={handleClick}>
            Начать заново
          </Link> */}
          <button className="button_startOver" onClick={handleClick}>
            Начать заново
          </button>
        </div>
      )}
    </>
  );
}
