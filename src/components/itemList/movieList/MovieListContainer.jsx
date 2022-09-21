import { useEffect, useState } from "react";
import { useShowMoviesContext } from "../../context/ShowMoviesContext";
import MovieList from "./MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import AxiosTmdb from "../AxiosTmdb";
import Button from '@mui/material/Button';

const MovieListContainer = () => {
    const [page, setPage] = useState(1);
    const {movies, setMovies, setFilterData} = useShowMoviesContext();

    const actualPage = (quantity) => {
        if (quantity === "subtract" && page > 1) {
            setPage(page - 1)
        } else if (quantity === "add") {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        const fetchMovies = async (category) => {
            const { data } = await AxiosTmdb.get(category)
            console.log(data.results)
            setMovies(data.results)
            setFilterData(data.results)
        }

        fetchMovies(`movie/popular?page=${page}`);
    }, [page]);

    return (
        <Box>
            <main className='m-4 d-flex flex-direction-row justify-content-center d-flex flex-wrap'>
                <MovieList movies={movies} />
            </main>
            <Box sx={{ padding: 1 }} className="d-flex justify-content-center align-items-center">
                <Button variant="outlined" className="me-2" onClick={() => actualPage("subtract")}>{'<'}</Button>
                {page}
                <Button variant="outlined" className="ms-2" onClick={() => actualPage("add")}>{'>'}</Button>
            </Box>
        </Box>
    );
}

export default MovieListContainer;