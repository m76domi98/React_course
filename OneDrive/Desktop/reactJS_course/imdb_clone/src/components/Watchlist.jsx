import React, { useEffect, useState } from "react";
import genreids from "../utility/genre";
import { use } from "react";

function Watchlist({ watchlist, setWatchlist, handleRemoveFromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedInc = [...watchlist].sort((itemA, itemB) => {
      return itemA.vote_average - itemB.vote_average;
    });
    setWatchlist(sortedInc); // No need to spread sortedInc if it's already a new array
  };

  let sortDecreasing = () => {
    let sortedDec = [...watchlist].sort((itemA, itemB) => {
      return itemB.vote_average - itemA.vote_average;
    });
    setWatchlist(sortedDec); // No need to spread sortedDec if it's already a new array
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currentGenre == genre
                  ? "bg-purple-500 flex justify-center h-[3rem] w-[9rem] rounded-xl font-bold items-center mx-2"
                  : "bg-gray-500 flex justify-center h-[3rem] w-[9rem] rounded-xl font-bold items-center mx-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="px-3 border-white rounded h-[2rem] w-[18rem]"
          type="text"
          placeholder="Search movies"
          style={{ backgroundColor: "black", outline: "2px solid white" }} // Correctly use an object for inline styles
        />
      </div>
      <div>
        <table className="table-auto w-full border-separate border-spacing-2 text-white">
          <thead className="border-b-2">
            <tr>
              <th className="bg-purple-800 p-2 text-center ">Name</th>
              <div className="bg-purple-800 p-2 flex  justify-around items-center ">
                <div onClick={sortIncreasing} className="m-2">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <th>Ratings</th>
                <div className="m-2" onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>{" "}
                </div>
              </div>
              <th className="bg-purple-800 p-2 text-center ">Popularity</th>
              <th className="bg-purple-800 p-2 text-center ">Genre </th>
              <th className="bg-purple-800 p-2 text-center "></th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movie) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] == currentGenre;
                }
              })
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movie) => {
                return (
                  <tr className="bg-gray-700/30 hover:bg-gray-800 transition duration-300">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="rounded-xl h-[30vh] object-cover"
                        src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="movie poster"
                      />
                      <div className="mx-4 text-white"> {movie.title}</div>
                    </td>

                    <td className=" text-center">{movie.vote_average}</td>
                    <td className=" text-center">{movie.popularity} </td>
                    <td className=" text-center">
                      {genreids[movie.genre_ids[0]]}
                    </td>
                    <td>
                      <button
                        onClick={() => handleRemoveFromWatchList(movie)}
                        className="font-bold text-center text-red-600 hover:text-red-800 cursor-pointer transition duration-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
