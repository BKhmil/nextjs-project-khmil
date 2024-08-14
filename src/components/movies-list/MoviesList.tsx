'use server';

import {movieService} from "@/services/movie.service";
import css from './MoviesList.module.scss';
import MovieListCard from "@/components/movie-list-card/MovieListCard";

interface sParams {
    searchParams: {
        page: string;
    }
}

const MoviesList = async ({searchParams: page}: sParams) => {
    const moviesPage = await movieService.getPageByNumber(Number(page) || 1);

    const moviesElements = moviesPage.results.map(movie =>
        <MovieListCard
        key={movie.id}
        movie={movie}
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