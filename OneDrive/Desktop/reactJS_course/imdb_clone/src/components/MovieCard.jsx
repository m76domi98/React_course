import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  handleRemovefromWatchlist,
  movie,
  poster_path,
  name,
  handleAddtoWatchlist,
  watchlist,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) { // Use strict equality
        return true;
      }
    }
    return false;
  }

  return (
    <div className="p-3 w-[150px] hover:scale-110 duration-300 hover:cursor-pointer">
      <div
        className="relative rounded-xl bg-cover bg-center h-[40vh]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      >
        {doesContain(movie) ? (
          <div
            onClick={() => handleRemovefromWatchlist(movie)}
            className="absolute top-1 right-1 flex h-8 w-8 items-center justify-center rounded-xl bg-gray-600/60"
          >
            &#10060; {/* ❌ Icon */}
          </div>
        ) : (
          <div
            onClick={() => handleAddtoWatchlist(movie)}
            className="absolute top-1 right-1 flex h-8 w-8 items-center justify-center rounded-xl bg-gray-600/60"
          >
            &#128525; {/* 😍 Icon */}
          </div>
        )}
      </div>
      <div className="bg-flex justify-center items-center mt-2 text-center">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
