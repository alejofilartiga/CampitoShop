import React from 'react'
import ReactDOM from 'react-dom/client'
import {GlobalStyles} from "./assets/styles/GlobalStyles";
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { store, persistor } from './assets/components/Redux/store.js'; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
