export function DisplayReview({ reviews }) {
  
  return (
    <div >
        
      <p className="mb-5 text-gray-300"><span className="text-xl text-red-600">Total review: </span>{reviews.length}</p>
      
        {reviews?.map((review, index) => (
          <p key={index} className="bg-gray-600 p-1 pl-2 rounded-lg mb-2">{review.description}</p>
        ))}
      
    </div>
  );
}
