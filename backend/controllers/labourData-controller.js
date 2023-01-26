const UserForm = require("../mongoDB/models/userForm-model.js");

exports.addLabourReports = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site },
    {
      $push: {
        labourReport: {
          name: req.body.name,
          skilled: req.body.skilled,
          workDone: req.body.workDone,
          unskilled: req.body.unskilled,
        },
      },
    },
    { new: true },
    (err, UserForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!UserForm) {
        return res.status(404).send("Site not found");
      }
      res.send(UserForm);
    }
  );
};
exports.deleteLabourReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site },
    {
      $pull: {
        labourReport: {
          _id: req.params.labourReportId,
        },
      },
    },
    { new: true },
    (err, UserForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!UserForm) {
        return res.status(404).send("Site not found");
      }
      res.send(UserForm);
    }
  );
};

exports.updateLabourReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site, "labourReport._id": req.params.labourReportId },
    {
      $set: {
        "labourReport.$.name": req.body.name,
        "labourReport.$.skilled": req.body.skilled,
        "labourReport.$.unskilled": req.body.unskilled,
        "labourReport.$.workDone": req.body.workDone,
      },
    },
    { new: true },
    (err, UserForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!UserForm) {
        return res.status(404).send("Labour report not found");
      }
      res.send(UserForm);
    }
  );
};
