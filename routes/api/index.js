const router = require('express').Router();
const projectRoutes = require("./projects");

// User routes
// router.use("/", projectRoutes);
router.use("/index", projectRoutes);


module.exports = router;
