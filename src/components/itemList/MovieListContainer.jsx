import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AxiosTmdb from "./AxiosTmdb";
import Button from '@mui/material/Button';

const MovieListContainer = () => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        filtrarBusqueda(e.target.value);
    }

    const filtrarBusqueda = (terminoBusqueda) => {
        let resultado = filterData.filter((e) => {
            if (e.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return e;
            }
        })
        setMovies(resultado)
    }

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
            console.log(data)
            setMovies(data.results)
            setFilterData(data.results)
        }

        fetchMovies(`movie/popular?page=${page}`);
    }, [page])

    return (
        <Box>
            <div className='d-flex justify-content-center p-2 sticky-top'>
                <form className="d-flex w-25 mt-2" role="search">
                    <TextField className="form-control" onChange={handleChange} value={search} type="search" label="Search Movie" />
                </form>
            </div>
            <main className='m-4 d-flex flex-direction-row justify-content-center d-flex flex-wrap'>
                <MovieList movies={movies} />
            </main>
            <Box sx={{ padding: 1 }} className="d-flex justify-content-center align-items-center">
                <Button variant="outlined" className="me-2" onClick={() => actualPage("subtract")}>Previous Page</Button>
                {page}
                <Button variant="outlined" className="ms-2" onClick={() => actualPage("add")}>Next Page</Button>
            </Box>
        </Box>
    );
}

export default MovieListContainer;