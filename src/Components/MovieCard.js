
export const MovieCard = (props) =>
{
    console.log(props.movie.Title);
    return (
        <div>
            <img src={props.movie.Poster} className="Card"/>
        </div>
    );
}