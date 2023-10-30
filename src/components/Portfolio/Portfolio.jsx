function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio-links">
        <li>
          <a
            href="https://github.com/KappaKappaKappaKappaKappa/how-to-learn"
            target="_blank"
            rel="noreferrer"
            className="portfolio-links__item"
          >
            <p className="portfolio-links__name">Статичный сайт</p>
            <span className="portfolio-links__icon">↗</span>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/KappaKappaKappaKappaKappa/russian-travel"
            target="_blank"
            rel="noreferrer"
            className="portfolio-links__item"
          >
            <p className="portfolio-links__name">Адаптивный сайт</p>
            <span className="portfolio-links__icon">↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/KappaKappaKappaKappaKappa/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
            className="portfolio-links__item"
          >
            <p className="portfolio-links__name">Одностраничное приложение</p>
            <span className="portfolio-links__icon">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;

