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
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isMoviesSection, setIsMoviesSection] = useState(true);
  const [isMovies, setIsMovies] = useState(true);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  return (
    <section className="app">
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Header isLoggedIn={isLoggedIn} />
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
