import {IApiError} from "@/interfaces/apiError.interface";
import {_API_ACCESS_TOKEN} from "@/constants/utils";

const getHeaders = () => ({
    headers: {
        accept: 'application/json',
        // I forgot that only I have access to the .env file
        // Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
        Authorization: `Bearer ${_API_ACCESS_TOKEN}`
    }
});

class ApiError extends Error {
    public details: IApiError;

    constructor(details: IApiError) {
        super(details.status_message);
        this.details = details;
    }
}

export {
    getHeaders,
    ApiError
}