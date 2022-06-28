const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
	client: {
		type: String,
		required: true,
	},
	mainPageActive: {
		type: Boolean,
		required: true,
		default: false,
	},
	title: {
		type: String,
	},
	year: {
		type: String,
		required: true,
	},
	credits: {
		type: String,
	},
	preview: {
		type: String,
		default: "",
	},
	fullVideo: {
		type: String,
		default: "",
	},
	stillImg: {
		type: String,
		default: "",
	},
	notes: {
		type: String,
	},
});

const Project = model("Project", projectSchema);

module.exports = Project;
