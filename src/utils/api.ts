import axios from 'axios';
import { API_URL } from '../configs/configs';

const api = axios.create({baseURL: API_URL});

export { api };
