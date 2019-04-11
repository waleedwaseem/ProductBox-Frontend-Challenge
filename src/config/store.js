import { createStore, combineReducers } from 'redux';
import productsReducer from '../components/products/reducer';

const rootReducer = combineReducers({
	products: productsReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;