import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.scss";
import arrow_heart from "../../assets/images/arrow_heart.svg";
import cat from "../../assets/images/cat_home.png";
import { app, realtimeDb } from "../../../firebaseConfig";
import { useDispatch } from "react-redux";
import { setUser } from "../../app/store/slice/UserAuthSlice";
import { updateUserProgress } from "../../Services/fbProgress";
import { resetTotalProgress } from "../../common/helpers/progressUpdate";

export default function Home() {
  const navigate = useNavigate();
  const { displayName } = useSelector(state => state.userAuth);
  const progressArray = useSelector(state => state.userAuth.progress);
  const userID = useSelector(state => state.userAuth.id);
  const currentUserData = useSelector(state => state.userAuth);
  const usersData = useSelector(state => state.users);
  const usersList = usersData.users;

  const handleSelect = path => {
    navigate(path);
  };
  const dispatch = useDispatch();

  const gradeIntern = useSelector(state =>
    state.userAuth.progress.find(g => g.gradeName === "gradingfirst"),
  );
  const gradeJunior = useSelector(state =>
    state.userAuth.progress.find(g => g.gradeName === "gradingsecond"),
  );
  const gradeMiddle = useSelector(state =>
    state.userAuth.progress.find(g => g.gradeName === "gradingthird"),
  );
  const progressIntern = gradeIntern?.totalProgress || 0;
  const progressJunior = gradeJunior?.totalProgress || 0;
  const progressMiddle = gradeMiddle?.totalProgress || 0;

  const handleStartOver = async gradeName => {
    const newProgress = resetTotalProgress(progressArray, {
      gradeName,
    });
    const usersArray = Array.isArray(usersList) ? usersList : Object.values(usersList);
    const userIndex = usersArray.findIndex(
      user => user.id && user.id.trim() === userID.trim(),
    );
    const userEntry = usersArray[userIndex];

    const updatedProgress = await updateUserProgress(userEntry.key, newProgress);
    const updatedUserData = {
      ...currentUserData,
      progress: updatedProgress,
    };
    dispatch(setUser(updatedUserData));
    navigate(`/${gradeName}`);
  };

  return (
    <div className="home">
      <div className="home__intro">
        <div>
          <div className="welcome__title">
            <h1>Начнем готовиться к собеседованию</h1>
            <p className="welcome__text">
              Тренажер предлагает практические задания и вопросы, которые помогут вам
              подготовиться к собеседованиям разного уровня — от Junior до Senior. Начните
              подготовку к собеседованию уже сегодня и сделайте шаг к успешной карьере в
              сфере frontend-разработки!
            </p>
          </div>
          <div className="grade intern">
            <h2>Front-end developer</h2>
            {progressIntern != 0 ? (
              <div className="progressBar">
                <div className="progressBar__title">
                  <span>Пройдено: </span>
                  <span className="progressBar__value">{progressIntern}</span>
                  <span>%</span>
                </div>
                <div className="progressBar__outer">
                  <div
                    className="progressBar__inner"
                    style={{ width: `${progressIntern}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="progressBar"></div>
            )}
            <p>
              Используя наш тренажер ты сможешь закрепить знания по основным принципам
              веб-разработки, такие как HTML, CSS и JavaScript. Ты познакомишься с
              типичными вопросами и заданиями, которые могут быть заданы на
              собеседованиях, для начинающих разработчиков.
            </p>
            {progressIntern === 0 ? (
              <div className="block__button">
                <button
                  className="home__button"
                  onClick={() => handleSelect("/gradingfirst")}
                >
                  Выбрать
                </button>
              </div>
            ) : (
              <div className="block__button">
                <button
                  className="home__button"
                  onClick={() => handleSelect("/gradingfirst")}
                >
                  Продолжить
                </button>
                <button
                  className="button_startOver"
                  onClick={() => handleStartOver("gradingfirst")}
                >
                  Начать сначала
                </button>
              </div>
            )}
          </div>
        </div>
        <img className="cat__arrow" src={arrow_heart} alt="Стрелка" />
        <img className="cat" src={cat} alt="Кот с компьютером" />
      </div>
    </div>
  );
}
