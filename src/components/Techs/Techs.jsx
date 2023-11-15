import { STACK } from "../../utils/contains";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>

      <div className="techs__info-container">
        <h3 className="techs__info-title">7 технологий</h3>
        <p className="techs__info-subtitle">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </div>
      <ul className="stack-container">
        {STACK.map((el) => {
          return (
            <li className="stack-container__item" key={el}>
              {el}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Techs;
