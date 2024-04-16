
export function PostForm({ id, review, setReview }) {
  function postapi() {
    const body = {
      review: {
        description: review,
      },
    };

    fetch(`http://localhost:3000/api/v1/movies/${id}/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "default",
    }).then((response) => {
      if (response.ok) {
        setReview("");
      }
    });
  }

  return (
    <button
      className="button bg-red-700 hover:bg-red-600 px-4 py-2 border-black rounded-lg"
      onClick={postapi}
    >
      Save
    </button>
  );
}