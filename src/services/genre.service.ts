import {IGenresResponse} from "@/interfaces/genresResponse.interface";
import {API_BASE_URL, urls} from "@/constants/urls";
import {ApiError, getHeaders} from "@/services/services.helper";
import {IGenre} from "@/interfaces/genre.interface";

const genreService = {
    getAllMovieGenres: async (): Promise<IGenre[]> => {
        const res = await fetch(API_BASE_URL + urls.genres.movieList, {
            ...getHeaders(),
            next: {
                revalidate: 86400
            }
        });

        if (!res.ok) {
            throw new ApiError(await res.json());
        }

        const data: IGenresResponse = await res.json();

        return data.genres;
    }
};

export {
    genreService
}