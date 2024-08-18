import {IPage} from "@/interfaces/page.interface";
import {API_BASE_URL, urls} from "@/constants/urls";
import {ISingleMovie} from "@/interfaces/singleMovie.interface";
import {ApiError, getHeaders} from "@/services/services.helper";

const movieService = {
    getPageByNumber: async (pageNumber: number): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.discover.getMoviesPage(pageNumber), {
            ...getHeaders(),
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new ApiError(await res.json());
        }

        return await res.json() as IPage;
    },
    getMoviesPageWithGenre: async (genreIds: number, pageNumber: number): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.discover.getMoviesByGenre(genreIds, pageNumber), {
            ...getHeaders(),
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new ApiError(await res.json());
        }

        return await res.json();
    },
    searchMoviesByQuery: async (query: string, pageNumber: string): Promise<IPage> => {
        const res = await fetch(API_BASE_URL + urls.search.getMovieByQuery(query, pageNumber));

        return await res.json();
    },
    findMovieById: async (id: number): Promise<ISingleMovie> => {
        const res = await fetch(API_BASE_URL + urls.findMovieById.find(id), {
            ...getHeaders(),
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new ApiError(await res.json());
        }

        return res.json();
    }
}

export {
    movieService
}