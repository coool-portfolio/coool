const Project = require("../models/project");

module.exports = {
	// get all projects
	getProjects(req, res) {
		Project.find()
			.sort( { "_id": 1 } )
			.then((projects) => res.json(projects))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	// get all project links
	getProjectLinks(req, res) {
		Project.find({ mainPageActive: true }, ["client", "title", "fullVideo", "preview", "loadingImg"])
			.sort( { "_id": 1 } )
			.then((projects) => res.json(projects))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	}
};
