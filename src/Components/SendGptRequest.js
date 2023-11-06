import {sendOMDBData} from './OMDBAPI.js';
import {movieParser} from "./MovieParser.js";

export const sendGptRequest = async (props) =>
{
    const baseUrl = 'https://moviegpt-a3c827963e7a.herokuapp.com';
    try{
        const res = await fetch(`${baseUrl}/requestGpt`, {

            method: 'POST',
            mode: "cors",
            body: props.input,
            headers: {
                'Content-Type': 'text/plain',

            },
        })
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        else
        {
            const response = await res.json();
            const parsed_response = movieParser(response);
            // console.log(parsed_response);
            const omdbDataArray = await Promise.all(parsed_response.map((movie_name) => {
                return sendOMDBData(movie_name);
            }))
            console.log(omdbDataArray);
            return omdbDataArray;

        }
    }
    catch(error){
        console.error("Error: ", error);
    }
}