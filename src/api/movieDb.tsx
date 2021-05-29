import axios from 'axios';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '45cc68f74f3882949c43829829ccebca',
        language: 'es-ES'
    }
});

export default movieDb;