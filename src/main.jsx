import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/frontend-drink-master">
      {/* <Provider store={store}>
      <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
