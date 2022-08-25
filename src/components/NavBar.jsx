import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';

const getPostUrl = (() => {
    return `https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg`
})

const NavBar = () => {
    return (
        <nav>
            <Box sx={{ width: 175, margin: 2 }}>
                <img src={getPostUrl()} alt="logo" />
            </Box>
        </nav>
    );
}

export default NavBar;