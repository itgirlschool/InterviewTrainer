import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");
  const [user, setUser] = useState(true);

  const onSubmit = (data) => setData(JSON.stringify(data));
  console.log(errors);

  const state = useSelector((state) => state.users);
  console.log(state);
  console.log(data);

  // // const myArr = [
  // //   { name: "Lena", emale: "lena1@mail.com" },
  // //   { name: "Dasha", emale: "dasha2@mail.com" },
  // //   { name: "Nina", emale: "Nina3@mail.com" },
  // // ];

  // const handleChange = () => {};

  // const getSignIn = () => {
  //   //переход на страницу регистрации
  // };

  // const getCheck = () => {
  //   console.log(data);
  //   //вызов массива и сравнение
  // };

  return (
    <div className="reset__container">
      <form
        className={user ? "form" : "hidden"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="header">Забыли пароль?</p>
        <input
          className="input"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          placeholder="Ваш Email"
        />
        <button className="button__submit" type="submit">
          Отправить на почту
        </button>
        <Link to="/login">
          <button className="button__back">Вернуться</button>
        </Link>
      </form>
      <div className={user ? "hidden" : "false__email"}>
        <p className="header">E-mail не найден</p>
        <Link to="/signin">
          <button className="button__sighnin">Создать аккаунт</button>
        </Link>
      </div>
    </div>
  );
}

// - страница с инпутом(скрытый текст имейл), Заголовок "Забыли пароль?"; ++++

// - валидация имейла ++++

// - получение мейлов с сервера

// - сравнение мейла с массивом

// - Если мейл есть: генерация пароля, отправка письма на почту с паролем (если есть вызываем метод по смене пароля через почту (см FB))

// - Если мейла нет: окно мейл не найден, пройдите регистрацию, кнопка "зарегистрироваться" отправляет на окно регистрации
