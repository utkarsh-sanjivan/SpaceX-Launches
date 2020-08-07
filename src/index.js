import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { buildStore } from "./store";
import LaunchList from './container/LaunchListPage/index';
import './index.css';

const history = createHistory();
const store = buildStore(history, {});

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <LaunchList />
        </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);