import Header from "../Header/Header.jsx";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </>
  );
}

export default App;
