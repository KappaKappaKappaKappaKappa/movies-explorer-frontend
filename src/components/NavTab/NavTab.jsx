import profile from "../../images/profile-icon.svg";

function NavTab() {
  return (
    <nav className="nav-tab">
      <div className="nav-tab__films">
        <p className="nav-tab__link">Фильмы</p>
        <p className="nav-tab__link">Сохранённые фильмы</p>
      </div>
      <div href="#" className="nav-tab__profile-container">
        <p className="nav-tab__profile-link">Аккаунт</p>
        <img
          src={profile}
          alt="Иконка профиля"
          className="nav-tab__profile-icon"
        />
      </div>
    </nav>
  );
}

export default NavTab;
