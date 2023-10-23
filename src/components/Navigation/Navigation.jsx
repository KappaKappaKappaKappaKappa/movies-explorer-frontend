import { Link } from "react-router-dom";
import profile from "../../images/profile-icon.svg";

function Navigation({ isMoviesSection, isMovies, isSavedMovies }) {
  return (
    <nav className="navigation">
      <div className="navigation__films">
        <Link
          to="/movies"
          className={
            isMovies
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={
            isSavedMovies
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="navigation__profile-container">
        <p className="navigation__profile-link">Аккаунт</p>
        <img
          src={profile}
          alt="Иконка профиля"
          className={
            isMoviesSection
              ? "navigation__profile-icon navigation__profile-icon_dark"
              : "navigation__profile-icon"
          }
        />
      </Link>
    </nav>
  );
}

export default Navigation;
