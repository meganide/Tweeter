import axios from 'axios';

import { BASE_URL } from './baseUrl';

const makeRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export {makeRequest}
