import {Suspense} from "react";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {movieService} from "@/services/movie.service";
import MoviesList from "@/components/movies-list/MoviesList";
import Paginator from "@/components/paginator/Paginator";
import {Places} from "@/enums/places.enum";
import ErrorBox from "@/components/error-box/ErrorBox";
import Preloader from "@/components/preloader/Preloader";
import css from "@/app/movies/Movies.module.scss";
import type {Metadata} from "next";

type TProps = Params & {
    searchParams: {
        page?: string;
    };
}

export const generateMetadata = async ({params} : Params): Promise<Metadata> => {
    return {
        title: 'Movies | ' + params.query,
        description: 'Search page'
    };
}

const Content = async ({ params: {query}, searchParams }: TProps) => {
    const pageNumber = searchParams.page ? Number(searchParams.page) : 1;

    const data = await movieService.searchMoviesByQuery(query, pageNumber);

    if (data.results.length) {
        return (
            <>
                <MoviesList movies={data.results}/>
                <Paginator currentPage={pageNumber} totalPages={data.total_pages} place={Places.SEARCH}/>
            </>
        );
    } else {
        return <ErrorBox message='No movies by current query' />;
    }
};

const SearchPage = (props: TProps) => (
    <div className={css.moviesPage}>
        <Suspense fallback={<Preloader />}>
            <Content {...props} />
        </Suspense>
    </div>
);

export default SearchPage;