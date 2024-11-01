import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import getLogin from "./getLogin";
import "./LoginIn.scss";

export default function LoginIn() {
  const [loginError, setloginError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    getLogin(data.email, data.password, setloginError, navigate);
  };

  return (
    <>
      <div className="container__login">
        <div className="wrapper__login">
          <h1 className="login__greeting">
            Добро пожаловать в тренажер для подготовки к собеседованию
          </h1>
          <h3 className="title__login">Войти</h3>
          <form className="form-login__authorisation" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-usererror">
              {loginError ? "Неправильно указан Email и/или пароль" : ""}
            </p>
            {errors?.email?.type === "pattern" && (
              <p className="form-error">Неверный формат Email</p>
            )}
            {errors?.email?.type === "required" && (
              <p className="form-error">Это поле обязательно для заполнения</p>
            )}

            <input
              type="email"
              placeholder="Ваш Email"
              className="form-login__input"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
              })}
            />
            {errors?.password?.type === "required" && (
              <p className="form-error">Это поле обязательно для заполнения</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="form-error">Введите не менее 8 символов</p>
            )}

            <input
              type="password"
              placeholder="Ваш пароль"
              className="form-login__input"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                },
              })}
            />
            <div className="enter__login">
              <button type="submit" className="btn__login">
                Войти
              </button>
            </div>
            <div className="create-acc__option">
              <NavLink to="/signin">Создать аккаунт</NavLink>
            </div>
            <div className="reset-password__option">
              <NavLink to="/resetpassword">Забыли свой пароль?</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
