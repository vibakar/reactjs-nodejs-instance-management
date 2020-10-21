import axios from 'axios';

const endpoint = 'http://localhost:8080';

export default class ApiService {

	static login(payload) {
		return axios({
			method: 'post',
			url: `${endpoint}/api/login`,
			data: payload
		})
		.then(res =>{
			if(res && res.data && res.data.success) {
				sessionStorage.setItem('authorization',res.headers.authorization);
				return res.data;
			} else {
				return res;
			}
		});
	}

	static register(payload) {
		return axios({
			method: 'post',
			url: `${endpoint}/api/register`,
			data: payload
		})
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

	static getInstances() {
		let token = sessionStorage.getItem('authorization');
		return axios({
			method: 'get',
			url: `${endpoint}/api/instances`,
			headers: {
			  Authorization: 'Bearer ' + token
			}
		  })
		.then(res => res.data);
	}

	static startInstance(id) {
		let token = sessionStorage.getItem('authorization');
		return axios({
			method: 'get',
			url: `${endpoint}/api/instances/start/${id}`,
			headers: {
			  Authorization: 'Bearer ' + token
			}
		  })
		.then(res => res.data);
	}

	static stopInstance(id) {
		let token = sessionStorage.getItem('authorization');
		return axios({
			method: 'get',
			url: `${endpoint}/api/instances/stop/${id}`,
			headers: {
			  Authorization: 'Bearer ' + token
			}
		  })
		.then(res => res.data);
	}
}