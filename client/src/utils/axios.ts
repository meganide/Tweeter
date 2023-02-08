import { BASE_URL } from './baseUrl';
import axios from 'axios';

const makeRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export {makeRequest}
