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
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import currentUserContext from "../../contexts/currentUserContext";
import * as auth from "../../utils/auth.js";
import * as JwtToken from "../../utils/token.js";
import * as mainApi from "../../utils/MainApi.js";

function App() {
  const token = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sideMenuActive, setSideMenuActive] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

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

  const loginUser = (email, password) => {
    auth
      .handleLoginUser(email, password)
      .then((data) => {
        if (data.token) {
          JwtToken.saveToken(data.token);
          auth.updateToken(data.token);
          setIsLoggedIn(true);
          navigate("/movies");
          console.log(localStorage);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerUser = (name, email, password) => {
    auth
      .handleRegisterUser(name, email, password)
      .then((res) => {
        if (res._id) {
          loginUser(email, password);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutUser = () => {
    JwtToken.remoteToken("jwt");
    setIsLoggedIn(false);
    navigate("/");
  };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     mainApi
  //       .getUserInfo()
  //       .then((res) => {
  //         setCurrentUser({
  //           name: res.name,
  //           email: res.email,
  //         });
  //       })
  //       .catch((error) => {
  //         setIsLoggedIn(false);
  //         navigate("/signin");
  //         console.log(error);
  //       });
  //   }
  // }, [isLoggedIn, token]);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      if (pathname === "/signup" || pathname === "/signin") {
        navigate("/movies");
      }
    }
  }, [token, isLoggedIn, pathname, navigate]);

  return (
    <currentUserContext.Provider value={currentUser}>
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
            element={<ProtectedRoute loggedIn={isLoggedIn} element={Movies} />}
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={isLoggedIn} element={SavedMovies} />
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                loggedIn={isLoggedIn}
                handleLogout={logoutUser}
                element={Profile}
              />
            }
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
    </currentUserContext.Provider>
  );
}

export default App;
