import axios from 'axios';

const baseUrl = 'http://47.94.214.83:5000';
const provincesApi = baseUrl + '/api/statistics/provinces';


export const fetch_provinces = () => (axios.get(provincesApi));
