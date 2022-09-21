import TextField from '@mui/material/TextField';
import { useShowMoviesContext } from "../context/ShowMoviesContext";
import AxiosTmdb from '../itemList/AxiosTmdb';

const InternalBrowser = () => {
    const { setMovies, filterData, setFilterData, search, setSearch } = useShowMoviesContext();

    const handleChange = (e) => {
        setSearch(e.target.value);
        filterSearch(search);
    }

    const filterSearch = (termSearch) => {
        let resultado = filterData.filter((e) => {
            if (e.title.toString().toLowerCase().includes(termSearch.toLowerCase())) {
                return e;
            }
        })
        setMovies(resultado)
        
        const fetchMovies = async (category) => {
            const { data } = await AxiosTmdb.get(category)
            setFilterData(data.results)
        }

        fetchMovies(`search/movie?query=${search}`);
    }


    return (
        <div className='d-flex justify-content-center p-2 sticky-top'>
            <form className="d-flex w-25 mt-2" role="search">
                <TextField className="form-control" onChange={handleChange} value={search} type="search" label="Search Movie" />

            </form>
        </div>
    );
}

export default InternalBrowser;