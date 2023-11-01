import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Profile from "../Profile/Profile.jsx";
import Register from "../Register/Register.jsx";
import Login from "../Login/Login.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import * as auth from "../../utils/auth.js";
import * as JwtToken from "../../utils/token.js";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const { pathname } = useLocation();

  const isHeaderVisible =
    pathname === "/" ||
    pathname === "/movies" ||
    pathname === "/saved-movies" ||
    pathname === "/profile";

  const isFooterVisible =
    pathname === "/" || pathname === "/movies" || pathname === "/saved-movies";

  const handleClickSideMenuButton = () => {
    setSideMenuActive(!sideMenuActive);
  };

  const loginUser = (email, password) => {
    auth
      .handleLoginUser(email, password)
      .then((token) => {
        if (token) {
          JwtToken.saveToken(token);
          auth.updateToken(token);
          setIsLoggedIn(true);
          navigate("/movies");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = (name, email, password) => {
    auth
      .handleRegisterUser(name, email, password)
      .then((res) => {
        console.log(res);
        if (res._id) {
          loginUser(email, password);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
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
          element={<ProtectedRoute loggedIn={isLoggedIn} element={Movies} />}
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute loggedIn={isLoggedIn} element={SavedMovies} />
          }
        />

        <Route
          path="/profile"
          element={<ProtectedRoute loggedIn={isLoggedIn} element={Profile} />}
        />

        <Route path="/signin" element={<Login handleLogin={loginUser} />} />

        <Route
          path="/signup"
          element={<Register handleRegister={registerUser} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {isFooterVisible && <Footer />}
    </section>
  );
}

export default App;
