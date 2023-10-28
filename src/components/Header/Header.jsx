import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";
import { Link } from "react-router-dom";
import menuIcon from "../../images/burger-menu-icon.svg";
import SideMenu from "../SideMenu/SideMenu";
import { useLocation } from "react-router-dom";

function Header({ isLoggedIn, handleClickSideMenuButton, sideMenuActive }) {
  const { pathname } = useLocation();

  return (
    <header
      className={
        pathname === "/movies" ||
        pathname === "/saved-movies" ||
        pathname === "/profile"
          ? "header header_dark"
          : "header"
      }
    >
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип сайта" />
        </Link>
        {isLoggedIn && (
          <img
            src={menuIcon}
            alt="Иконка меню"
            className="header__menu-icon"
            onClick={handleClickSideMenuButton}
          />
        )}
        {isLoggedIn && (
          <SideMenu
            sideMenuActive={sideMenuActive}
            handleClickCloseBtnMenu={handleClickSideMenuButton}
          />
        )}
        {isLoggedIn && <Navigation />}
        {!isLoggedIn && <NavAuth />}
      </div>
    </header>
  );
}
export default Header;
