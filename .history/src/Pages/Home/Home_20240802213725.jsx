import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.scss";
import { app, realtimeDb } from "../../../firebaseConfig"; 

export default function Home() {
  return <div>Home</div>;
}
