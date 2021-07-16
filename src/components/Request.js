const axios = require('axios');

const Request = async (options) => {
	return await axios(options.url, {
	  	method: options.method || 'GET',
	}).then((response) => {
		return response;
	}).catch((error) => {
		throw error.response;
	});
}

export default Request;