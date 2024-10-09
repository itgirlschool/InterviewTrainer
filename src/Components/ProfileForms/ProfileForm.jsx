import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./ProfileForm.scss";

const ProfileForm = ({ user }) => {
  const { firstName, lastName, email } = user;
  
  const {
    register,
    setValue,
  } = useForm({
    defaultValues: {
      firstName,
      lastName,
      email,
    },
  });

  useEffect(() => {
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("email", email);
  }, [firstName, lastName, setValue]);
  
  return (
    <form className="profile__form" >

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="firstname"
          disabled={true}
          {...register("firstName")}
        />
        <label className="profile__form__label" htmlFor="firstname" >Имя</label>
      </div>

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="lastname"
          disabled={true}
          {...register("lastName")}
        />
        <label className="profile__form__label" htmlFor="lastname" >Фамилия</label>
      </div>

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

      <div className="profile__form__field" >
        <input
          className="profile__form__input"
          placeholder=""
          id="phone"
          disabled={true}
          {...register("phoneNumber")}
        />
        <label className="profile__form__label" htmlFor="phone" >Номер телефона</label>
      </div>
    </form>
  );
};

export default ProfileForm;