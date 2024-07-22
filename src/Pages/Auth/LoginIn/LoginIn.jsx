import { CloseCircleOutlined } from '@ant-design/icons';
import "./LoginIn.scss";

export default function LoginIn() {
  return (
    <>
      <div className="container__login">
        <div className="cross-wrapper__login">
          <div className="crossbtn__login">
            <span className="crossbtn-x"><CloseCircleOutlined className="icon" /></span>
          </div>
        </div>
        <div className="wrapper__login">
          <h3 className="title__login">Войти</h3>
          <form action="" className="form-login__authorisation">
            <input type="text" placeholder="Ваш Email" className="form-login__input" />
            <input type="text" placeholder="Ваш пароль" className="form-login__input" />
            <div className="enter__login">
              <button type="submit" className="btn__login">Войти</button>
            </div>
            <div className="extra__options">
              <p className="option">Создать аккаунт</p>
              <p className="option">Забыли свой пароль?</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
