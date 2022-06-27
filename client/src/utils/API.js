import axios from "axios";

export default {
	getProjects: function (query) {
		return axios.get("/api/projects", { params: { q: query } });
	},
};
