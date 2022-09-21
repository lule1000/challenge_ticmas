import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AxiosTmdb from '../itemList/AxiosTmdb';

const InternalBrowser = () => {
    const [filterData, setFilterData] = useState([]);

    const handleChange = (e) => {
        setFilterData(e.target.value)
        filterSearch(e.target.value);
    }

    const filterSearch = (termSearch) => {
        let result = filterData.filter((e) => {
            if (e.title.toString().toLowerCase().includes(termSearch.toLowerCase())) {
                return e;
            }
        })
    }

    const fetchMovies = async (category) => {
        const { data } = await AxiosTmdb.get(category)
        console.log(data)
    }
    

    return (
        <div className='d-flex justify-content-center p-2 sticky-top'>
            <form className="d-flex w-25 mt-2" role="search">
                <TextField className="form-control" onChange={handleChange} type="search" label="Search Movie" />
            </form>
        </div>
    );
}

export default InternalBrowser;