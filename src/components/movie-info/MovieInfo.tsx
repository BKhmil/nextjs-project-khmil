import {ISingleMovie} from "@/interfaces/singleMovie.interface";
import React, {FC} from "react";
import css from './MovieInfo.module.scss';
import PosterPreview from "@/components/poster-preview/PosterPreview";
import StarRatings from "@/components/star-ratings/StarRatings";
import BackButton from "@/components/back-button/BackButton";

interface IProps {
    movie: ISingleMovie;
}

const MovieInfo: FC<IProps> = ({movie}) => {
    return (
        <div className={css.MovieInfo}>
            <div className={css.title}>{movie.title}</div>
            <div className='flex justify-evenly'>
                <PosterPreview
                    path={movie.poster_path}
                    alter={movie.title}
                    withPlay={false}
                    cName='mb-[5px]'
                    movieId={movie.id}
                />
                <div className={css.info}>
                    <div>Rating:</div>
                    <StarRatings size='large' rating={movie.vote_average}/>
                    <div>Genres:</div>
                    {movie.genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
                    <div className={css.part}>Origin country: {movie.origin_country.join(', ')}</div>
                    <div className={css.part}>Release date: {movie.release_date}</div>
                    <div className={css.part}>Runtime: {movie.runtime} min</div>
                </div>
            </div>
            <div className={css.overviewContainer}>
                <div className={css.overviewTitle}>Overview</div>
                <div className={css.overviewText}>{movie.overview}</div>
            </div>
            <BackButton />
        </div>
    );
}

export default MovieInfo;