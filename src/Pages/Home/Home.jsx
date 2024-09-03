import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.scss";
import cat_grade from "../../assets/images/cat_page_grades.svg";
import arrow_heart from "../../assets/images/arrow_heart.svg";
import salute from "../../assets/images/lines.png"
import { app, realtimeDb } from "../../../firebaseConfig";

export default function Home() {
  const navigate = useNavigate();
  const { displayName } = useSelector((state) => state.userAuth);
  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <div className="home__intro">
        <div className="welcome__title">
          <h1>Выбор градации</h1>
          <p className="welcome__text">
            Тренажер предлагает практические задания и вопросы, которые помогут
            вам подготовиться к собеседованиям разного уровня — от Junior до
            Senior. Начните подготовку к собеседованию уже сегодня и сделайте
            шаг к успешной карьере в сфере frontend-разработки! Начни с уровня
            Intern.
          </p>
        </div>
          <img className="cat__arrow" src={arrow_heart} alt="Выберите градацию" />
          <img className="cat__withlaptop" src={cat_grade} alt="Выберите градацию" />
      </div>
      <div className="grade-container">
        <div className="grade junior">
          <h2>Intern</h2>
          <p>
            В этой градации ты сможешь закрепить знания по основным принципам
            веб-разработки, такие как HTML, CSS и JavaScript. Ты познакомишься с
            типичными вопросами и заданиями, которые могут быть заданы на
            собеседованиях, для начинающих разработчиков.
          </p>
          <button
            className="home__button"
            onClick={() => handleSelect("/gradingfirst")}
          >
            Выбрать
          </button>
        </div>
        <div className="grade middle">
          <h2>Junior</h2>
          <p>
            Тренажер включает более сложные вопросы, касающиеся разных
            технологий (например, React, TypeScript), задачи на оптимизацию
            производительности и работу с API. Ты сможешь изучить вопросы,
            касающиеся проектирования приложений и выбора технологий, что важно
            для среднего уровня.
          </p>
          <button
            className="home__button"
            onClick={() => handleSelect("/gradingsecond")}
          >
            Выбрать
          </button>
        </div>
        <div className="grade senior">
          <h2>Middle</h2>
          <p>
            Ты будешь сталкиваться с вопросами, касающ имися проектирования
            систем, управления командами и решения сложных задач. Тренажер
            поможет развить навыки эффективной коммуникации и лидерства, что
            является ключевым для senior-разработчиков, отвечающих за
            направления своей команды.
          </p>
          <button
            className="home__button"
            onClick={() => handleSelect("/gradingthird")}
          >
            Выбрать
          </button>
        </div>
      </div>
    </div>
  );
}
