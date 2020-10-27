import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import { authProvider } from './auth/authProvider';
import AppRouter from './pages/Router';
import Login from './pages/Login/Login';

import { connect } from 'react-redux';

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
        <AzureAD
          provider={authProvider}
          reduxStore={this.props.store}
          forceLogin
        >
          {({ login, authenticationState, error }) => {
            switch (authenticationState) {
              case AuthenticationState.Authenticated:
                return <AppRouter />;
              case AuthenticationState.InProgress:
                return <p>Authenticating...</p>;
              default:
                return <Login error={error} login={login} />;
            }
          }}
        </AzureAD>
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

export default connect(mapStateToProps)(App);
