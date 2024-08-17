import MovieInfo from "@/components/movie-info/MovieInfo";
import {movieService} from "@/services/movie.service";
import {ApiError} from "@/services/services.helper";
import ErrorBox from "@/components/error-box/ErrorBox";
import {Suspense} from "react";
import Preloader from "@/components/preloader/Preloader";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import css from './MovieInfoPage.module.scss';

const Content = async ({ params }: Params) => {
    const {movieId} = params;

    try {
        const movie = await movieService.findMovieById(Number(movieId));

        return <MovieInfo movie={movie}/>;
    } catch (e) {
        return <ErrorBox message={(e as ApiError).details.status_message} />;
    }
};

const MovieInfoPage = (props: Params) => (
    <div className={css.page}>
        <Suspense fallback={<Preloader />}>
            <Content {...props} />
        </Suspense>
    </div>
);

export default MovieInfoPage;