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

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isMoviesSection, setIsMoviesSection] = useState(false);
  const [isMovies, setIsMovies] = useState(false);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  const [isProfilePage, setIsProfilePage] = useState(false);
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  return (
    <>
      {/* <Header
        isLoggedIn={isLoggedIn}
        isMoviesSection={isMoviesSection}
        isMovies={isMovies}
        isSavedMovies={isSavedMovies}
      /> */}
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <SavedMovies isSavedMovies={isSavedMovies} /> */}
      {/* <Profile /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <NotFound />

      {!isProfilePage && !isRegisterPage && !isLoginPage && <Footer />}
    </>
  );
}

export default App;
