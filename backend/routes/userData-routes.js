const express = require("express")
const router = express.Router();

const userData = require("../controllers/userData-controller.js");



router.post("/signup", userData.signupUserData);
router.post("/login", userData.loginUserData);
router.post("/addsite", userData.addSite);
router.get("/getalluser", userData.getAllUsers);
module.exports = router;