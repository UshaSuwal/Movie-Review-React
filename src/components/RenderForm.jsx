import { useState } from "react";
import { PostForm } from "./PostForm";

export function RenderForm({id}) {
  const [review, setReview] = useState("");

  function handleChange(event, setStateFunction) {
    setStateFunction(event.target.value);
  }

  return (
    <form className="mt-12 flex items-center space-y-2 py-2 rounded shadow-md w-full ">
      <div className="mr-5">
      <textarea
        placeholder="Review..."
        value={review}
        onChange={(e) => handleChange(e, setReview)}
        className="w-full mr-28 p-2 border-black rounded focus:outline-none focus:border-blue-500 text-white bg-gray-700"
      />
      </div>
      <PostForm id={id} review={review}  setReview={setReview} />
    </form>
  );
}
