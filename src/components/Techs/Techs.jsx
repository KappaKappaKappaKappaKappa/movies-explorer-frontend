function Techs() {
  return (
    <section className="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>

        <div className="techs__info-container">
          <h3 className="techs__info-title">7 технологий</h3>
          <p className="techs__info-subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="stack-container">
          <li className="stack-container__item">HTML</li>
          <li className="stack-container__item">CSS</li>
          <li className="stack-container__item">JS</li>
          <li className="stack-container__item">React</li>
          <li className="stack-container__item">Git</li>
          <li className="stack-container__item">Express.js</li>
          <li className="stack-container__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
