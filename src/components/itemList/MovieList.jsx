import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        movies.map(({ title, poster_path, release_date, id }) => {
            return <Movie title={title} poster_path={poster_path} release_date={release_date} id={id}/>
        })
    );
}

export default MovieList;