import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import './index.css';
import App from './app';
import axios from 'axios';
import Spoonacular from './service/spoonacular';

const httpClient = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: { apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY },
});

const spoonacular = new Spoonacular(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App spoonacular={spoonacular} />
  </React.StrictMode>,
  document.getElementById('root')
);
