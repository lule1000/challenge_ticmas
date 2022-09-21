import { createContext, useContext, useState } from "react";

const ShowMoviesContext = createContext();
export const useShowMoviesContext = () => useContext(ShowMoviesContext)

const ShowMoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState("");

    return (
        <ShowMoviesContext.Provider value={{ movies, setMovies, search, setSearch, filterData, setFilterData }}>
            {children}
        </ShowMoviesContext.Provider>
    );
}

export default ShowMoviesProvider;