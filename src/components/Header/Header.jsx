import logo from "../../images/logo.svg";
import Navigation from "../NavTab/Navigation";
import NavAuth from "../NavAuth/NavAuth";

function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={logo} alt="Логотип" />
        {isLoggedIn && <Navigation />}
        {!isLoggedIn && <NavAuth />}
      </div>
    </header>
  );
}
export default Header;
