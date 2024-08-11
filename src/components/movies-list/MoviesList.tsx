'use server';

const MoviesList = () => {
    fetch('https://api.themoviedb.org/3/movies')
        .then(res => res.json())
        .then(console.log);


    return (
        <div></div>
    );
}

export default MoviesList;