const router = require("express").Router();
const projectRoutes = require("./projects");

// User routes
router.use("/projects", projectRoutes);

// For anything else, render the html page
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
