import Header from "../Header/Header.jsx";
import Promo from "../Promo/Promo";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Promo />
    </>
  );
}

export default App;
