import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.spacexdata.com/v3/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export { instance as default };