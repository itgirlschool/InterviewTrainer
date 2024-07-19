import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Забыли пароль?</p>
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          type="text"
          placeholder="Ваш Email"
        />
        <button type="submit">Отправить на почту</button>
        <button>Вернуться</button>
      </form>
      <div className="hidden">
        <p>E-mail не найден</p>
        <button>Создать аккаунт</button>
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
