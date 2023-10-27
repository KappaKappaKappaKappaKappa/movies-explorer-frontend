function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__year">© 2023</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Практикум
            </a>
          </li>

          <li>
            <a
              href="https://github.com/KappaKappaKappaKappaKappa"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
