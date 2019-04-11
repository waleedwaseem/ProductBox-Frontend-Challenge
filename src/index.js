import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './config/store';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = <Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>;

ReactDOM.render(app,
  document.getElementById('root')
);