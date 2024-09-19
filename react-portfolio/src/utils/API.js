import axios from 'axios';

const search = (query) =>
    axios.get(`https://api.github.com/users/${query}/repos`)

export default search;