const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p';

const urls = {
    discover: {
        getMoviesPage: (pageNumber: number) =>
            '/discover/movie?page=' + pageNumber.toString(),
        getMoviesByGenre: (genreIds: number, pageNumber: number) =>
            '/discover/movie?with_genres=' + genreIds + '&page=' + pageNumber
    },
    search: {
        getMovieByQuery: (query: string, pageNumber: number) =>
            '/search/movie?query=' + query + '&page=' + pageNumber
    },
    genres: {
        movieList: '/genre/movie/list'
    },
    findMovieById: {
        find: (id: number) => '/movie/' + id
    }
}

export {
    API_BASE_URL,
    IMAGES_BASE_URL,
    urls
}