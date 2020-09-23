import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import { authProvider } from './auth/authProvider';
import AppRouter from './pages/Router';
import Login from './pages/Login/Login';

import { connect } from 'react-redux';

// const store = configureStore();
class App extends Component {
  constructor(props) {
    super(props);
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
        <div className="Apasdasdp-alert">
          {this.props.serviceWorkerUpdated && (
            <p onClick={() => this.updateServiceWorker()}>
              NEW VERSION AVAILABLE, click here to update
            </p>
          )}
        </div>

        <AzureAD
          provider={authProvider}
          reduxStore={this.props.store}
          forceLogin
        >
          {({ login, authenticationState, error }) => {
            switch (authenticationState) {
              case AuthenticationState.Authenticated:
                return <AppRouter />;
              case AuthenticationState.Unauthenticated:
                return <Login error={error} login={login} />;
              case AuthenticationState.InProgress:
                return <p>Authenticating...</p>;
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // loadWater: bindActionCreators(waterActions.loadWater, dispatch),
      // deleteWater: bindActionCreators(waterActions.deleteWater, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
