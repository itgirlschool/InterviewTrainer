import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import { app, realtimeDb } from "../../../firebaseConfig";
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: '', lastName: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      const db = getDatabase();
      const userId = localStorage.getItem('userId');

      if (userId) {
        const userDataSnapshot = await db.ref(`users/${userId}`).get();

        if (userDataSnapshot.exists()) {
          setUser(userDataSnapshot.val());
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <WelcomeMessage firstName={user.firstName} lastName={user.lastName} />
      <p className="intro-text"> Наш тренажер собеседований — это идеальный инструмент для всех, кто хочет уверенно подготовиться к прохождению собеседований на позицию frontend-разработчика. Мы понимаем, что собеседования могут вызывать стресс и неопределенность, и именно поэтому мы создали платформу, которая поможет вам улучшить свои навыки, укрепить уверенность и успешно пройти собеседование. Тренажер предлагает практические задания и вопросы, которые помогут вам подготовиться к собеседованиям разного уровня — от Junior до Senior. Начните подготовку к собеседованию уже сегодня и сделайте шаг к успешной карьере в сфере frontend-разработки! </p>
      <div className="grade-container">
        <div className="grade junior">
          <h2>Junior</h2>
          <p>Тренажер предлагает вопросы, которые помогут закрепить основные принципы веб-разработки, такие как HTML, CSS и JavaScript. Вы познакомитесь с типичными вопросами и заданиями, которые могут быть заданы на собеседованиях для начинающих разработчиков.</p>
          <button
            className="home__button"
            onClick={() => handleSelect('/gradingfirst')}>Выбрать</button>
        </div>
        <div className="grade middle">
          <h2>Middle</h2>
          <p>Тренажер включает более сложные вопросы, касающиеся разных технологий (например, React, TypeScript ), задачи на оптимизацию производительности и работу с API. Вы сможете изучить вопросы, касающиеся проектирования приложений и выбора технологий, что важно для среднего уровня.</p>
          <button
            className="home__button"
            onClick={() => handleSelect('/gradingsecond')}>Выбрать</button>
        </div>
        <div className="grade senior">
          <h2>Senior</h2>
          <p> Вы будете сталкиваться с вопросами, касающимися проектирования систем, управления командами и решения сложных задач. Тренажер поможет развить навыки эффективной коммуникации и лидерства, что является ключевым для senior-разработчиков, отвечающих за направления своей команды.</p>
          <button
            className="home__button"
            onClick={() => handleSelect('/gradingthird')}>Выбрать</button>
        </div>
      </div>
    </div>
  );
}
