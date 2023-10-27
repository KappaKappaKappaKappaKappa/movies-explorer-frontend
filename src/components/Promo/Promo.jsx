import landingLogo from "../../images/landing-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__texts">
          <h1 className="promo__title">
            Учебный проект студента факультета
            Веб-разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#about-project" className="promo__more-link">
            Узнать больше
          </a>
        </div>
        <img
          src={landingLogo}
          alt="Логотип лендинга"
          className="promo__image"
        />
      </div>
    </section>
  );
}

export default Promo;
