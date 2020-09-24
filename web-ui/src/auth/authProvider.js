import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT}`,
    clientId: process.env.REACT_APP_AZURE_CLIENT,
    redirectUri: process.env.REACT_APP_CURRENT_URI,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false,
  },
};

const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: `${window.location.origin}/auth.html`,
};

export const authProvider = new MsalAuthProvider(config, options);
