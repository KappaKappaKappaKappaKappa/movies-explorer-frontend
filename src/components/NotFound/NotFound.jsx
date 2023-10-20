function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <p className="not-found__code">404</p>
        <p className="not-found__description">Страница не найдена</p>
      </div>
      <a href="#" className="not-found__link">
        Назад
      </a>
    </section>
  );
}

export default NotFound;
