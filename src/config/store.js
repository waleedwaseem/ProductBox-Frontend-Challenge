import { createStore, combineReducers } from 'redux';
import productsReducer from '../components/products/reducer';
import cartReducer from '../components/cart/reducer';
import { reducer as formReducer } from 'redux-form';
import {loadFromLocalStorage, saveToLocalStorage} from './../helpers';

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	form: formReducer
});

const persistedState = loadFromLocalStorage()

const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;