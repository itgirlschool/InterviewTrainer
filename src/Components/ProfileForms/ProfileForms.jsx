import { useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";
import ProfileFormAvatar from "./ProfileFormAvatar";
import "./ProfileForms.scss";

const ProfileForms = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const customTooltipColor = "#ea5d80"
  const user = useSelector((state) => state.userAuth);

  return (
    <div className="profile__forms__container">
      <div className="profile__forms__wrapper">
        <h2 className="profile__forms__heading">{isChangingPassword ? "Пароль" : "Профиль"}</h2>
        <Tooltip title={isChangingPassword ? "Профиль" : "Изменить пароль"} color={customTooltipColor}>
          <div className="settings__icon" onClick={() => setIsChangingPassword(!isChangingPassword)}>
            <img src="src/assets/images/settings.svg" alt="Настройки пароля" />
          </div>
        </Tooltip>
      </div>
      <div className="profile__forms">
        {!isChangingPassword ? (
          <>
            <ProfileFormAvatar />
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
