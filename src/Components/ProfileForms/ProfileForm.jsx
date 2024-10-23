import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { updateUserData } from "../../Services/fbUsers";
import { notification } from "antd";
import "./ProfileForm.scss";

const ProfileForm = ({ user }) => {
  const { firstName, lastName, email } = user;
  const {users} = useSelector((state) => state.users);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
    },
  });

  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fName = watch("firstName");
  const lName = watch("lastName");

  useEffect(() => {
    setIsChanged(fName !== firstName || lName !== lastName);
  }, [fName, lName, firstName, lastName]);

  useEffect(() => {
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("email", email);
  }, [firstName, lastName, email, setValue]);

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const myArr = Object.values(users);
      const result = myArr.find((el) => el.email === data.email);
      if (!result) {
        throw new Error("Не найден пользователь с таким email");
      }
      const userKey = result.key;

      await updateUserData(userKey, { firstName: data.firstName, lastName: data.lastName, displayName: `${data.firstName} ${data.lastName}` });
      openNotification("success", "Успешно", "Данные успешно обновлены");
    } catch (error) {
      openNotification("error", "Ошибка", error.message || "Произошла ошибка при обновлении данных");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="firstname"
          {...register("firstName", {
            required: "Это поле обязательно для заполнения",
            maxLength: {
              value: 20,
              message: "Введите не более 20 символов"
            },
            pattern: {
              value: /(?:\s|^)[а-яА-ЯA-Za-z\-\.\_]+(?:\s|$)/i,
              message: "Используйте кириллицу или латинские буквы"
            }
          })}
        />
        <label className="profile__form__label" htmlFor="firstname" >Имя</label>
      </div>
      {errors.firstName && <span className="profile__form__error">{errors.firstName.message}</span>}

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="lastname"
          {...register("lastName", {
            required: "Это поле обязательно для заполнения",
            maxLength: {
              value: 20,
              message: "Введите не более 20 символов"
            },
            pattern: {
              value: /(?:\s|^)[а-яА-ЯA-Za-z\-\.\_]+(?:\s|$)/i,
              message: "Используйте кириллицу или латинские буквы"
            }
          })}
        />
        <label className="profile__form__label" htmlFor="lastname" >Фамилия</label>
      </div>
      {errors.lastName && <span className="profile__form__error">{errors.lastName.message}</span>}

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="email"
          disabled={true}
          {...register("email")}
        />
        <label className="profile__form__label" htmlFor="email" >Электронная почта</label>
      </div>

      {isChanged && (
        <button
          type="submit"
          className="profile__form__button"
          disabled={isSubmitting}
        >
          Сохранить изменения
        </button>)}
    </form>
  );
};

export default ProfileForm;