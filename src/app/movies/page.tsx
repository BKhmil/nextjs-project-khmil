import MoviesList from "@/components/movies-list/MoviesList";
import {movieService} from "@/services/movie.service";
import Paginator from "@/components/paginator/Paginator";
import ErrorBox from "@/components/error-box/ErrorBox";
import css from './Movies.module.scss';
import Preloader from "@/components/preloader/Preloader";
import {Suspense} from "react";
import {ApiError} from "@/services/services.helper";
import {Places} from "@/enums/places.enum";

interface IProps {
    searchParams: {
        page?: string;
    };
}

const Content = async ({ searchParams }: IProps) => {
    const pageNumber = searchParams.page ? Number(searchParams.page) : 1;

    try {
        const data = await movieService.getPageByNumber(pageNumber);

        return (
            <>
                <MoviesList movies={data.results}/>
                <Paginator currentPage={pageNumber} totalPages={data.total_pages} place={Places.MOVIES}/>
            </>
        );
    } catch (e) {
        return <ErrorBox message={(e as ApiError).details.status_message} />;
    }
};

const MoviesPage = (props: IProps) => (
    <div className={css.moviesPage}>
        <Suspense fallback={<Preloader />}>
            <Content {...props} />
        </Suspense>
    </div>
);

export default MoviesPage;