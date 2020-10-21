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

	// static getSingleUser(id) {
	// 	return axios.get("http://localhost:4000/users/" + id)
	// 			.then(res => res.data);
	// }

	// static updateUser(user) {
	// 	return axios.put("http://localhost:4000/users/" + user.id, user)
	// 			.then(res => res.data);
	// }

	// static addUser(user) {
	// 	return axios.post("http://localhost:4000/users/", user)
	// 			.then(res => res.data);
	// }
}