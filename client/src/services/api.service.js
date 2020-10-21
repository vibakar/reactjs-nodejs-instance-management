import axios from 'axios';

const endpoint = 'http://localhost:8080';

export default class ApiService {

	static login(payload) {
		return axios.post(`${endpoint}/api/login`, payload)
				.then(res =>{
					if(res && res.data && res.data.success) {
						sessionStorage.setItem('authorization',res.headers.authorization);
						return res.data;
					} else {
						return res;
					}
				});
	}

	static logout() {
		let token = sessionStorage.getItem('authorization');
		return axios({
			method: 'post',
			url: `${endpoint}/api/logout`,
			headers: {
			  Authorization: 'Bearer ' + token
			}
		  })
		.then(res => res.data);
	}
}