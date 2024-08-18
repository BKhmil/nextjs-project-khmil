import {movieService} from "@/services/movie.service";
import MoviesList from "@/components/movies-list/MoviesList";
import Paginator from "@/components/paginator/Paginator";
import ErrorBox from "@/components/error-box/ErrorBox";
import {ApiError} from "@/services/services.helper";
import {Suspense} from "react";
import Preloader from "@/components/preloader/Preloader";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import GenresPaginator from "@/components/genres-paginator/GenresPaginator";
import {IGenre} from "@/interfaces/genre.interface";
import {genreService} from "@/services/genre.service";
import css from "@/app/movies/Movies.module.scss";
import {Places} from "@/components/enums/places.enum";

type TProps = Params & {
    searchParams: {
        page?: string;
    };
}

const Content = async ({ params: {genreId}, searchParams }: TProps) => {
    const pageNumber = searchParams.page ? Number(searchParams.page) : 1;

    let genres: IGenre[];

    try {
        genres = await genreService.getAllMovieGenres();
    } catch (e) {
        console.log((e as ApiError).details.status_message);
    }

    try {
        const data = await movieService.getMoviesPageWithGenre(genreId, pageNumber);

        return (
            <>
                <GenresPaginator genres={genres} activeId={genreId} />
                <MoviesList movies={data.results}/>
                <Paginator currentPage={pageNumber} totalPages={data.total_pages} place={Places.GENRES}/>
            </>
        );
    } catch (e) {
        return <ErrorBox message={(e as ApiError).details.status_message} />;
    }
};

const GenresPage = (props: TProps) => (
    <div className={css.moviesPage}>
        <Suspense fallback={<Preloader />}>
            <Content {...props} />
        </Suspense>
    </div>
);

export default GenresPage;