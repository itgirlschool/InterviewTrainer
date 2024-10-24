import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import getRegister from './getRegister.jsx';
import "./SignIn.scss";


export default function SignIn() {
  const [userError, setUserError] = useState(false);
  const [errorInfo, setErrorInfo] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    getRegister(data, setUserError, navigate);
  };

  const passw = watch("password");

  useEffect(() => {
    if (userError == true) {
      setErrorInfo('Данный Email уже существует');
    }
  }, [userError])


  return (
    <div className="container__signin">
      <div className="wrapper__signin">
        <h3 className="title__signin">Регистрация</h3>
        <form className="form-signin__registration"
          onSubmit={handleSubmit(onSubmit)}>
          {errors?.firstName?.type === "required" && <p className="form-error">Это поле обязательно для заполнения</p>}
          {errors?.firstName?.type === "maxLength" && (
            <p className="form-error">Введите не более 20 символов</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className="form-error">Используйте кириллицу или латинские буквы</p>
          )}

          <input type="text"
            placeholder="Ваше имя"
            className="form-signin__input"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /(?:\s|^)[а-яА-ЯA-Za-z\-\.\_]+(?:\s|$)/i

            })}
          />
          {errors?.lastName?.type === "required" && <p className="form-error">Это поле обязательно для заполнения</p>}
          {errors?.lastName?.type === "maxLength" && (
            <p className="form-error">Введите не более 20 символов</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p className="form-error">Используйте кириллицу или латинске буквы</p>
          )}

          <input type="text"
            placeholder="Ваша фамилия"
            className="form-signin__input"

            {...register("lastName",
              {
                required: true,
                maxLength: 20,
                pattern: /(?:\s|^)[а-яА-ЯA-Za-z\-\.\_]+(?:\s|$)/i

              })}
          />

          {errors?.email?.type === "pattern" && (
            <p className="form-error">Неверный формат Email</p>
          )}
          {errors?.email?.type === "required" && (
            <p className="form-error">Это поле обязательно для заполнения</p>
          )}
          <p className="form-usererror">{userError ? errorInfo : ''}</p>
          <input type="email"
            placeholder="Ваш Email"
            className="form-signin__input"

            {...register("email",
              {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
              })}
          />
          {errors?.password?.type === "required" && (
            <p className="form-error">Это поле обязательно для заполнения</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className="form-error">Пароль должен содержать только латинские буквы верхнего и нижнего регистров, цифры и символы</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="form-error">Введите не менее 8 символов</p>
          )}

          <input
            name="password"
            type="password"
            placeholder="Ваш пароль"
            className="form-signin__input"
            {...register("password",
              {
                required: true,
                minLength: {
                  value: 8
                },
                pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,}$/
              })}
          />

          {errors?.confirmPassword?.type === "required" && (
            <p className="form-error">Это поле обязательно для заполнения</p>
          )}
          {errors?.confirmPassword?.type === "pattern" && (
            <p className="form-error">Пароль должен содержать только латинские буквы верхнего и нижнего регистров, цифры и символы</p>
          )}
          {errors?.confirmPassword?.type === "minLength" && (
            <p className="form-error">Введите не менее 8 символов</p>
          )}


          <input
            name="confirmPassword"
            type="password"
            placeholder="Повторите пароль"
            className="form-signin__input"
            {...register("confirmPassword",
              {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,}$/,
                validate: value =>
                  value === passw || "Пароли не совпадает"
              },
            )}
          />

          {errors.confirmPassword && (errors.confirmPassword.type === "validate" && <p className="form-error error_password">Пароли не совпадают</p>)}

          <div className="save__sighin" >
            <button type="submit"
              className="btn__signin"

            >
              Сохранить</button>
          </div>
          <div className="enter__signin">
            <NavLink to="/login">Вход</NavLink>
          </div>
          {userError ? <div className="reset-password__option">
            <NavLink to="/resetpassword">Забыли свой пароль?</NavLink>
          </div> : <div></div>}
        </form>
      </div >
    </div >
  )
}
