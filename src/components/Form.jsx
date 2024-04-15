import { Button } from "./Button";
// import { Todo } from "./Todo";
import { useState } from "react";

export function Form() {
  // const [todo, setTodo] = useState([]);
  // const [task, setTask] = useState("");
  // const [randomIndex, setRandomIndex] = useState(null);
  const [id, setId] = useState(""); 
  const [review, setReview] = useState(""); 

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/movies/278/reviews")
  //     .then((response) => response.json())
  //     .then((data) => setTodo(data));
  // }, []);

  function postapi() {
    const body = {
      review: {
        description: review
      }
    };

    fetch(`http://localhost:3000/api/v1/movies/${id}/reviews`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      cache: 'default'
    }).then((response) => {
      if (response.ok) {
        setId("");
        setReview("");
      }
    });
  }

  // function add() {
  //   if (task) {
  //     setTodo([...todo, task]);
  //     setTask("");
  //   }
  // }

  function handleChange(event, setStateFunction) {
    setStateFunction(event.target.value);
  }

  // function displayRandom() {
  //   if (todo.length > 0) {
  //     let randomNum = Math.floor(Math.random() * todo.length);
  //     setRandomIndex(randomNum);
  //   }
  // }

  return (
    <form
        onSubmit={(e) => {
          postapi(); 
        }}
    >
    <div className="p-4 bg-black min-h-screen items-center">
      
      <div className="container mx-auto mt-24 justify-center gap-12">
        <div
          className="w-1/3 p-10 bg-gray-700 rounded-xl shadow-lg"
          style={{ boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)" }}
        >

          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a id..."
            style={{ color: "black" }}
            value={id} 
            onChange={(e) => handleChange(e, setId)} 
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a review..."
            style={{ height: "150px", color: "black" }}
            value={review} 
            onChange={(e) => handleChange(e, setReview)} 
          />

          <div className="flex justify-between mb-4">
            <Button
              
              color={"red"}
              icon={"fa-solid fa-floppy-disk ml-2"}
              text={"Save"}
            />
            {/* <Button
              
              color={"gray"}
              icon={"fa-solid fa-shuffle ml-2"}
              text={"Random"}
            /> */}
          </div>

          {/* <div
            className="mt-10 p-2 text-white text-xl"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            {randomIndex !== null && todo[randomIndex]}
          </div> */}
          
        </div>
        

        {/* <Todo todo={todo} /> */}
      </div>


      <div className="container mx-auto mt-24 justify-center gap-12">
        <div
          className="w-1/3 p-10 bg-gray-700 rounded-xl shadow-lg"
          style={{ boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)" }}
        >

          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a id..."
            style={{ color: "black" }}
            value={id} 
            onChange={(e) => handleChange(e, setId)} 
          />
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 mb-10"
            placeholder="Add a review..."
            style={{ height: "150px", color: "black" }}
            value={review} 
            onChange={(e) => handleChange(e, setReview)} 
          />

          <div className="flex justify-between mb-4">
            <Button
              
              color={"red"}
              icon={"fa-solid fa-floppy-disk ml-2"}
              text={"Save"}
            />
            {/* <Button
              
              color={"gray"}
              icon={"fa-solid fa-shuffle ml-2"}
              text={"Random"}
            /> */}
          </div>

          {/* <div
            className="mt-10 p-2 text-white text-xl"
            style={{ fontFamily: "Philosopher, sans-serif" }}
          >
            {randomIndex !== null && todo[randomIndex]}
          </div> */}
          
        </div>
        

        {/* <Todo todo={todo} /> */}
      </div>
      
    </div>
    </form>
  );
}
