import {IPage} from "@/interfaces/page.interface";
import {API_BASE_URL, urls} from "@/constants/urls";
import {ISingleMovie} from "@/interfaces/singleMovie.interface";
import {getHeaders} from "@/services/services.helper";

const movieService = {
    getPageByNumber: async (pageNumber: number): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.discover.getMoviesPage(pageNumber), {
            ...getHeaders()
        });

        return await res.json();
    },
    getMoviesPageWithGenre: async (genreIds: number, pageNumber: string): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.discover.getMoviesByGenre(genreIds, pageNumber));

        return await res.json();
    },
    searchMoviesByQuery: async (query: string, pageNumber: string): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.search.getMovieByQuery(query, pageNumber));

        return await res.json();
    },
    findMovieById: async (id: number): Promise<ISingleMovie> => {
        const res = await fetch(API_BASE_URL + urls.findMovieById.find(id));

        return res.json();
    }
}

export {
    movieService
}