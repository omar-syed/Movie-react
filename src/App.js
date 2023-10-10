import Header from "./components/Header";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";
import { useContext, useState } from "react";
import NewUser from "./components/NewUser";
import SignIn from "./components/SignIn";


// import Home from "./components/Home";
// import WatchList from "./components/Watchlist";
// import Search from "./components/Search";
// import MovieDetail from "./components/MovieDetail";
// import NotFound from "./components/NotFound";
const Home =React.lazy(() => import('./components/Home'));
const MovieDetail =React.lazy(() => import('./components/MovieDetail'));
const WatchList =React.lazy(() => import('./components/Watchlist'));
const Search =React.lazy(() => import('./components/Search'));
const NotFound =React.lazy(() => import('./components/NotFound'));


function App() {
  const [contextLang, setContextLang] = useState("en");
  const [contextTheme, setContextTheme] = useState("light");


  return (
  <div className={contextTheme === "light" ? "App" : "App bg-dark text-white"}>
    <div className="App" 
        dir={contextLang === "en" ? "ltr" : "rtl"}>
      <BrowserRouter>
          <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>

              <LanguageContext.Provider value={{ contextLang, setContextLang }}>

        <Header />

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
            <Route path="/Watchlist" element={<WatchList />} />
            <Route path="/search/:title" element={<Search />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/new-User" element={<NewUser />} />
            <Route path="/sign-in" element={<SignIn />} />


            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
