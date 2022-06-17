import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './App';

import { store, persistor } from 'redux/store';
import './index.css';

const basename = process.env.REACT_APP_BASE_NAME;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* basename="/react-team-project/" */}
    <BrowserRouter basename={basename}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
