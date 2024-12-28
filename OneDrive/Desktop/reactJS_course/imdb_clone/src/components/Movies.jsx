import React, { useEffect, useState } from "react";
import axios from "axios"; // Add this line

import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchlist, handleRemovefromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const handlePrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1); 
    }
  };

  const handleNext = () => {
    setPageNum(pageNum + 1); 
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2f1823aec05bd57546547b1b7c9c2d50&language=en-US&page=${pageNum}`
      )
      .then((res) => {
        console.log("Movies fetched for page:", pageNum, res.data.results); // Debugging
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [pageNum]); 

  return (
    <div>
      <div className="text-center font-bold p-3">Trending Movies</div>

      <div className="flex flex-row m-2 flex-wrap justify-around items-center">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            name={movie.original_title}
            movie={movie}
            handleAddtoWatchlist={handleAddtoWatchlist}
            handleRemovefromWatchlist={handleRemovefromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination
        pageNum={pageNum}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
      <div className="text-sm">
        USING TMDB API - NOT ASSOCIATED W IT THO
      </div>
    </div>

  );
}

export default Movies;
