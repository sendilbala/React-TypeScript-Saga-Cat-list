import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();


export const store = configureStore(history);


  ReactDOM.render(
    <App store={store} history={history} />,

    document.getElementById('root')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();

