import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import currentUserContext from "../../contexts/currentUserContext";
import * as auth from "../../utils/auth.js";
import * as MainApi from "../../utils/MainApi.js";

function App() {
  const token = localStorage.getItem("jwt");

  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);

  const [isShorts, setIsShorts] = useState(false);

  const [isNoContent, setIsNoContent] = useState(false);

  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const { pathname } = useLocation();

  const isHeaderVisible =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  const isFooterVisible =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  //Функция открытия бокового меню
  const handleClickSideMenuButton = () => {
    setSideMenuActive(!sideMenuActive);
  };

  // Функция авторизации пользователя
  const loginUser = (email, password) => {
    auth
      .handleLoginUser(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          navigate("/movies");
          setLoginErrorMessage("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 400) {
          setLoginErrorMessage("Вы ввели неправильный логин или пароль.");
        } else if (error.status === 401) {
          setLoginErrorMessage(
            "При авторизации произошла ошибка. Переданный токен некорректен."
          );
        }
      });
  };

  // Функция регистрации пользователя
  const registerUser = (name, email, password) => {
    auth
      .handleRegisterUser(name, email, password)
      .then((res) => {
        if (res._id) {
          loginUser(email, password);
          setRegisterErrorMessage("");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 409) {
          setRegisterErrorMessage("Пользователь с таким email уже существует.");
        } else {
          setRegisterErrorMessage(
            "При регистрации пользователя произошла ошибка."
          );
        }
      });
  };

  const handleToggleFilter = () => {
    setIsShorts(!isShorts);
    localStorage.setItem("is-shorts", JSON.stringify(!isShorts));
  };

  // Функция для logout
  const logoutUser = () => {
    localStorage.clear();
    setCurrentUser({});
    setIsLoggedIn(false);
    navigate("/");
  };

  // Эффект получает данные о пользователе с сервера и устанавливает контекст currentUser
  useEffect(() => {
    if (isLoggedIn) {
      MainApi.getUserInfo(token)
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn, token]);

  // Эффект для проверки токена при заходе на сайт или обновления страницы
  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      if (pathname === "/signup" || pathname === "/signin") {
        navigate("/movies");
      }
    }
  }, [isLoggedIn, pathname, navigate, token]);

  //Проверяем есть ли данные о CurrentUser. Если да - загружаем сохраненные пользователем фильмы
  useEffect(() => {
    if (isLoggedIn && currentUser.data && currentUser.data._id) {
      MainApi.getSavedMovies(token)
        .then((data) => {
          const ownSavedMovies = data.data.filter((movie) => {
            return movie.owner === currentUser.data._id;
          });
          setSavedMovies(ownSavedMovies);
          localStorage.setItem("saved-movies", JSON.stringify(ownSavedMovies));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn, currentUser, token]);

  return (
    <currentUserContext.Provider value={[currentUser, setCurrentUser]}>
      <section className="app">
        {isHeaderVisible && (
          <Header
            isLoggedIn={isLoggedIn}
            handleClickSideMenuButton={handleClickSideMenuButton}
            sideMenuActive={sideMenuActive}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />

          <Route
            path="/movies"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                isShorts={isShorts}
                setIsShorts={setIsShorts}
                handleToggleFilter={handleToggleFilter}
                isNoContent={isNoContent}
                setIsNoContent={setIsNoContent}
                element={Movies}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                savedMovies={savedMovies}
                isShorts={isShorts}
                setIsShorts={setIsShorts}
                setSavedMovies={setSavedMovies}
                handleToggleFilter={handleToggleFilter}
                isNoContent={isNoContent}
                setIsNoContent={setIsNoContent}
                element={SavedMovies}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                handleLogout={logoutUser}
                element={Profile}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Login
                handleLogin={loginUser}
                loginErrorMessage={loginErrorMessage}
              />
            }
          />

          <Route
            path="/signup"
            element={
              <Register
                handleRegister={registerUser}
                registerErrorMessage={registerErrorMessage}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {isFooterVisible && <Footer />}
      </section>
    </currentUserContext.Provider>
  );
}

export default App;
