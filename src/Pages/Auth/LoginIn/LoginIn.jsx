import "./LoginIn.scss";

export default function LoginIn() {
  return (
    <>
      <div className="container__login">
        <div className="cross-wrapper__login">
          <div className="crossbtn__login">
            <span className="crossbtn-x">X</span>
          </div>
        </div>
        <div className="wrapper__login">
          <h3 className="title__login">Войти</h3>
          <form action="" className="form-login__authorisation">
            <input type="text" placeholder="Ваш Email" className="form-login__input" />
            <input type="text" placeholder="Ваш пароль" className="form-login__input" />
            <div className="save__login">
              <button type="submit" className="btn__login">Сохранить</button>
            </div>
            <div className="enter__login">
              <a className="enter__log">Создать аккаунт</a>
              <a className="enter__log">Забыли свой пароль?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
