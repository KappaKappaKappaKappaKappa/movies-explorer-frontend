import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  const [isMoviesSection, setIsMoviesSection] = useState(true);
  const [isMovies, setIsMovies] = useState(true);
  const [isSavedMovies, setIsSavedMovies] = useState(false);
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        isMoviesSection={isMoviesSection}
        isMovies={isMovies}
        isSavedMovies={isSavedMovies}
      />
      {/* <Main /> */}
      <Movies />
      <Footer />
    </>
  );
}

export default App;
