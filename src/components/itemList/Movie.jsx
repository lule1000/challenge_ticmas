import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const getPostUrl = ((poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
})

const Movie = ({ title, poster_path, release_date, id }) => {
    return (
        <Box sx={{ width: 150 }} className='m-2 d-flex flex-column'>
            <ImageList sx={{ width: 150, height: 225 }} cols={1} rowHeight={164}>
                <ImageListItem key={id}>
                    <img
                        className='rounded'
                        src={getPostUrl(poster_path)}
                        srcSet={`${getPostUrl(poster_path)}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={title} loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            <div>
                <h6>{title}</h6>
                <p>{release_date}</p>
            </div>
        </Box>
    );
}
export default Movie;