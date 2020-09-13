/*eslint-disable */
import axios from 'axios';

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem(
    `msal.${process.env.REACT_APP_AZURE_CLIENT}.idtoken`
  );
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default httpClient;
