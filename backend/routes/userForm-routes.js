const express = require("express")
const router = express.Router();


const addLabourReports = require('../controllers/labourData-controller.js');
const deleteLabourReport = require('../controllers/labourData-controller.js');
const updateLabourReport = require('../controllers/labourData-controller.js');
const getLabourReports = require("../controllers/labourData-controller.js");;

router.post ('/addlabour/:site', addLabourReports.addLabourReports);
router.delete ('/delete/:site/:labourReportId', deleteLabourReport.deleteLabourReport);
router.put ('/update/:site/:labourReportId', updateLabourReport.updateLabourReport);
router.get("/getlabour/:site", getLabourReports.getLabourReports);
module.exports = router;