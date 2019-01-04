import React from 'react';
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as stores from './stores/stores';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
hydrate(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , rootElement);
} else {
render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  , rootElement); 
}
