import profile from "../../images/profile-icon.svg";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation__films">
        <p className="navigation__link">Фильмы</p>
        <p className="navigation__link">Сохранённые фильмы</p>
      </div>
      <div href="#" className="navigation__profile-container">
        <p className="navigation__profile-link">Аккаунт</p>
        <img
          src={profile}
          alt="Иконка профиля"
          className="navigation__profile-icon"
        />
      </div>
    </nav>
  );
}

export default Navigation;
