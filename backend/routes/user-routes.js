const express = require("express")
const router = express.Router();
const { createUserData, getUserData,updateUserData, addlabour }= require("../controller/user-controller.js");


router.get('/user',getUserData);
router.post('/user',createUserData);
router.post('/user/update',updateUserData);

router.patch("/report/:site",addlabour); 
  

module.exports = router;