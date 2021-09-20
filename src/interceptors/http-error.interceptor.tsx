import axios from 'axios';

axios.interceptors.response.use(res => res.data, err => {
    console.error('HTTP error occurred', err);
})