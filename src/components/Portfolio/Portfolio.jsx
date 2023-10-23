function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio-links">
        <a
          href="https://github.com/KappaKappaKappaKappaKappa/how-to-learn"
          className="portfolio-links__item"
        >
          <p className="portfolio-links__name">Статичный сайт</p>
          <span className="portfolio-links__icon">↗</span>
        </a>

        <a
          href="https://github.com/KappaKappaKappaKappaKappa/russian-travel"
          className="portfolio-links__item"
        >
          <p className="portfolio-links__name">Адаптивный сайт</p>
          <span className="portfolio-links__icon">↗</span>
        </a>

        <a
          href="https://github.com/KappaKappaKappaKappaKappa/react-mesto-api-full-gha"
          className="portfolio-links__item"
        >
          <p className="portfolio-links__name">Одностраничное приложение</p>
          <span className="portfolio-links__icon">↗</span>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
