import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { useFormValidation } from "../../hooks/useFormValidation";

function Login({ handleLogin }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

  const handleSubmitForm = (e) => {
    e.preventDefault();
    resetForm();
    handleLogin();
  };

  return (
    <main className="login-register">
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className="login-register__logo" />
      </Link>
      <h1 className="login-register__title">Рады видеть!</h1>
      <form
        className="login-register__form"
        noValidate
        onSubmit={handleSubmitForm}
      >
        <div className="login-register__inputs-container login-register__inputs-container_login">
          <div className="login-register__input-container">
            <label htmlFor="email" className="login-register__input-title">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              className={
                errors.email
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              placeholder="Введите почту"
              value={values.email || ""}
              required
              onChange={handleChange}
            />
            <span className="login-register__error-message">
              {errors.email}
            </span>
          </div>

          <div className="login-register__input-container">
            <label htmlFor="password" className="login-register__input-title">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              className={
                errors.password
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              placeholder="Введите пароль"
              required
              minLength={8}
              maxLength={20}
              value={values.password || ""}
              onChange={handleChange}
            />
            <span className="login-register__error-message">
              {errors.password}
            </span>
          </div>
        </div>
        <button
          className={
            isValid
              ? "login-register__submit-btn"
              : "login-register__submit-btn login-register__submit-btn_inactive"
          }
          type="submit"
          disabled={!isValid}
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
