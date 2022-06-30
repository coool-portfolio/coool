import axios from "axios";

export default {
	getProjects: function (query) {
		console.log(query);
		return axios.get(`/api/index/`, query);
	},
};
