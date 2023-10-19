import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <img src={logo} alt="Логотип" className="register__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__inputs-container">
          <div className="register__input-container">
            <p className="register__input-title" placeholder="">
              Имя
            </p>
            <input
              type="text"
              className="register__input"
              placeholder="Введите имя"
            />
            <span className="register__error-message"></span>
          </div>

          <div className="register__input-container">
            <p className="register__input-title">E-mail</p>
            <input
              type="email"
              className="register__input"
              placeholder="Введите почту"
            />
            <span className="register__error-message"></span>
          </div>

          <div className="register__input-container">
            <p className="register__input-title">Пароль</p>
            <input
              type="password"
              className="register__input register__input_error"
              placeholder="Введите пароль"
            />
            <span className="register__error-message">
              Что-то пошло не так...
            </span>
          </div>
        </div>
        <button className="regiter__submit-btn">Зарегистрироваться</button>
        <p className="register__login-text">
          Уже зарегистрированы?
          <a href="" className="register__login-link">
            Войти
          </a>
        </p>
      </form>
    </section>
  );
}

export default Register;
