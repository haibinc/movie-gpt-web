import React from 'react';
import {MenuButton} from "./MenuButton";
import {useState} from "react";

function DescriptionBox(props) {

    const [isHidden, setIsHidden] = useState(false);

    const reveal = () => {
        setIsHidden((prev) => !prev);
    }
    return (
        <div>
            <div>
                <MenuButton onClick={reveal}>
                    PROJECT DESCRIPTION
                </MenuButton>
            </div>
            <div className={isHidden ? 'hideDesc' : 'showDesc'}>
                <h1 style={{fontSize: '0.7rem'}}>Enter a movie name e.g.(Interstellar) into the search box. Wait for
                    GPT to load and then you have your movies. You can click on the image to get the movie's info .</h1>
            </div>
        </div>
    );
}

export default DescriptionBox;