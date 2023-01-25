const express = require("express")
const router = express.Router();
const { createUserData, getUserData,updateUserData, addlabour,addLabourReports }= require("../controller/user-controller.js");


router.get('/user',getUserData);
router.post('/user',createUserData);
router.post('/user/update',updateUserData);

router.patch("/report/:site",addlabour);
router.post("/report/:site",addLabourReports);
module.exports = router;