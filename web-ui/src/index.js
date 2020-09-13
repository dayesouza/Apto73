import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import './components/icon-library';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AzureAD } from 'react-aad-msal';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import routes from './routes';
import DefaultLayout from './components/Layout/Default/Default';

import authProvider from './auth/authProvider';

const store = configureStore();
render(
  <Provider store={store}>
    <AzureAD provider={authProvider} reduxStore={store} forceLogin>
      <Router>
        <div>
          <Switch>
            {routes.map((route, index) => (
              <Route
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                path={route.path}
                exact={route.exact}
                component={(props) => (
                  <DefaultLayout>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <route.component {...props} />
                  </DefaultLayout>
                )}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </AzureAD>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
