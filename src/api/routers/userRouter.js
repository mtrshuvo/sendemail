const router = require("express").Router();
const { sendEmail } = require("../controllers/userController");

router.route("/").post(sendEmail);


module.exports = router;