import React from 'react';
import { render } from 'react-dom';
import configureStore from './redux/configureStore';
import * as serviceWorker from './serviceWorker';
import './index.scss';
import './components/icon-library';
import 'toastr/build/toastr.min.css';
import App from './App';
import * as types from './redux/actions/actionTypes';

const store = configureStore();

render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: () => store.dispatch({ type: types.SW_INIT }),
  onUpdate: (registration) =>
    store.dispatch({
      type: types.SW_UPDATE,
      payload: registration,
    }),
});
