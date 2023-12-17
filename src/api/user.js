import client from './client';
export const createUser = data =>
  client.post('/user/create', data);

export const loginUser = data =>
  client.post('/user/login', data);
