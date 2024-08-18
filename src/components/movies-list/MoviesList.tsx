import MovieListCard from "@/components/movie-list-card/MovieListCard";
import {IMovie} from "@/interfaces/movie.interface";
import {genreService} from "@/services/genre.service";
import {ApiError} from "@/services/services.helper";
import css from './MoviesList.module.scss';
import {IGenre} from "@/interfaces/genre.interface";

interface IProps {
    movies: IMovie[];
}

const MoviesList = async ({movies}: IProps) => {
    let genres: IGenre[];

    try {
        genres = await genreService.getAllMovieGenres();
    } catch (e) {
        console.log((e as ApiError).details.status_message);
    }

    const moviesElements = movies.map(movie =>
        <MovieListCard
            key={movie.id}
            movie={movie}
            genres={genres}
        />
    );

    return (
        <div className={css.MoviesList}>
            {moviesElements}
        </div>
    );
}

export default MoviesList;
// {
//     success: false,
//         status_code: 34,
//     status_message: 'The resource you requested could not be found.'
// }

// {
//     status_code: 7,
//         status_message: 'Invalid API key: You must be granted a valid key.',
//     success: false
// }