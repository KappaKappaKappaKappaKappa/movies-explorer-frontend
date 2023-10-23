import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";
import { Link } from "react-router-dom";
import menuIcon from "../../images/burger-menu-icon.svg";
import SideMenu from "../SideMenu/SideMenu";

function Header({
  isLoggedIn,
  isMoviesSection,
  isMovies,
  isSavedMovies,
  handleClickSideMunuButton,
  sideMenuActive,
}) {
  return (
    <header className={isMoviesSection ? "header header_dark" : "header"}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <img
          src={menuIcon}
          alt="Иконка меню"
          className="header__menu-icon"
          onClick={handleClickSideMunuButton}
        />
        <SideMenu sideMenuActive={sideMenuActive} handleClickCloseBtnMenu={handleClickSideMunuButton} />
        {/* {isLoggedIn && (
          <Navigation
            isMoviesSection={isMoviesSection}
            isMovies={isMovies}
            isSavedMovies={isSavedMovies}
          />
        )} */}
        {!isLoggedIn && <NavAuth />}
      </div>
    </header>
  );
}
export default Header;
