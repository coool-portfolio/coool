const router = require("express").Router();

router.route("/index").post((req, res) => console.log("Hello World"));

module.exports = router;
