import axios from 'axios';
import { baseUrl } from './config';

const urlsInterceptor = request => {
  const serviceURL = baseUrl
  request.url = serviceURL + request.url;
  request.baseURL = serviceURL;
  return request;
};

export const createClient = config => {
  const client = axios.create(config);
  client.interceptors.request.use(urlsInterceptor);
  return client;
};

export default createClient();
