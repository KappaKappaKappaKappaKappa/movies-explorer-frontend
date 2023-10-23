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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMoviesSection, setIsMoviesSection] = useState(true);
  const [isMovies, setIsMovies] = useState(true);
  const [isSavedMovies, setIsSavedMovies] = useState(false);

  const handleClickSideMunuButton = () => {
    setSideMenuActive(!sideMenuActive);
  };

  const [sideMenuActive, setSideMenuActive] = useState(false);
  return (
    <section className="app">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header
                isLoggedIn={isLoggedIn}
                handleClickSideMunuButton={handleClickSideMunuButton}
                sideMenuActive={sideMenuActive}
              />
              <Main />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/movies"
          element={
            <React.Fragment>
              <Header
                isMoviesSection={isMoviesSection}
                isLoggedIn={isLoggedIn}
                isMovies={isMovies}
                handleClickSideMunuButton={handleClickSideMunuButton}
                sideMenuActive={sideMenuActive}
              />
              <Movies />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <React.Fragment>
              <Header
                isMoviesSection={isMoviesSection}
                isLoggedIn={isLoggedIn}
                isSavedMovies={isSavedMovies}
                handleClickSideMunuButton={handleClickSideMunuButton}
                sideMenuActive={sideMenuActive}
              />
              <SavedMovies isSavedMovies={isSavedMovies} />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/profile"
          element={
            <React.Fragment>
              <Header
                isMoviesSection={isMoviesSection}
                isLoggedIn={isLoggedIn}
                handleClickSideMunuButton={handleClickSideMunuButton}
                sideMenuActive={sideMenuActive}
              />
              <Profile />
            </React.Fragment>
          }
        />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
