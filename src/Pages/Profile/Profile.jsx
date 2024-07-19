import "./Profile.scss";
import Avatar from '../../assets/icon/Avatar.svg';
import { NavLink } from "react-router-dom";


export default function Profile() {
  const user ={userName:'Имя', lastname:'Фамилия', phone:'7777777', email:'email@email.com', password:'0987654321'};

  return (
  <div className="container__profile">
    <div className="profile__nav">
      <div className="profile__nav-avatar">
      <img src={Avatar} alt="avatar" />
      <h2>Username</h2>
      </div>
      <nav className="profile__nav-list">
        <p>username@gmail.com</p>
        <NavLink className="link" to='/'>Мой профиль</NavLink>
        <NavLink className="link" to=''>Создать резюме</NavLink>
        <NavLink className="link" to=''>Настройки</NavLink>
        <NavLink className="link" to=''>Выйти</NavLink>
        <NavLink className="link" to=''>Оставить отзыв</NavLink>
        
      </nav>
    </div>
    <div className="profile__user">
      <h2>Мой профиль</h2>
      <form action="">
        <label ><span>Имя</span>
          <input type="text" value={user.userName} />
        </label>
        <label ><span>Фамилия</span>
          <input type="text" value={user.lastname}/>
        </label>
        <label ><span>Телефон</span>
          <input type="number" value={user.phone}/>
        </label>
        <label ><span>Email</span>
          <input type="text" value={user.email}/>
        </label>
        <label ><span>Пароль</span>
          <input type="password" value={user.password}/>
        </label>
        <button>Редактировать</button>
      </form>
    </div>
  </div>
  );
}
