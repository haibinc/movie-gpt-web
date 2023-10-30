import {sendOMDBData} from './OMDBAPI.js';

export const sendGptRequest = async (props) =>
{
    const baseUrl = 'http://localhost:4000';
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
            const parsed_response = await JSON.parse(response.response);
            const data = await sendOMDBData(parsed_response.title);
            fetch(`${baseUrl}/postMovieData`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers:
                    {
                    'Content-Type': 'application/json',
                    },
            })
        }
    }
    catch(error){
        console.error("Error: ", error);
    }
}