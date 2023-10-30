import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { isEmail } from "validator";

function Login() {
  const [isFormValid, setIsFormValid] = useState(false);

  const [emailInputValue, setEmailInputValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputEmail = (e) => {
    setEmailInputValue(e.target.value);

    const isEmailValid = isEmail(e.target.value);

    if (!isEmailValid) {
      setEmailError("Некорректный адрес электронной почты");
    } else {
      setEmailError("");
    }

    setIsFormValid(isEmailValid && passwordInputValue.length >= 8);
  };

  const handleInputPassword = (e) => {
    setPasswordInputValue(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordError("Пароль должен быть не менее 8 символов");
    } else {
      setPasswordError("");
    }
    setIsFormValid(isEmail(emailInputValue) && e.target.value.length >= 8);
  };

  return (
    <main className="login-register">
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className="login-register__logo" />
      </Link>
      <h1 className="login-register__title">Рады видеть!</h1>
      <form className="login-register__form" noValidate>
        <div className="login-register__inputs-container login-register__inputs-container_login">
          <div className="login-register__input-container">
            <label htmlFor="email" className="login-register__input-title">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              className={
                emailError
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              placeholder="Введите почту"
              value={emailInputValue}
              required
              onChange={handleInputEmail}
            />
            <span className="login-register__error-message">{emailError}</span>
          </div>

          <div className="login-register__input-container">
            <label htmlFor="password" className="login-register__input-title">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              className={
                passwordError
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              placeholder="Введите пароль"
              required
              minLength={8}
              maxLength={20}
              value={passwordInputValue}
              onChange={handleInputPassword}
            />
            <span className="login-register__error-message">
              {passwordError}
            </span>
          </div>
        </div>
        <button
          className={
            isFormValid
              ? "login-register__submit-btn"
              : "login-register__submit-btn login-register__submit-btn_inactive"
          }
          type="submit"
          disabled={!isFormValid}
        >
          Войти
        </button>
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
