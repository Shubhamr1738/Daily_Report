const express = require("express")
const router = express.Router();

const signupUserData = require("../controllers/userData-controller.js");
const loginUserData = require("../controllers/userData-controller.js");
const addSite = require("../controllers/userData-controller.js");


router.post("/signup", signupUserData.signupUserData);
router.post("/login", loginUserData.loginUserData);
router.post("/addsite", addSite.addSite);


module.exports = router;