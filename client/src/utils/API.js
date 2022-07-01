import axios from "axios";

const exportedAPI = {
	getProjects: function (query) {
		return axios.get(`/api/index/`, query);
	},
	getProjectLinks: function (query) {
		return axios.get(`/api/links`, query);
	},
};


export default exportedAPI