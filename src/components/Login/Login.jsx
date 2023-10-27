import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login-register">
      <Link to="/">
        <img src={logo} alt="Логотип" className="login-register__logo" />
      </Link>
      <h2 className="login-register__title">Рады видеть!</h2>
      <form className="login-register__form">
        <div className="login-register__inputs-container login-register__inputs-container_login">
          <div className="login-register__input-container">
            <p className="login-register__input-title">E-mail</p>
            <input
              type="email"
              className="login-register__input"
              placeholder="Введите почту"
            />
            <span className="login-register__error-message"></span>
          </div>

          <div className="login-register__input-container">
            <p className="login-register__input-title">Пароль</p>
            <input
              type="password"
              className="login-register__input login-register__input_error"
              placeholder="Введите пароль"
            />
            <span className="login-register__error-message"></span>
          </div>
        </div>
        <button className="regiter__submit-btn">Войти</button>
        <p className="login-register__login-text">
          Ещё не зарегистрированы?
          <Link to="/signup" className="login-register__login-link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
