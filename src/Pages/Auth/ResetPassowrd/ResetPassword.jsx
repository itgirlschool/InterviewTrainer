import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const [trueUser, setTrueUser] = useState(true);
  const [message, setMessage] = useState("");
  const usersObj = useSelector((state) => state.users);
  const auth = getAuth();

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    getCheck(data);
  };

  const getCheck = (data) => {
    const myArr = Object.values(usersObj.users);
    const result = myArr.filter((el) => el.email == data.email);
    if (result.length != 0) {
      return getPasswordReset(result[0].email);
    } else {
      return setTrueUser(false);
    }
  };

  const getPasswordReset = (resEmail) => {
    console.log(resEmail);
    console.log(typeof resEmail);
    setMessage(resEmail);
    sendPasswordResetEmail(auth, resEmail)
      .then(() => {
        console.log("Password reset email sent!", resEmail);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="reset__container">
      <form
        className={trueUser ? "form" : "hidden"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="header">Забыли пароль?</p>
        <input
          className="input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          placeholder="Ваш Email"
        />
        <div className={!message ? "hidden" : "message"}>
          <p>Ссылка для сброса пароля отправлена на {message}</p>
        </div>
        <div className={!errors.email ? "hidden" : "message__error"}>
          Ошибка формата ввода Email
        </div>
        <button
          className={!errors.email ? "button__submit" : "button__disabled"}
          type="submit"
        >
          Отправить на почту
        </button>
        <Link to="/login">
          <p className="button__back">Вернуться</p>
        </Link>
      </form>
      <div className={trueUser ? "hidden" : "form"}>
        <p className="header">E-mail не найден</p>
        <Link to="/signin">
          <p className="button__sighnin">Создать аккаунт</p>
        </Link>
        <button
          onClick={(e) => {
            setTrueUser(true);
          }}
          className="button__back"
        >
          Назад
        </button>
      </div>
    </div>
  );
}
