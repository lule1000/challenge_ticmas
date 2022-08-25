import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: '314dd2fd158d1a156815bfda6f2037c3'
    }
})