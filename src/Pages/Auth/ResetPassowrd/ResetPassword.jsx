import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "" });
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {

    const auth = getAuth();
    auth.languageCode = "ru";

    try {
      await sendPasswordResetEmail(auth, data.email);
      setSuccess(true);
      setError(null);
    } catch (err) {
      console.error(err)
      setError("Ошибка при отправке письма. Проверьте email и попробуйте снова.");
      setSuccess(false);
    }
  };

  return (
    <div className="reset__container">
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="reset__header">Забыли пароль?</p>

        {success && (
        <div className="message__success">
          Письмо для сброса пароля отправлено! Проверьте вашу почту.
        </div>
        )}

        {error && <div className="message__error">{error}</div>}
        
        <input
          className="input"
          {...register("email", { 
            required: "Введите email",
            pattern: {
              value: /^\S+@\S+\.\S+$/i,
              message: "Неверный формат email",
            },
          })}
          type="text"
          placeholder="Ваш Email"
        />
        {errors.email && <div className="message__error">{errors.email.message}</div>}

        <button
          disabled={!isDirty || !isValid}
          className="button__submit"
          type="submit"
        >
          Отправить письмо для сброса
        </button>
        <Link to="/login">
          <p className="button__back">Вернуться</p>
        </Link>
      </form>
    </div>
  );
}
