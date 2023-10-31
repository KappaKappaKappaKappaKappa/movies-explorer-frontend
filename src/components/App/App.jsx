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

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  const loginUser = async (email, password) => {
    try {
      const data = await auth.handleLoginUser(email, password);
      if (data.token) {
        setIsLoggedIn(true);
        navigate("/movies");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (name, email, password) => {
    try {
      const res = await auth.handleRegisterUser(name, email, password);
      loginUser(email, password);
    } catch (error) {
      console.log(error);
    }
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
          element={<ProtectedRoute element={<Movies />} />}
        />

        <Route
          path="/saved-movies"
          element={<ProtectedRoute element={<SavedMovies />} />}
        />

        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
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
