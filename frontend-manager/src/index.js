import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import 'helpers/initFA';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main>
        <App />
      </Main>
    </Provider>
  </React.StrictMode>,
  document.getElementById('main')
);
