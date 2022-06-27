const router = require('express').Router();
const {
  getProjects,
  getSingleProject,
} = require('../../controllers/projectController');

// /api/users
// router.route('/')
//   .get(getSingleProject)

// /api/index
router.route('/')
  .get(getProjects)

module.exports = router;
