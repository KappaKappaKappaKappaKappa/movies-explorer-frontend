function Profile() {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <div className="profile__info-container">
        <div className="profile__name-container">
          <p className="profile__name-title">Имя</p>
          <p className="profile__name">Виталий</p>
        </div>
        <div className="profile__email-container">
          <p className="profile__email-title">E-mail</p>
          <p className="profile__email">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__btns-container">
        <button className="profile__edit-btn">Редактировать</button>
        <button className="profile__logout-btn">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
