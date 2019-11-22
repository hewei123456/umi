import axios from 'axios';

const usersApi = '/api/user';
const createUserApi = '/api/user/create';
const deleteUserApi = '/api/user/delete';
const provincesApi = '/api/statistic/provinces';

export const fetchUsers = () => (axios.get(usersApi));
export const createUser = name => (axios.post(createUserApi, { name }));
export const deleteUser = id => (axios.post(deleteUserApi, { id }));
export const fetchProvinces = () => (axios.get(provincesApi));
