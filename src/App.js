import React, {useState} from 'react';
import './App.css';
import {SearchBox} from "./Components/SearchBox.js";
import {ImageSlider} from "./Components/ImageSlider";
import DescriptionBox from "./Components/DescriptionBox";

function App(props) {
    const [movieRecommendations, setMovieRecommendations] = useState([]);
    return (
        <div className="App">
            <div className="titleHeader">
                <h1> MOVIE GPT</h1>
            </div>
            <div style={{position:'absolute', width:'20rem', left:'10rem'}}>
            <DescriptionBox/>
            </div>
            <div>
            <ImageSlider movie={movieRecommendations}/>
            <SearchBox setMovie={setMovieRecommendations}/>
            </div>
        </div>
    );
}

export default App;