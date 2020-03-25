import axios from 'axios';

// Get method to fetch countries data
export async function fetchCountries(){

    const res = await axios.get('https://corona.lmao.ninja/countries');
    return res.data;
};

// Get method to fetch basic countries data
export async function fetchAllData() {

    const res = await axios.get('https://corona.lmao.ninja/all');
	return res.data;
	
};

// Get method to fetch basic countries data
export async function fetchSpecificCountry(country) {

    const res = await axios.get('https://corona.lmao.ninja/countries/' + country);
    if(res.data.country){
        return res.data;
    }
	else{
        return ('no country found');
    }
	
};