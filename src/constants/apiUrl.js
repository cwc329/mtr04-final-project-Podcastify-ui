require('dotenv-expand')(require('dotenv').config());

export const BASE_URL = process.env.REACT_APP_API_URL;

console.log(BASE_URL);