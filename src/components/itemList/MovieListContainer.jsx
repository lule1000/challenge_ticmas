import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import axios from "axios";
import AxiosTmdb from "./AxiosTmdb";

const MovieListContainer = () => {
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

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=314dd2fd158d1a156815bfda6f2037c3&language=en-US&page=1`)
            .then((response) => {
                setMovies(response.data.results);
                setFilterData(response.data.results);
            })
        /* const fetchMovies = async (category) => {
            const { data } = await AxiosTmdb.get(category)
            setMovies(data.results)
            setFilterData(data.results)
        }

        fetchMovies('tv/popular') */
    }, [])

    console.log(movies)

    return (
        <>
            <div className='d-flex justify-content-center p-2 sticky-top'>
                <form className="d-flex w-25 mt-2" role="search">
                    <TextField className="form-control" onChange={handleChange} value={search} type="search" label="Search Movie" />
                </form>
            </div>
            <main className='m-4 d-flex flex-direction-row justify-content-center d-flex flex-wrap'>
                <MovieList movies={movies} />
            </main>
        </>
    );
}

export default MovieListContainer;