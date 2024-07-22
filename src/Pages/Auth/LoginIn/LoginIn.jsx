import { CloseCircleOutlined } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import "./LoginIn.scss";

export default function LoginIn() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);
    form.reset();


  };

  return (
    <>
      <div className="container__login">
        <div className="cross-wrapper__login">
          <div className="crossbtn__login">
            <span className="crossbtn-x"><CloseCircleOutlined className="icon" /></span>
          </div>
        </div>
        <div className="wrapper__login">
          <h3 className="title__login">Войти</h3>

          <form action=""
            className="form-login__authorisation"
            name="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/*Вывод ошибки если не проходит проверку на валидацию*/}
            {errors?.email?.type === "pattern" && (
              <p className="form-error">Эмейл не соответствует проверке</p>
            )}
            {errors?.email?.type === "required" && (
              <p className="form-error">Необходимо ввести эмейл</p>
            )}

            {/*Сам input*/}
            <input type="email"
              placeholder="Ваш Email"
              className="form-login__input"

              {...register("email",
                {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
                })}
            />

            {/*Вывод ошибки если не проходит проверку на валидацию*/}
            {errors?.password?.type === "required" && (
              <p className="form-error">Необходимо ввести пароль</p>
            )}
            {errors?.password?.type === "pattern" && (
              <p className="form-error">Cимволы: A-Z,!@#$&*,0-9,a-z</p>
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
                    value: 8,
                    message: "Password must have at least 8 characters"
                  },
                  pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/
                })}
            />

            <div className="enter__login">
              <button type="submit"
                className="btn__login">Войти</button>
            </div>
            <div className="extra__options">
              <p className="option">Создать аккаунт</p>
              <p className="option">Забыли свой пароль?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
