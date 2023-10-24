import { Link } from "react-router-dom";
import profile from "../../images/profile-icon.svg";
import { useLocation } from "react-router-dom";

function Navigation() {
  const { pathname } = useLocation();
  return (
    <nav className="navigation">
      <div className="navigation__films">
        <Link
          to="/movies"
          className={
            pathname === "/movies"
              ? "navigation__link navigation__link_active"
              : "navigation__link"
          }
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={
            pathname === "/saved-movies"
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
            pathname === "/movies" || pathname === "/saved-movies"
              ? "navigation__profile-icon navigation__profile-icon_dark"
              : "navigation__profile-icon"
          }
        />
      </Link>
    </nav>
  );
}

export default Navigation;
