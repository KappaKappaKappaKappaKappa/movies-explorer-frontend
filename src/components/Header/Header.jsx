import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header({ isLoggedIn, isMoviesSection }) {
  return (
    <header className={isMoviesSection ? "header header_dark" : "header"}>
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        {isLoggedIn && <Navigation isMoviesSection={isMoviesSection} />}
        {!isLoggedIn && <NavAuth />}
      </div>
    </header>
  );
}
export default Header;
