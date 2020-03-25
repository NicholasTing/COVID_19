import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';

// keys provided to object represent keys that exist inside state object
export default combineReducers({
    countries: countriesReducer
});