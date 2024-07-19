import Avatar from '../../assets/icon/Avatar.svg';
import { useState } from "react";
import ProfileNav from '../../Components/ProfileNav/ProfileNav';
import ProfileForm from '../../Components/ProfileForm/ProfileForm';
import "./Profile.scss";


export default function Profile() {

  const [userData, setUserData] = useState('');

  return (
  <div className="container__profile">
    <div className="profile__nav">
      <div className="profile__nav-avatar">
        <img src={Avatar} alt="avatar" />
        <h2>Username</h2>
      </div>
      <ProfileNav />
    </div>
    <div className="profile__user">
      <h2>Мой профиль</h2>
      <ProfileForm />
    </div>
  </div>
  );
}
