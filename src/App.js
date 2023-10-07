// import Header from "./components/Header";
// import "bootstrap/dist/css/bootstrap.css";
// import "./App.css";
// import Home from "./components/Home";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import WatchList from "./components/Watchlist";
// import Search from "./components/Search";
// import MovieDetail from "./components/MovieDetail";
// import NotFound from "./components/NotFound";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movie-detail/:id" element={<MovieDetail />} />
//           <Route path="/watchlist" element={<WatchList />} />
//           <Route path="/search/:title" element={<Search />} />
//           <Route path="/404" element={<NotFound />} />
//           <Route path="/*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import Header from "./components/Header";
import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { Suspense } from "react";
// import Home from "./components/Home";
// import WatchList from "./components/Watchlist";
// import Search from "./components/Search";
// import MovieDetail from "./components/MovieDetail";
// import NotFound from "./components/NotFound";
const Home =React.lazy(() => import('./components/Home'));
const MovieDetail =React.lazy(() => import('./components/MovieDetail'));
const WatchList =React.lazy(() => import('./components/WatchList'));
const Search =React.lazy(() => import('./components/Search'));
const NotFound =React.lazy(() => import('./components/NotFound'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-detail/:id" element={<MovieDetail />} />
            <Route path="/WatchList" element={<WatchList />} />
            <Route path="/search/:title" element={<Search />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
