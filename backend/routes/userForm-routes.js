const express = require("express")
const router = express.Router();

const userFormControl = require('../controllers/labourData-controller.js');

router.post ('/addlabour/:id', userFormControl.addLabourReports);
router.delete ('/delete/:site/:labourReportId', userFormControl.deleteLabourReport);
router.put ('/update/:site/:labourReportId', userFormControl.updateLabourReport);
router.get("/getlabour/:id", userFormControl.getLabourReports);
module.exports = router;