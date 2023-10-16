function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info-container">
          <div className="about-project__info">
            <h2 className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </h2>
            <p className="about-project__info-subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info">
            <h2 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </h2>
            <p className="about-project__info-subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
      </div>

      <div className="about-project__progress">
        <div className="about-project__timeline-container-backend">
          <p className="about-project__timeline-title-backend">1 неделя</p>
          <p className="about-project__timeline-subtitle-backend">Back-end</p>
        </div>

        <div className="about-project__timeline-container-frontend">
          <p className="about-project__timeline-title-frontend">4 недели</p>
          <p className="about-project__timeline-subtitle-frontend">Front-end</p>
        </div>
      </div>
    </section>
  );
}
export default AboutProject;
