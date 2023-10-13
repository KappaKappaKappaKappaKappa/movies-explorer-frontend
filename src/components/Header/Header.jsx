import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        {isLoggedIn && (
          <div className="header__link-container">
            <div className="header__films">
              <p className="header__films-link">Фильмы</p>
              <p className="header__films-link">Сохранённые фильмы</p>
            </div>
            <img
              src={profile}
              alt="Ссылка на акканут"
              className="header__profile-link"
            />
          </div>
        )}
        {!isLoggedIn && (
          <div className="header__links">
            <a href="#" className="header__link-register">
              Регистация
            </a>
            <a href="#" className="header__link-login">
              Войти
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
