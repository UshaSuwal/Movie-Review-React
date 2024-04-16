import "./App.css";
import { Navbar } from "./components/Navbar";

import { FetchApi } from "./components/FetchApi";



function App() {
  return (
    <div className="bg-gray-600">
      <Navbar/>
      <FetchApi />
    </div>
  );
}

export default App;
