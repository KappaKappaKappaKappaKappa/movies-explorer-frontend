import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import NavAuth from "../NavAuth/NavAuth";
import { Link } from "react-router-dom";

function Header({ isLoggedIn, isMoviesSection, isMovies, isSavedMovies }) {
  return (
    <header className={isMoviesSection ? "header header_dark" : "header"}>
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        {isLoggedIn && (
          <Navigation
            isMoviesSection={isMoviesSection}
            isMovies={isMovies}
            isSavedMovies={isSavedMovies}
          />
        )}
        {!isLoggedIn && <NavAuth />}
      </div>
    </header>
  );
}
export default Header;
