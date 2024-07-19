import { NavLink } from "react-router-dom";
import "./ProfileNav.scss";


const ProfileNav =  () => {
    return (
        <nav className="profile__nav-list">
            <p>username@gmail.com</p>
            <NavLink className="link" to='/'>Мой профиль</NavLink>
            <NavLink className="link" to=''>Создать резюме</NavLink>
            <NavLink className="link" to=''>Настройки</NavLink>
            <NavLink className="link" to=''>Выйти</NavLink>
            <NavLink className="link" to=''>Оставить отзыв</NavLink>
        </nav>
    )
}

export default ProfileNav;