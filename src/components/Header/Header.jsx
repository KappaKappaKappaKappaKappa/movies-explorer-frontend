import logo from "../../images/logo.svg";
import NavTab from "../NavTab/NavTab";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        {isLoggedIn && <NavTab />}
        {!isLoggedIn && (
          <div className="header__links">
            <a href="#" className="header__link-register">
              Регистрация
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
