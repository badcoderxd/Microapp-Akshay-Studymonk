import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import {provider} from "react-redux";
import store from "./store.js";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
<provider store={store}>
<App />
</provider>
</BrowserRouter>
</React.StrictMode>

, document.getElementById('root'));


