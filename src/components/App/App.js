import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(true);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
