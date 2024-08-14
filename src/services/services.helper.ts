const getHeaders = () => ({
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
});

export {
    getHeaders
}