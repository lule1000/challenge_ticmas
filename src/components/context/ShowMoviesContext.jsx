import { createContext, useContext, useState } from "react";

const ShowMoviesContext = createContext();
export const useShowMoviesContext = () => useContext(ShowMoviesContext)

const ShowMoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    return (
        <ShowMoviesContext.Provider value={{ movies, setMovies, search, setSearch }}>
            {children}
        </ShowMoviesContext.Provider>
    );
}

export default ShowMoviesProvider;