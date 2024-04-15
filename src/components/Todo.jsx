export function Todo({ todo }) {
  return (
    <div
      className="w-2/4 p-4 bg-gray-700 rounded-xl shadow-lg"
      style={{
        boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)",
        height: "450px",
      }}
    >
      <div
        className="flex flex-col overflow-y-auto"
        style={{ maxHeight: "100%" }}
      >
        {todo.movie_id}
      </div>
    </div>
  );
}
