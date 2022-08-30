import './App.css';
import Box from '@mui/material/Box';
import NavBar from './components/NavBar';
import MovieListContainer from './components/itemList/MovieListContainer';

function App() {
  return (
    <Box>
      <NavBar />
      <MovieListContainer />
    </Box>
  );
}

export default App;
