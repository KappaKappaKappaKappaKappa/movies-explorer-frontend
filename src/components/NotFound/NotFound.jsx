import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBackBtn = () => {
    navigate(-1);
  };

  return (
    <main className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__description">Страница не найдена</h2>
      </div>
      <button className="not-found__link" onClick={handleGoBackBtn}>
        Назад
      </button>
    </main>
  );
}

export default NotFound;
