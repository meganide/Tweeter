let BASE_URL = '';
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:8000';
}

export { BASE_URL };
