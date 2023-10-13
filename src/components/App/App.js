import Header from "../Header/Header.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return <Header isLoggedIn={isLoggedIn} />;
}

export default App;
