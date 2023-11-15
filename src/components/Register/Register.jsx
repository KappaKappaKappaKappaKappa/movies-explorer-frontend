import { useFormValidation } from "../../hooks/useFormValidation";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Register({ handleRegister, registerErrorMessage }) {
  const { values, errors, isValid, handleChange, resetForm } =
    useFormValidation({});

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
    resetForm();
  };

  return (
    <main className="login-register">
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className="login-register__logo" />
      </Link>
      <h1 className="login-register__title">Добро пожаловать!</h1>
      <form
        className="login-register__form"
        noValidate
        onSubmit={handleSubmitForm}
      >
        <div className="login-register__inputs-container">
          <div className="login-register__input-container">
            <label htmlFor="name" className="login-register__input-title">
              Имя
            </label>
            <input
              type="text"
              name="name"
              className={
                errors.name
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              placeholder="Введите имя"
              required
              value={values.name || ""}
              onChange={handleChange}
              minLength={2}
              maxLength={25}
            />
            <span className="login-register__error-message">{errors.name}</span>
          </div>

          <div className="login-register__input-container">
            <label htmlFor="email" className="login-register__input-title">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              className={
                errors.email
                  ? "login-register__input login-register__input_error"
                  : "login-register__input"
              }
              value={values.email || ""}
              onChange={handleChange}
              placeholder="Введите почту"
              required
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
              value={values.password || ""}
              onChange={handleChange}
              required
              minLength={8}
              maxLength={20}
            />
            <span className="login-register__error-message">
              {errors.password}
            </span>
          </div>
        </div>
        <span className="login-register__submit-error-message">
          {registerErrorMessage}
        </span>
        <button
          className={
            isValid
              ? "login-register__submit-btn"
              : "login-register__submit-btn login-register__submit-btn_inactive"
          }
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
        <p className="login-register__login-text">
          Уже зарегистрированы?
          <Link to="/signin" className="login-register__login-link">
            Войти
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Register;
