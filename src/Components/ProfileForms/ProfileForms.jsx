import { useSelector } from "react-redux";
import ProfileForm from "./ProfileForm";
import PasswordForm from "./PasswordForm";
import "./ProfileForms.scss";

const ProfileForms = () => {
  const user = useSelector((state) => state.userAuth);

  return (
    <div className="profile__forms__container">
      <h2 className="profile__forms__heading">Профиль</h2>
      <div className="profile__forms">
        <ProfileForm user={user} />
        <PasswordForm />
      </div>
    </div>
  );
};

export default ProfileForms;
