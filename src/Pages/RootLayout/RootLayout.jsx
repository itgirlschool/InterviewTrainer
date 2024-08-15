import "./RootLayout.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";

export default function RootLayout() {
  const [flag, setFlag] = useState(true);
  const [loader,setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SUBSCRIBE_TO_USERS",});

  }, [dispatch]);


  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch({ type: "SUBSCRIBE_TO_USER",emailUser:user.email});
        navigate("/home");
        return
      }
      navigate('login')
    })
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/signin" ||
      location.pathname === "/resetpassword"
    ) {
      setFlag(false);
      return;
    }
    setFlag(true);
  }, [location.pathname]);



  return (
    <div>
      {flag && (
        <div className="container_header">
          <Header />
        </div>
      )}
      <div className="container_main">
        <Outlet />
      </div>
      {flag && (
        <div className="container_footer">
          <Footer />
        </div>
      )}
    </div>
  );
}
