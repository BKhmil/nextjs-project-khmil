import React, {FC} from "react";
import {IMovie} from "@/interfaces/movie.interface";
import {IMAGES_BASE_URL} from "@/constants/urls";
import PosterPreview from "@/components/poster-preview/PosterPreview";
import css from './MovieListCard.module.scss';

interface IProps {
    movie: IMovie;
}

const MovieListCard: FC<IProps> = ({movie}) => {
    return (
        <div className={css.MovieListCard}>
            <PosterPreview
                path={IMAGES_BASE_URL + '/w200' + movie.poster_path}
                alter={movie.title}
                withPlay={true}
                styles={{marginBottom: '5px'}}
                // movieId={movie.id}
            />
            {/*<StarRatings*/}
            {/*    rating={movie.vote_average}*/}
            {/*    starEmptyColor="darkgrey"*/}
            {/*    starRatedColor={"purple"}*/}
            {/*    numberOfStars={10}*/}
            {/*    starDimension="17px"*/}
            {/*    starSpacing="1px"*/}
            {/*    name='rating'*/}
            {/*/>*/}
            <div className={css.title}>{movie.title}</div>
            {/*<div className={css.BadgesContainer}>*/}
            {/*    {movieGenres.map((genre, index) => (*/}
            {/*        <GenreBadge key={index} genre={genre}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
}

export default MovieListCard;