import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext} from "react";
import { LanguageContext } from "../../context/language";
import { ThemeContext } from "../../context/theme";
// import NewUser from "./components/NewUser";




export default function Header() {
  const favoriteArray = useSelector((state) => state.favoriteArray);
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const {contextTheme, setContextTheme} = useContext(ThemeContext);


  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-black">
        
        <div className="d-flex align-items-baseline  ">

        <button
              className="btn bg-primary me-2 fw-bold"
              onClick={() => setContextTheme("Dark")}
            >
              Dark Mode
            </button>
            <button
              className="btn bg-primary me-2 fw-bold"
              onClick={() => setContextTheme("light")}
            >
              Light Mode
            </button>
            <button
              className="btn bg-primary me-2 fw-bold"
              onClick={() => setContextLang("en")}
            >
              EN
            </button>
            <button
              className="btn bg-primary me-2 fw-bold"
              onClick={() => setContextLang("ar")}
            >
              AR
            </button>
            <Link
              to="/new-user"
              className="me-3 fw-bold text-decoration-none text-yellow "
            >
              Sign Up
            </Link>
            <Link
              to="/sign-in"
              className="me-2 fw-bold text-decoration-none text-yellow "
            >
              Sign In
            </Link>
        </div>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold text-white">
            MOVIE APP
          </Link>
          <Link
            className="d-flex align-items-center text-decoration-none text-white me-2"
            to={"/watchlist"}
          >
            <FontAwesomeIcon className="me-2" icon={faHeart} size="lg" />
            <div className="fw-bold position-relative p-1">
              WatchList
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                {favoriteArray.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
