import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });


export const fetchPosts = () => API.get(`/pizzas`);
export const fetchIng = () => API.get(`/ing`);