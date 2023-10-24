import { Link } from "react-router-dom";
import sideMenuCloseBtn from "../../images/sideMenuCloseBtn.svg";
import profile from "../../images/profile-icon.svg";
import { useLocation } from "react-router-dom";

function SideMenu({ sideMenuActive, handleClickCloseBtnMenu }) {
  const { pathname } = useLocation();
  return (
    <div className={sideMenuActive ? "menu menu_active" : "menu"}>
      <div className="menu__blur" />
      <div className="menu__container">
        <img
          src={sideMenuCloseBtn}
          alt="Кнопка закрытия меню"
          className="menu__close-btn"
          onClick={handleClickCloseBtnMenu}
        />
        <ul className="menu__list">
          <li>
            <Link
              to="/"
              className={
                pathname === "/"
                  ? "menu__list-item menu__list-item_active"
                  : "menu__list-item"
              }
              onClick={handleClickCloseBtnMenu}
            >
              Главная
            </Link>
          </li>

          <li>
            <Link
              to="/movies"
              className={
                pathname === "/movies"
                  ? "menu__list-item menu__list-item_active"
                  : "menu__list-item"
              }
              onClick={handleClickCloseBtnMenu}
            >
              Фильмы
            </Link>
          </li>

          <li>
            <Link
              to="/saved-movies"
              className={
                pathname === "/saved-movies"
                  ? "menu__list-item menu__list-item_active"
                  : "menu__list-item"
              }
              onClick={handleClickCloseBtnMenu}
            >
              Сохраненные фильмы
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              className="menu__list-item"
              onClick={handleClickCloseBtnMenu}
            >
              Аккаунт
              <img
                src={profile}
                alt="Иконка профиля"
                className="menu__profile-icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
