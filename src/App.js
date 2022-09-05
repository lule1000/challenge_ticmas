import './App.css';
import Box from '@mui/material/Box';
import NavBar from './components/navbar/NavBar';
import MovieListContainer from './components/itemList/MovieListContainer';
import ShowMoviesProvider from './components/context/ShowMoviesContext';
import InternalBrowser from './components/internalBrowser/InternalBrowser';

function App() {
  return (
    <ShowMoviesProvider>
      <Box>
        <NavBar />
        <InternalBrowser />
        <MovieListContainer />
      </Box>
    </ShowMoviesProvider>
  );
}

export default App;
