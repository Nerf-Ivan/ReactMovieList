import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    
    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img 
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/placeholder-movie.jpg'} 
                    alt={movie.title}
                    onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0xNTAgMjI1TDEyNSAyMDBMMTc1IDIwMEwxNTAgMjI1WiIgZmlsbD0iIzY2NiIvPgo8dGV4dCB4PSIxNTAiIHk9IjI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ObyBJbWFnZTwvdGV4dD4KPC9zdmc+';
                    }}
                />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>❤</button>
                    {movie.vote_average > 0 && (
                        <div className="movie-rating">
                            ⭐ {movie.vote_average.toFixed(1)}
                        </div>
                    )}
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard