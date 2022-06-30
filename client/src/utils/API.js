import axios from "axios";

const exportedAPI = {
	getProjects: function (query) {
		return axios.get(`/api/index/`, query);
	},
};


export default exportedAPI