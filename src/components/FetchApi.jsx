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
    <div className="mt-[5rem] mx-10">
      {movies.map((movie) => (
        <div key={movie.id} className="border rounded-lg p-4 w-full flex bg-gray-900 text-white shadow-lg mt-4">
          <div className="w-1/3 pr-4 mt-10 ml-5">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-2/3 pl-4 mt-10 ml-10">
            <h2 className=" font-bold text-red-600 text-4xl mb-8" style={{ fontFamily: 'Cinzel, serif' }}>{movie.title}</h2>
            <p className="text-md">Original Title: {movie.original_title}</p>
            <p className="text-md mb-5">Movie Id: {movie.mid}</p>
            <p className="text-md mb-5">Overview: {movie.overview}</p>
            <p className="text-md">Popularity: {movie.popularity}</p>
            <p className="text-md">Budget: ${movie.budget.toLocaleString()}</p>
            <p className="text-md">Duration: {movie.duration} min</p>
            <p className="text-md">Average vote: {movie.vote_average}</p>
            <p className="text-md">Total vote: {movie.vote_count}</p>
            <p className="text-md">Status: {movie.status}</p>
            <p className="text-md mt-2">
              Release Date: {new Date(movie.release_date).toLocaleDateString()}
            </p>
            <DisplayReview id={movie.mid} />
            <RenderForm id={movie.mid} />
          </div>
        </div>
      ))}
    </div>
  );
}
