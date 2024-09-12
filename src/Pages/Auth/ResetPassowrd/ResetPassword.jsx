import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    getFieldState,
    reset,
    formState,
    formState: { isSubmitSuccessful, isDirty, isValid },
  } = useForm({
    mode: "onChange",

    defaultValues: {
      email: "",
    },
  });
  const [dataUser, setDataUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [trueUser, setTrueUser] = useState(true);
  const { users } = useSelector(state => state.users);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [formState, reset]);

  const onSubmit = data => {
    const myArr = Object.values(users);
    const result = myArr.find(
      el => el.email === data.email,
    );
    if (result) {
      setDataUser(result.password);
      setShowModal(true);
      return;
    }
    setTrueUser(false);
  };

  return (
    <div className="reset__container">
      <form
        className={trueUser ? "form" : "hidden"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="reset__header">Забыли пароль?</p>
        <input
          className="input"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+\.\S+$/i,
          })}
          type="text"
          placeholder="Ваш Email"
        />
        {""}
        <div className="message__error">
          {isDirty &&
            !isValid &&
            "Ошибка формата ввода Email"}
        </div>
        {""}
        <button
          disabled={!isDirty || !isValid}
          className={"button__submit"}
          type="submit"
        >
          Показать пароль
        </button>
        <Link to="/login">
          <p className="button__back">Вернуться</p>
        </Link>
      </form>
      <div className={trueUser ? "hidden" : "form"}>
        <p className="reset__header">E-mail не найден</p>
        <Link to="/signin">
          <p className="button__sighnin">Создать аккаунт</p>
        </Link>
        <button
          onClick={e => {
            setTrueUser(true);
          }}
          className="button__back"
        >
          Назад
        </button>
      </div>
      <div
        className={!showModal ? "hidden" : "modal__overlay"}
      >
        <div className="modal">
          <div className="modal__data">{dataUser}</div>
          <button
            className="modal__button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Ок
          </button>
        </div>
      </div>
    </div>
  );
}
