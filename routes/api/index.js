const router = require('express').Router();
const projectRoutes = require("./projects");

// Project routes api/
router.use("/", projectRoutes);
// router.use("/index", projectRoutes);


module.exports = router;
