import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/Default/Default';
import routes from './routes';

import { connect } from 'react-redux';
import { withAuth } from './auth/MsalAuthProvider';

// const store = configureStore();
class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.serviceWorkerUpdated !== this.props.serviceWorkerUpdated) {
      if (
        //eslint-disable-next-line
        confirm(
          'Apto 73 website has been updated. Would you like to reload to display the latest version?'
        )
      ) {
        this.updateServiceWorker();
      }
    }
  }

  updateServiceWorker = () => {
    const registrationWaiting = this.props.serviceWorkerRegistration.waiting;

    if (registrationWaiting) {
      registrationWaiting.postMessage({ type: 'SKIP_WAITING' });

      registrationWaiting.addEventListener('statechange', (e) => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <Switch>
            {routes.map((route, index) => (
              <Route
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                path={route.path}
                exact
                component={(props) => (
                  <DefaultLayout auth={this.props.auth}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <route.component {...props} />
                  </DefaultLayout>
                )}
              />
            ))}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

function mapStateToProps(state) {
  return {
    serviceWorkerUpdated: state.serviceWorker.serviceWorkerUpdated,
    serviceWorkerInitialized: state.serviceWorker.serviceWorkerInitialized,
    serviceWorkerRegistration: state.serviceWorker.serviceWorkerRegistration,
  };
}

export default connect(mapStateToProps)(withAuth(App));
