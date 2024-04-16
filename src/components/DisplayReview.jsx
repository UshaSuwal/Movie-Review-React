import React, { useEffect, useState } from "react";

export function DisplayReview({ id }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies/${id}/reviews`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div >
        
      <p className="mb-5"><span className="text-xl text-red-600">Total review: </span>{movie.review_count}</p>
      
        {movie.reviews?.map((review, index) => (
          <p key={index} className="bg-gray-600 p-1 pl-2 rounded-lg mb-2">{review.description}</p>
        ))}
      
    </div>
  );
}
