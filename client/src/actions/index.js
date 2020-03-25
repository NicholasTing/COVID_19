import axios from 'axios';
import { FETCH_COUNTRIES_DATA } from './types'

// GET method for user
export const fetchUser = () =>  async dispatch => {

    const res = await axios.get('https://corona.lmao.ninja/countries');
	dispatch({type: FETCH_COUNTRIES_DATA, payload:res.data}); 
	
};
