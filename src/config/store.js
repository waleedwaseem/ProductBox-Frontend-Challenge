import { createStore, combineReducers } from 'redux';
import productsReducer from '../components/products/reducer';
import cartReducer from '../components/cart/reducer';

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
});

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;