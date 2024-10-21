import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { notification } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { changePassword } from "../../Services/changePassword";
import "./PasswordForm.scss";

const PasswordForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState(null);

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
    setNotificationMessage(null);

    try {
      await changePassword(data.currentPassword, data.newPassword);
      setNotificationType("success");
      setNotificationMessage("Пароль успешно изменён");
      reset();
    } catch (error) {
      setNotificationType("error");
      setNotificationMessage(error.message || "Произошла ошибка при смене пароля");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (notificationMessage) {
      openNotification(notificationType, notificationType === "success" ? "Успешно" : "Ошибка", notificationMessage);
      setNotificationMessage(null);
    }
  }, [notificationMessage, notificationType]);

  return (
    <>
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
                message: "Введите не менее 8 символов"
              },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,}$/,
                message: "Пароль должен содержать латинские буквы верхнего и нижнего регистров, цифры и символы"
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
          Сохранить изменения
        </button>
      </form>
    </>
  );
};

export default PasswordForm;
