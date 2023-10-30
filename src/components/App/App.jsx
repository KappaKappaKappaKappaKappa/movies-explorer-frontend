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
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
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

        <Route path="/movies" element={<Movies />} />

        <Route path="/saved-movies" element={<SavedMovies />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {isFooterVisible && <Footer />}
    </section>
  );
}

export default App;
