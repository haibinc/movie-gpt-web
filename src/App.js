import React, {useState} from 'react';
import './App.css';
import {SearchBox} from "./Components/SearchBox.js";
import {MovieCard} from "./Components/MovieCard.js";

function App(props) {
    const [movieRecommendations, setMovieRecommendations] = useState([]);

  return (
      <div className="App">
        <h1> MOVIE GPT</h1>
          <MovieCard movie={movieRecommendations}/>
        <SearchBox setMovie={setMovieRecommendations}/>
      </div>
  );
}

export default App;