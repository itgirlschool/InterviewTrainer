import { CloseCircleOutlined } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { Register } from './signin.actions';
import { useDispatch } from 'react-redux';
import "./SignIn.scss";


export default function SignIn() {

  const userId = uuidv4();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    //добавляем айди в объект пользователя
    data.id = userId;
    
    form.reset(); 
    dispatch(Register(data));
   
  };

   const passw = watch("password");

  return (
    <div className="container__signin">
      <div className="cross-wrapper__signin">
        <div className="crossbtn__signin">
          <span className="crossbtn-x"><CloseCircleOutlined className="icon" /></span>
        </div>
      </div>
      <div className="wrapper__signin">
        <h3 className="title__signin">Регистрация</h3>

        <form className="form-signin__registration"
          name="form"
          onSubmit={handleSubmit(onSubmit)}

        >
          {/*Вывод ошибки если не проходит проверку на валидацию*/}

          {errors?.firstName?.type === "required" && <p className="form-error">Данное поле необходимо заполнить</p>}
          {errors?.firstName?.type === "maxLength" && (
            <p className="form-error">Имя не может превышать 20 букв</p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p className="form-error">Только русский алфавит</p>
          )}

          {/*Сам input*/}
          * <input type="text"
            placeholder="Ваше имя"
            className="form-signin__input"

            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /(?:\s|^)[а-яА-Я\-\.\_]+(?:\s|$)/i

            })}
          />
          {/*Вывод ошибки если не проходит проверку на валидацию*/}
          {errors?.lastName?.type === "required" && <p className="form-error">Данное поле необходимо заполнить</p>}
          {errors?.lastName?.type === "maxLength" && (
            <p className="form-error">Фамилия не может превышать 20 букв</p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p className="form-error">Только русский алфавит</p>
          )}
          {/*Сам input*/}
          <input type="text"
            placeholder="Ваша фамилия"
            className="form-signin__input"
            {...register("lastName",
              {
                required: true,
                maxLength: 20,
                pattern: /(?:\s|^)[а-яА-Я\-\.\_]+(?:\s|$)/i

              })}
          />

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
            className="form-signin__input"
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
          {/*Вывод ошибки если не проходит проверку на совпадение паролей*/}
          {errors.confirmPassword && <p className="form-error">Пароли не совпадают</p>}


          {/*Сам input*/}
          <input
            name="password"
            type="password"
            placeholder="Ваш пароль"
            className="form-signin__input"

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


          {/*Вывод ошибки если не проходит проверку на валидацию*/}
          {errors?.confirmPassword?.type === "required" && (
            <p className="form-error">Необходимо ввести пароль</p>
          )}
          {errors?.confirmPassword?.type === "pattern" && (
            <p className="form-error">Cимволы: A-Z, ! @ # $ & *,0-9,a-z</p>
          )}
          {errors?.confirmPassword?.type === "minLength" && (
            <p className="form-error">Пароль должен содержать не меньше 8 символов</p>
          )}



          {/*Вывод ошибки если не проходит проверку на совпадение паролей*/}
          {errors.confirmPassword && <p className="form-error">Пароли не совпадают</p>}
          {/*Сам input*/}
          <input
            name="confirmPassword"
            type="password"
            placeholder="Повторите пароль"
            className="form-signin__input"
            {...register("confirmPassword",
              {
                required: true,
                minLength: 8,
                pattern: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
                validate: value =>
                  value === passw || "Пароль не совпадает"
              },
            )}

          />


          <div className="save__sighin" >
            <button type="submit"
              className="btn__signin">
              Сохранить</button>
          </div>
          <div className="enter__signin">
            <p className="enter__sn">Вход</p>
          </div>
        </form>


      </div >
    </div >
  )
}
