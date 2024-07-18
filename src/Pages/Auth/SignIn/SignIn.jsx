import "./SignIn.scss";



export default function SignIn() {
  return (
    <div className="container__signin">
      <div className="cross-wrapper__signin">
        <div className="crossbtn__signin">
          <span className="crossbtn-x">X</span>
        </div>
      </div>
      <div className="wrapper__signin">
        <h3 className="title__signin">Регистрация</h3>
        <form action="" className="form-signin__registration">
          <input type="text" placeholder="Ваше имя" className="form-signin__input" />
          <input type="text" placeholder="Ваша фамилия" className="form-signin__input" />
          <input type="text" placeholder="Ваш Email" className="form-signin__input" />
          <input type="text" placeholder="Ваш пароль" className="form-signin__input" />
          <input type="text" placeholder="Повторите пароль" className="form-signin__input" />
          <div className="save__sighin">
            <button type="submit" className="btn__signin">Сохранить</button>
          </div>
          <div className="enter__signin">
            <p className="enter__sn">Вход</p>
          </div>
        </form>
      </div>
    </div>
  )
}
