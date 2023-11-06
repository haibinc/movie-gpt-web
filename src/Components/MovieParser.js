export const movieParser = (props) =>
{
    const lines = props.split('\n').filter(Boolean);
    const movieLines = lines.filter(line => line.match(/^\d+\.\s/));
    const movies = movieLines.map(line => line.split('. ')[1]);
    return movies;
}