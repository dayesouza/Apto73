import React, { Component } from 'react';
import { UserAgentApplication } from 'msal';

export const msalAuth = new UserAgentApplication({
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_TENANT}`,
    clientId: process.env.REACT_APP_AZURE_CLIENT,
    redirectUri: process.env.REACT_APP_CURRENT_URI,
    postLogoutRedirectUri:process.env.REACT_APP_CURRENT_URI,
  },
});


export function withAuth(AppComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuthenticated: false,
        // eslint-disable-next-line react/no-unused-state
        user: {},
        renewIframe: false,
        hasError: false,
        errorMessage: null,
      };
    }

    // eslint-disable-next-line react/no-deprecated
    async componentDidMount() {
      msalAuth.handleRedirectCallback(() => {
        const userAccount = msalAuth.getAccount();

        this.setState({
          isAuthenticated: true,
          // eslint-disable-next-line react/no-unused-state
          user: userAccount,
        });
      }, (authErr) => { // on fail
        // eslint-disable-next-line no-console
        console.log(authErr);

        this.setState({
          hasError: true,
          errorMessage: authErr.errorMessage,
        });
      });

      if (msalAuth.isCallback(window.location.hash)) {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          auth: {
            renewIframe: true,
          },
        });
        return;
      }

      const userAccount = msalAuth.getAccount();

      if (!userAccount) {
        msalAuth.loginRedirect({});
      } else {
        this.setState({
          isAuthenticated: true,
          // eslint-disable-next-line react/no-unused-state
          user: userAccount,
        });
      }
    }

    render() {
      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.renewIframe) {
        return <div>hidden renew iframe - not visible</div>;
      }

      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.isAuthenticated) {
        return (
          <AppComponent
            auth={this.state}
            // onSignIn={() => this.onSignIn()}
            onSignOut={() => this.onSignOut()}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...this.props}
          />
        );
      }

      // eslint-disable-next-line react/destructuring-assignment
      if (this.state.hasError) {
        // eslint-disable-next-line react/destructuring-assignment
        return <div>{this.state.errorMessage}</div>;
      }

      return <div>Login in progress...</div>;
    }
  };
}
