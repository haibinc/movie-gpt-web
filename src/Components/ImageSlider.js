import {useState} from 'react';

export const ImageSlider = (props) => {
    let slides = [];
    let movieStats = [];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHidden, setHidden] = useState(true);

    const changeVisibility = () => {
        setHidden((prev) => !prev);
    }

    if (props.movie.length === 0) {
        slides = [
            {url: '/images/movieslide.jpeg'},
            {url: '/images/movies2.jpeg'},
            {url: '/images/movies3.webp'},
        ];
        movieStats = [
            {title: "", details: "", rating: "", year:"", genre: "", duration:""},
            {title: "", details: "", rating: "", year:"", genre: "", duration:""},
            {title: "", details: "", rating: "", year:"", genre: "", duration:""},
        ]
    } else if (props.movie && props.movie.length >= 3) {
        slides = [
            {url: `${props.movie[0].Poster}`, title: "movie1"},
            {url: `${props.movie[1].Poster}`, title: "movie2"},
            {url: `${props.movie[2].Poster}`, title: "movie3"},
        ];

        movieStats = [
            {
                title: `${props.movie[0].Title}`,
                details: `${props.movie[0].Plot}`,
                rating: `🍅:${parseFloat(props.movie[0].imdbRating)}`,
                year:`${props.movie[0].Year}`,
                genre: `${props.movie[0].Genre.split(", ")}`,
                duration:`${props.movie[0].Runtime.split(", ")[0]}`
            },
            {
                title: `${props.movie[1].Title}`,
                details: `${props.movie[1].Plot}`,
                rating: `🍅:${parseFloat(props.movie[1].imdbRating)}`,
                year:`${props.movie[1].Year}`,
                genre: `${props.movie[1].Genre.split(", ")}`,
                duration:`${props.movie[1].Runtime.split(", ")[0]}`
            },
            {
                title: `${props.movie[2].Title}`,
                details: `${props.movie[2].Plot}`,
                rating: `🍅:${parseFloat(props.movie[2].imdbRating)}`,
                year:`${props.movie[2].Year}`,
                genre: `${props.movie[2].Genre.split(", ")}`,
                duration:`${props.movie[2].Runtime.split(", ")[0]}`
            },
        ]

    }

    const goToPrevious = () => {
        console.log(currentSlide);
        if (currentSlide !== 0) {
            setCurrentSlide(currentSlide - 1);
        }
    }

    const goToNext = () => {
        console.log(currentSlide);
        if (currentSlide !== 2) {
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="ArrowButtons" onClick={goToPrevious}>
                ❰
            </div>
            <div>
                <img onClick={changeVisibility} src={slides[currentSlide].url} alt="movieImage"
                     className={isHidden ? 'showPoster' : 'hidePoster'}/>
                <div className={isHidden ? 'hiddendescriptionBox' : 'showndescriptionBox'}>
                    <ul className={isHidden ? 'hideCard' : 'showCard'}>
                        <h1 style={{
                            fontSize: '1.2rem',
                            color: 'cadetblue',
                            marginBottom: '1rem',
                        }}>{movieStats[currentSlide].title}</h1>
                        <h1 style={{
                            fontSize: '0.5rem',
                        }}>{movieStats[currentSlide].year} </h1>
                        <div style={{
                            display:'flex',
                            flexDirection: 'row',
                            marginRight:'6rem'
                        }}>
                            <h1 style={{
                                fontSize: '0.5rem',
                                marginRight: '1rem'
                            }}>{movieStats[currentSlide].rating} </h1>
                        </div>
                        <h1 style={{
                            fontSize: '0.5rem',
                            color: 'midnightblue'
                        }}>{movieStats[currentSlide].details} </h1>

                    </ul>
                </div>
            </div>
            <div className="ArrowButtons" onClick={goToNext}>
                ❱
            </div>
        </div>
    )
}