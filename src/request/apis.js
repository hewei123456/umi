import axios from 'axios';

const usersApi = '/api/users';
const createUserApi = '/api/users/create';
const deleteUserApi = '/api/users/delete';

export const fetchUsers = () => (axios.get(usersApi));
export const createUser = name => (axios.post(createUserApi, { name }));
export const deleteUser = id => (axios.post(deleteUserApi, { id }));
