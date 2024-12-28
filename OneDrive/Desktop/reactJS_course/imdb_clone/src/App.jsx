import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddtoWatchlist = (movie) => {
    if (!watchlist.some((item) => item.id === movie.id)) {
      let newWatchlist = [...watchlist, movie];
      setWatchlist(newWatchlist);
      localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
      console.log("Updated Watchlist:", newWatchlist);
    } else {
      console.log("Movie is already in the watchlist:", movie);
    }
  };

  let handleRemovefromWatchlist = (movie) => {
    let filteredWatchlist = watchlist.filter((item) => {
      return item.id != movie.id;
    });

    localStorage.setItem('moviesApp',JSON.stringify(filteredWatchlist))
    setWatchlist(filteredWatchlist);
  };

  useEffect(() =>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  handleRemovefromWatchlist={handleRemovefromWatchlist}
                  handleAddtoWatchlist={handleAddtoWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemoveFromWatchList={handleRemovefromWatchlist}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
