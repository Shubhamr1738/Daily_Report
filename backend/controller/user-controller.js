const UserData = require("../model/user-model.js");

exports.getUserData = (req, res, next) => {
    const UserDataQuery = UserData.find();
    UserDataQuery
      .then((data) => {
        res.status(200).json({
          message: "UserData fetched successfully!",
          data: data
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Fetching UserData failed!\n" + err,
        });
      });
  };
  
exports.createUserData = (req, res, next) => {
  const userData = new UserData({
    site: req.body.site,
    labourReport: {
      name: req.body.labourReport.name,
      Skilled: req.body.labourReport.Skilled,
      Unskilled: req.body.labourReport.Unskilled,
      WorkDone: req.body.labourReport.WorkDone,
    },
  });
  userData
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User data created successfully!",
        userData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "User data Failed \n" + err,
      });
    });
};

exports.updateUserData = (req, res) => {
  UserData.findOneAndUpdate(
    { site: req.body.site },
    {
      $push: {
        labourReport: {
          name: req.body.name,
          Skilled: req.body.skilled,
          Unskilled: req.body.unskilled,
          WorkDone: req.body.workDone,
        },
      },
    },
    { new: true }
  )
    .then((doc) => {
      if (!doc) {
        res.status(404).json({ message: "Document not found" });
        return;
      }
      res.json({ message: "Labour report saved successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating document" });
    });
};

exports.addLabourReport=(req, res) => {
    UserData.findOne({ site: req.params.site }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      let userData = {
        name: req.body.name,
        Skilled: req.body.Skilled,
        Unskilled: req.body.Unskilled,
        WorkDone: req.body.WorkDone,
      };
      UserData.labourReport.push(userData);
      user.save((error, user) => {
        if (error) {
          res.send(error);
        } else {
          res.send(user);
        }
      });
    }
  });
};

exports.addlabour = async (req, res) => {
    try {
      const site = req.params.site;
      const labourReport = req.body;
  
      // Create a new labour report and push it into the site
      const newLabourReport = await UserData.create({
        site: site,
        labourReport: labourReport
      });
      const updatedUserData = await UserData.findOneAndUpdate(
        { site: site },
        { $push: { labourReports: newLabourReport } },
        { new: true }
      );
      res.json(updatedUserData);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


exports.addLabourReports = async (req, res) => {
  UserData.findOneAndUpdate({site: req.params.site}, { $push: { labourReport: {
    name: req.body.name,
    Skilled: req.body.Skilled,
    Unskilled: req.body.Unskilled,
    WorkDone: req.body.WorkDone
} } }, {new: true}, (err, userData) => {
if (err) {
  return res.status(500).send(err);
}
if (!userData) {
  return res.status(404).send('Site not found');
}
res.send(userData);
})
};