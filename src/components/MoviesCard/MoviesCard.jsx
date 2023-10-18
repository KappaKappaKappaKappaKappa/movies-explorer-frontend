import testImg from "../../images/test-pic.png";
function MoviesCard() {
  return (
    <article className="card">
      <div className="card__info-container">
        <h2 className="card__title">В погоне за Бенкси</h2>
        <p className="card__duration">0ч 42м</p>
      </div>
      <img src={testImg} alt="тест" className="card__img" />
      <button className="card__save-btn">Сохранить</button>
      {/* <button className="card__save-btn_active"></button> */}
    </article>
  );
}

export default MoviesCard;
