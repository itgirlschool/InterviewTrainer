import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const [emailError, setEmailError] = useState(true);

  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    getCheck();
  };
  console.log(errors);

  const state = useSelector((state) => state.users);
  console.log(state);
  console.log(data);

  // // const myArr = [
  // //   { name: "Lena", emale: "lena1@mail.com" },
  // //   { name: "Dasha", emale: "dasha2@mail.com" },
  // //   { name: "Nina", emale: "Nina3@mail.com" },
  // // ];

  const auth = getAuth();
  console.log(auth);

  const getCheck = () => {
    const result = data.forEach((el) => {
      if (el.email == register.email) {
        setTrueUser(true);
        setMessage(el.email);
        sendPasswordResetEmail(auth, email)
          .then(() => {
            console.log("Password reset email sent!");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      } else {
        setTrueUser(false);
      }
    });
    console.log(data);
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
          Ссылка длля сброса пароля отправлена на {message}
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
      <div className={trueUser ? "hidden" : "false__email"}>
        <p className="header">E-mail не найден</p>
        <Link to="/signin">
          <p className="button__sighnin">Создать аккаунт</p>
        </Link>
      </div>
    </div>
  );
}

// - получение мейлов с сервера

// - сравнение мейла с массивом

// - Если мейл есть: генерация пароля, отправка письма на почту с паролем (если есть вызываем метод по смене пароля через почту (см FB))
