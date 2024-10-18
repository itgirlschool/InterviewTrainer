import { useState } from "react";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { changePassword } from "../../Services/changePassword";
import "./PasswordForm.scss";

const PasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const currentPassword = watch("currentPassword");
  const newPassword = watch("newPassword");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await changePassword(data.currentPassword, data.newPassword);
      openNotification("success", "Успешно", "Пароль успешно изменён");
      reset();
    } catch (error) {
      openNotification("error", "Ошибка", error || "Произошла ошибка при смене пароля");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!showForm ? (
        <button className="profile__form__button" onClick={() => setShowForm(true)}>
          Перейти к смене пароля
        </button>
      ) : (
        <form className="profile__form" onSubmit={handleSubmit(onSubmit)} >

          <div className="profile__form__field">
            <input
              className="profile__form__input"
              placeholder=""
              name="currentPassword"
              id="currentPass"
              type={showCurrentPassword ? "text" : "password"}
              {...register("currentPassword", {
                required: "Это поле обязательно для заполнения",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                  message: "Пароль должен содержать только латинские буквы и цифры"
                }
              })}
            />
            <label className="profile__form__label" htmlFor="currentPass">Текущий пароль</label>
            <span className="password_toggle_icon" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          {errors.currentPassword && <span className="profile__form__error">{errors.currentPassword.message}</span>}

          <div className="profile__form__field">
            <input
              className="profile__form__input"
              placeholder=""
              name="newPassword"
              id="newPass"
              type={showNewPassword ? "text" : "password"}
              {...register("newPassword", {
                required: "Это поле обязательно для заполнения",
                minLength: {
                  value: 8,
                  message: "Пароль должен содержать минимум 8 символов"
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                  message: "Пароль должен содержать заглавные буквы, строчные буквы, цифры"
                },
                validate: value => value !== currentPassword || "Новый пароль не должен совпадать с текущим паролем"
              })}
            />
            <label className="profile__form__label" htmlFor="newPass">Новый пароль</label>
            <span className="password_toggle_icon" onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          {errors.newPassword && <span className="profile__form__error">{errors.newPassword.message}</span>}

          <div className="profile__form__field">
            <input
              className="profile__form__input"
              placeholder=""
              name="confirmPassword"
              id="confirmPass"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Это поле обязательно для заполнения",
                validate: value => value === newPassword || "Пароли не совпадают"
              })}
            />
            <label className="profile__form__label" htmlFor="confirmPass">Повторите пароль</label>
            <span className="password_toggle_icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
          </div>
          {errors.confirmPassword && <span className="profile__form__error">{errors.confirmPassword.message}</span>}

          <button className="profile__form__button" disabled={isSubmitting}>
            Сменить пароль
          </button>
        </form>
      )}
    </>
  );
};

export default PasswordForm;
