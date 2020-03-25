import { FETCH_COUNTRIES_DATA } from '../actions/types';

// Reducer to fetch countries
export default function(state=null, action){

    switch(action.type){
        case FETCH_COUNTRIES_DATA:
            return action.payload || false;
            
        default:
            return state;
    }
};