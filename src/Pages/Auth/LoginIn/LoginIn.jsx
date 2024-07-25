import { CloseCircleOutlined } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import { useState } from "react";
import getLogin from './getLogin';
import "./LoginIn.scss";

export default function LoginIn() {
  const [loginError, setloginError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    getLogin(data.email, data.password, setloginError);
    reset();
  };

  const handleCrossBtnClick = () => {
    setloginError(false);
  }

  return (
    <>
      <div className={loginError ? "modal__login" : "modal__login none"}>
        <div className="cross-wrapper__login" onClick={handleCrossBtnClick}>
          <div className="crossbtn__login" >
            <span className="crossbtn-x"><CloseCircleOutlined className="icon" /></span>
          </div>
        </div>
        <div className="text-login__wrapper">
          <p className="text-login">Email не найден</p>
        </div>
        <div className="create-acc__login">
          <a className="create-acc">Создать аккаунт</a>
        </div>

      </div>
      <div className="container__login">
        <div className="wrapper__login">
          <h3 className="title__login">Войти</h3>

          <form
            className="form-login__authorisation"
            onSubmit={handleSubmit(onSubmit)}>

            {errors?.email?.type === "pattern" && (
              <p className="form-error">Эмейл не соответствует проверке</p>
            )}
            {errors?.email?.type === "required" && (
              <p className="form-error">Необходимо ввести эмейл</p>
            )}

            <input type="email"
              placeholder="Ваш Email"
              className="form-login__input"

              {...register("email",
                {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
                })}
            />

            {errors?.password?.type === "required" && (
              <p className="form-error">Необходимо ввести пароль</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="form-error">Cимволы: A-Z,!@,0-9,a-z</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="form-error">Пароль должен содержать не меньше 8 символов</p>
            )}

            <input type="password"
              placeholder="Ваш пароль"
              className="form-login__input"
              {...register("password",
                {
                  required: true,
                  minLength: {
                    value: 8
                  },
                  pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,}$/
                })}
            />

            <div className="enter__login">
              <button type="submit"
                className="btn__login">Войти</button>
            </div>
            <div className="extra__options">
              <a className="option">Создать аккаунт</a>
              <a className="option">Забыли свой пароль?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
