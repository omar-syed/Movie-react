import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const favoriteArray = useSelector((state) => state.favoriteArray);
  return (
    <>
      <nav className="navbar sticky-top navbar-dark bg-black">
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
