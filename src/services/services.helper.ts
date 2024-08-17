import {IApiError} from "@/interfaces/apiError.interface";

const getHeaders = () => ({
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
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