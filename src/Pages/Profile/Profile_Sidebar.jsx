import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAvatar } from '../../../src/app/store/slice/UserAuthSlice'; 
import './Profile_Sidebar.scss';
import exit_icon from "../../assets/images/exit_icon.png";
import edit_icon from "../../assets/images/edit_icon.png";
import home_icon from "../../assets/images/home_icon.png";

const Profile_Sidebar = () => {
    const dispatch = useDispatch();
    const { displayName, avatar } = useSelector((state) => state.userAuth);

    useEffect(() => {
        const savedAvatar = localStorage.getItem('userAvatar'); 
        if (savedAvatar) {
            dispatch(setAvatar(savedAvatar)); 
        }
    }, [dispatch]);

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch(setAvatar(reader.result)); 
                localStorage.setItem('userAvatar', reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="sidebar-profile">
            <div className="header-container">
                <div className="avatar-container">
                    {avatar ? (
                        <img src={avatar} alt="User Avatar" className="avatar" />
                    ) : (
                        <div className="profile__img">{getInitials(displayName)}</div>
                    )}
                    <label htmlFor="avatarInput" className="edit-icon">
                        <img src={edit_icon} alt="Edit Icon" />
                    </label>
                    <input
                        id="avatarInput"
                        type="file"
                        accept="image/*"
                        className="avatar-input"
                        onChange={handleAvatarChange}
                        style={{ display: 'none' }} 
                    />
                </div>
                <h2 className='welcome-profile'>Добро пожаловать<br /> <strong>{displayName}</strong></h2>
            </div>
            <div className="button_return">
                <NavLink to="/Home" className="navlink">
                    <img src={home_icon} alt="Home Icon" />
                    Вернуться на главную
                </NavLink>
            </div>
            <div className="button_logout">
                <NavLink to="/login" className="navlink">
                    <img src={exit_icon} alt="Exit Icon" />
                    Выход
                </NavLink>
            </div>
        </div>
    );
}

export default Profile_Sidebar;