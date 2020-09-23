import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from '../components/Layout/Default/Default';
import routes from '../routes';

export default function AppRouter() {
  return (
    <Router>
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
    </Router>
  );
}
