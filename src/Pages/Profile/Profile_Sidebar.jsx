
import React from 'react';
import { useSelector } from 'react-redux'; 
import { NavLink } from 'react-router-dom';
import './Profile_Sidebar.scss';
import exit_icon from "../../assets/images/exit_icon.png";
import edit_icon from "../../assets/images/edit_icon.png";
import home_icon from "../../assets/images/home_icon.png";



const Profile_Sidebar = () => {
    const { displayName, avatar, setAvatar } = useSelector((state) => state.userAuth);

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setAvatar(reader.result);
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
                <NavLink to="/Login" className="navlink">
                <img src={exit_icon} alt="Exit Icon" />
                    Выход
                </NavLink>
            </div>
        </div>
    );
}

export default Profile_Sidebar;

// import React from 'react';
// import { useSelector } from 'react-redux'; 
// import { NavLink } from 'react-router-dom';
// import './Profile_Sidebar.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faHome, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

// const Profile_Sidebar = () => {
//     const { displayName, avatar, setAvatar } = useSelector((state) => state.userAuth);

//     const getInitials = (name) => {
//         return name.split(' ').map(n => n[0]).join('').toUpperCase();
//     };

//     const handleAvatarChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => setAvatar(reader.result);
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div className="sidebar-profile">
//             <div className="avatar-container">
//                 {avatar ? (
//                     <img src={avatar} alt="User Avatar" className="avatar" />
//                 ) : (
//                     <div className="profile__img">{getInitials(displayName)}</div>
//                 )}
//                 <label htmlFor="avatarInput" className="edit-icon">
//                     <FontAwesomeIcon icon={faEdit} />
//                 </label>
//                 <input
//                     id="avatarInput"
//                     type="file"
//                     accept="image/*"
//                     className="avatar-input"
//                     onChange={handleAvatarChange}
//                     style={{ display: 'none' }} 
//                 />
//             </div>
//             <h2 className='welcome-profile'>Добро пожаловать, {displayName}</h2>
//             <div className="button_return">
//                 <NavLink to="/Home" className="navlink">
//                     <FontAwesomeIcon icon={faHome} />
//                     Вернуться на главную
//                 </NavLink>
//             </div>
//             <div className="button_logout">
//                 <NavLink to="/Login" className="navlink">
//                     <FontAwesomeIcon icon={faDoorOpen} />
//                     Выход
//                 </NavLink>
//             </div>
//         </div>
//     );
// }

// export default Profile_Sidebar;