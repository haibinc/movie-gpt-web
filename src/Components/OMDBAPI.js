export const sendOMDBData = async (props) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;// Replace 'YOUR_API_KEY' with your actual API key
    const movieTitle = props; // Replace with the movie title you want to search
// Construct the API request URL
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

// Fetch movie details using the OMDb API
    try
    {
        const res = await fetch(apiUrl)
        if (res.ok)
        {
            const data = await res.json();
            return data;
        }
        else
        {
            throw new Error('Network response was not ok');
        }
    }
    catch(error){
        console.error("Error: ", error);
    }

}

