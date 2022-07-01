const router = require('express').Router();
const {
  getProjects,
  getProjectLinks,
} = require('../../controllers/projectController');

// /api/
router.route('/links')
  .get(getProjectLinks)

// /api/index
router.route('/index')
  .get(getProjects)

module.exports = router;
