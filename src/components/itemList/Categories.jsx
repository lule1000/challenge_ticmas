import AxiosTmdb from './AxiosTmdb';
import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const fetchMovies = async (category) => {
            const { data } = await AxiosTmdb.get(category)
            console.log(data.genres)
            setCategories(data.genres)
        }

        fetchMovies(`genre/movie/list`);
    }, [])

    return (
        <div>
            {categories.map(({ name, id }) => (
                <Accordion key={id} className='m-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default Categories;