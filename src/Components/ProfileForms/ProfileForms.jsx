import { useState } from "react";
import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";
import "./ProfileForms.scss";

const ProfileForms = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const user = useSelector((state) => state.userAuth);

  return (
    <div className="profile__forms__container">
      <div className="profile__forms__wrapper">
        <h2 className="profile__forms__heading">{isChangingPassword ? "Пароль" : "Профиль"}</h2>
        <div className="settings__icon" onClick={() => setIsChangingPassword(!isChangingPassword)} title="Изменить пароль">
          <img src="src/assets/images/settings.svg" alt="Настройки пароля" />
        </div>
      </div>
      <div className="profile__forms">
        {!isChangingPassword ? (
          <>
            {/* <AvatarForm /> */}
            <ProfileForm user={user} />
          </>
        ) : (
          <PasswordForm />
        )}
      </div>
    </div>
  );
};

export default ProfileForms;
