import React, {FC} from "react";
import {IMovie} from "@/interfaces/movie.interface";
import PosterPreview from "@/components/poster-preview/PosterPreview";
import css from './MovieListCard.module.scss';
import StarRatings from "@/components/star-ratings/StarRatings";
import {IGenre} from "@/interfaces/genre.interface";
import GenreBadge from "@/components/genre-badge/GenreBadge";

interface IProps {
    movie: IMovie;
    genres: IGenre[];
}

const MovieListCard: FC<IProps> = ({movie, genres}) => {
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id));

    return (
        <div className={css.MovieListCard}>
            <PosterPreview
                path={movie.poster_path}
                alter={movie.title}
                withPlay={true}
                cName='mb-[5px]'
                movieId={movie.id}
            />
            <StarRatings rating={movie.vote_average} size='small'/>
            <div className={css.title}>{movie.title}</div>
            <div className={css.BadgesContainer}>
                {movieGenres.map(genre => <GenreBadge key={genre.id} genre={genre.name}/>)}
            </div>
        </div>
    );
}

export default MovieListCard;