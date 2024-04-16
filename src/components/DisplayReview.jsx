import React, { useEffect, useState } from "react";

export function DisplayReview({ id }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies/${id}/reviews`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  return (
    <div className="mt-[5rem] ">
        <p className="text-2xl font-bold text-red-600">Reviews:</p>
      <p>Total review: {movie.review_count}</p>
      
        {movie.reviews?.map((review, index) => (
          <p key={index}>{review.description}</p>
        ))}
      
    </div>
  );
}
