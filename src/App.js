import React, {useState} from 'react';
import './App.css';
import {SearchBox} from "./Components/SearchBox.js";
import {ImageSlider} from "./Components/ImageSlider";

function App(props) {
    const [movieRecommendations, setMovieRecommendations] = useState([]);

  return (
      <div className="App">
        <h1> MOVIE GPT</h1>
          <ImageSlider movie={movieRecommendations}/>
        <SearchBox setMovie={setMovieRecommendations}/>
      </div>
  );
}

export default App;