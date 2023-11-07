import {useState} from 'react';

export const ImageSlider = (props) =>
{
    let slides = [
        {url: '/images/movieslide.jpeg'},
        {url: '/images/movies2.jpeg'},
        {url: '/images/movies3.webp'},
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    if(props.movie && props.movie.length >= 3)
    {
        slides = [
            { url: `${props.movie[0].Poster}`, title: "movie1" },
            { url: `${props.movie[1].Poster}`, title: "movie2" },
            { url: `${props.movie[2].Poster}`, title: "movie3" },
        ];
    }

    const goToPrevious = () =>
    {
        console.log(currentSlide);
        if(currentSlide !== 0)
        {
            setCurrentSlide(currentSlide-1);
        }
    }

    const goToNext = () =>
    {
        console.log(currentSlide);
        if(currentSlide !== 2)
        {
            setCurrentSlide(currentSlide+1);
        }
    }

    return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="ArrowButtons" onClick={goToPrevious}>
                ❰
            </div>
            <img src={slides[currentSlide].url} alt="movieImage" className="Card"/>
            <div className="ArrowButtons" onClick={goToNext}>
                ❱
            </div>
        </div>
    )
}