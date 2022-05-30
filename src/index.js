import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Provider 쓰기 위해 import
import { Provider } from 'react-redux';

// store 만들어 줄거야!
import store from './redux/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

