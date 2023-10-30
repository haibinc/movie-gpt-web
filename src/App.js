import React from 'react';
import './App.css';
import {SearchBox} from "./Components/SearchBox.js";
import {MovieCard} from "./Components/MovieCard.js";

function App(props) {
  return (
      <div className="App">
        <h1> MOVIE GPT</h1>
          <MovieCard> </MovieCard>
        <SearchBox/>
      </div>
  );
}

export default App;