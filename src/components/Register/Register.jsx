import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <img src={logo} alt="Логотип" className="register__logo" />
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <div className="register__inputs-container">
          <div className="register__input-container">
            <span className="register__input-title" placeholder="">
              Имя
            </span>
            <input
              type="text"
              className="register__input"
              placeholder="Введите имя"
            />
          </div>

          <div className="register__input-container">
            <span className="register__input-title">E-mail</span>
            <input
              type="text"
              className="register__input"
              placeholder="Введите почту"
            />
          </div>

          <div className="register__input-container">
            <span className="register__input-title">Пароль</span>
            <input
              type="text"
              className="register__input"
              placeholder="Введите пароль"
            />
          </div>
        </div>
        <button className="regiter__submit-btn">Зарегистрироваться</button>
      </form>
    </section>
  );
}

export default Register;
