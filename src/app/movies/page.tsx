import css from './Movies.module.scss';
import MoviesList from "@/components/movies-list/MoviesList";

const Page = () => {
    return (
        <div className={css.moviesPage}>
            <MoviesList />
        {/*    <Paginator />    */}
        </div>
    );
}

export default Page;