import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AzureAD, withAuthentication } from 'react-aad-msal';

import routes from './routes';
import DefaultLayout from './components/Layout/Default/Default';
import authProvider from './auth/authProvider';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  /* eslint-disable-next-line react/no-array-index-key */
                  key={index}
                  path={route.path}
                  exact
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
      </Provider>
    );
  }
}

export default withAuthentication(App, {
  provider: authProvider,
  reduxStore: store,
});
