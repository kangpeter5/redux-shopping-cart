import { combineReducers } from 'redux';
import itemReducer from './item'; // no reference of .js needed
import shoppingCartReducer from './shoppingCart';

const rootReducer = combineReducers({
	items: itemReducer,
	shoppingCart: shoppingCartReducer,
})

export default rootReducer;