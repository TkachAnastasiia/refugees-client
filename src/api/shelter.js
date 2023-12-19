import client from './client';
export const createShelter = data =>
  client.post('/shelter/create', data);

export const getOwnShelters = (userId) =>
  client.get(`/shelter/get-own/${userId}`);

export const getSheltersByCity = (city) =>
  client.get(`/shelter/get-by-city/${city}`);
export const getShelterById = (shelterId) =>
  client.get(`/shelter/${shelterId}`);

export const sendShelterMessage = (data) =>
  client.post(`/shelter/message`, data);
