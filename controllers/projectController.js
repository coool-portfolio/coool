const Project = require("../models/project");

module.exports = {
	// get all projects
	getProjects(req, res) {
		Project.find({ mainPageActive: true })
			.then((projects) => res.json(projects))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	// get all project links
	getProjectLinks(req, res) {
		Project.find({ mainPageActive: true }, ["title", "fullVideo", "preview"])
			.then((projects) => res.json(projects))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	},
	// get single user by id
	getSingleProject(req, res) {
		Project.findOne({ _id: req.params.projectId })
			.select("-__v")
			.then((project) =>
				!project
					? res.status(404).json({ message: "No project with that ID" })
					: res.json(project)
			)
			.catch((err) => res.status(500).json(err));
	},
};
