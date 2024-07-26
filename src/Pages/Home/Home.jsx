import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import { app, realtimeDb } from "../../../firebaseConfig"; 

export default function Home() {
  const navigate = useNavigate();

  const handleSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="home">
      <h1 className="welcome-title">Добро пожаловать, USER!</h1>
      <p className="intro-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverра maecenas accumsan lacus vel facilisis.
      </p>
      <div className="grade-container">
        <div className="grade junior">
          <h2>Junior</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverра maecenas accumsan lacus vel facilisis.</p>
          <button onClick={() => handleSelect('/gradingfirst')}>Выбрать</button>
        </div>
        <div className="grade middle">
          <h2>Middle</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverра maecenas accumsan lacus vel facilisis.</p>
          <button onClick={() => handleSelect('/gradingsecond')}>Выбрать</button>
        </div>
        <div className="grade senior">
          <h2>Senior</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverра maecenas accumsan lacus vel facilisis.</p>
          <button onClick={() => handleSelect('/gradingthird')}>Выбрать</button>
        </div>
      </div>
    </div>
  );
}
