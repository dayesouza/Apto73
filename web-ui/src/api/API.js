import axios from 'axios';
import { msalAuth } from '../auth/MsalAuthProvider';

const httpClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(async (config) => {
  let token;
  const accessTokenRequest = {
    scopes: [process.env.REACT_APP_AUTH_SCOPE],
  };
  await msalAuth.acquireTokenSilent(accessTokenRequest).then((res) => {
    token = res.accessToken;
  });

  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default httpClient;
