import React, { useState } from "react";
import "./App.css";
import Serach from "./components/search/Serach";
import Movielist from "./components/movielist/Movielist";
import { moviesData } from "./Data";

function App() {
  const [movies, setMovies] = useState(moviesData);
  return (
    <div>
      <Serach />
      <Movielist movielist={movies} />
    </div>
  );
}

export default App;
