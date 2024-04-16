import React, { useEffect, useState } from "react";
import { RenderForm } from "./RenderForm";
import { DisplayReview } from "./DisplayReview";

export function FetchApi() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="mt-[5rem] mx-10">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="border rounded-lg p-4 w-full bg-gray-900 text-white shadow-lg mt-4"
          >
            <div className="flex">
              <div className="w-1/3 pr-4 mt-10 ml-5">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                  alt={movie.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="border-l border-gray-400 ml-10  mt-12" style={{ height: '500px' }}></div> 
              <div className="w-2/3 pl-4 mt-10 ml-10">
                <h2
                  className=" font-bold text-red-600 text-4xl mb-8"
                  style={{ fontFamily: "Cinzel, serif" }}
                >
                  {movie.title}
                </h2>
                <p className="text-lg">
                <strong className="mr-1">Original Title:</strong><span class="text-base text-red-400"> {movie.original_title}</span>
                </p>
                <p className="text-lg mb-5"><strong className="mr-1">Movie Id:</strong> <span class="text-base text-gray-400"> {movie.mid}</span></p>
                <p className="text-lg mb-5"><strong className="mr-1">Overview:</strong> <span class="text-base text-gray-400"> {movie.overview}</span></p>
                <p className="text-lg"><strong className="mr-1">Popularity:</strong><span class="text-base text-gray-400">  {movie.popularity}</span></p>
                <p className="text-lg">
                <strong className="mr-1">Budget:</strong><span class="text-base text-gray-400">  ${movie.budget.toLocaleString()}</span>
                </p>
                <p className="text-lg"><strong className="mr-1">Duration: </strong><span class="text-base text-gray-400">  {movie.duration} min</span></p>
                <p className="text-lg"><strong className="mr-1">Average vote:</strong> <span class="text-base text-gray-400"> {movie.vote_average}</span></p>
                <p className="text-lg"><strong className="mr-1">Total vote:</strong><span class="text-base text-gray-400">  {movie.vote_count}</span></p>
                <p className="text-lg"><strong className="mr-1">Status:</strong><span class="text-base text-gray-400">  {movie.status}</span></p>
                <p className="text-lg mt-2">
                <strong className="mr-1">Release Date:</strong><span class="text-base text-gray-400"> {" "}
                  {new Date(movie.release_date).toLocaleDateString()}</span>
                </p>
              </div>
            </div>
            <hr className="m-10"></hr>
            
            <div className="ml-10 flex">
              <div className="w-[36%] ">
                <DisplayReview id={movie.mid} />
              </div>
              
              <div className=" ml-32">
                <RenderForm id={movie.mid} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
