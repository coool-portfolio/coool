import axios from "axios";

export default {
	getProjects: function (query) {
		return axios.get(`/api/index/`, query);
	},
};
