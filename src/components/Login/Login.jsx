import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <main className="login-register">
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className="login-register__logo" />
      </Link>
      <h1 className="login-register__title">Рады видеть!</h1>
      <form className="login-register__form">
        <div className="login-register__inputs-container login-register__inputs-container_login">
          <div className="login-register__input-container">
            <label htmlFor="email" className="login-register__input-title">E-mail</label>
            <input
              type="email"
              id="email"
              className="login-register__input"
              placeholder="Введите почту"
            />
            <span className="login-register__error-message"></span>
          </div>

          <div className="login-register__input-container">
            <label htmlFor="password" className="login-register__input-title">Пароль</label>
            <input
              type="password"
              id="password"
              className="login-register__input login-register__input_error"
              placeholder="Введите пароль"
            />
            <span className="login-register__error-message"></span>
          </div>
        </div>
        <button className="login-register__submit-btn">Войти</button>
        <p className="login-register__login-text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login-register__login-link">
            Регистрация
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
