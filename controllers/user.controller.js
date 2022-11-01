const genHash = require("../auth/genhash.js");
const sendMail = require("../mail/index.js");
const regModel = require("../models/regModel.js");

const regController = async (req, res) => {
  let details = Object.assign({});
  for (const i of ["mail", "pass", "name", "age"]) {
    if (!req.body[i])
      return res.json({ success: false, msg: `Please Enter ${i}` });
    else details[i] = req.body[i];
  }

  const isExist = await regModel.findOne({ email: req.body.mail });

  if (!isExist) {
    details["pass"] = genHash(details.pass);
    const dbResult = await regModel(details).save();

    if (dbResult) {
      sendMail(user.mail, user._id);
      return res.json({ success: true, msg: "Verify account, Mail sent" });
    } else {
      return res
        .json({
          success: false,
          message: "User not registered, please try again.",
        })
        .status(400);
    }
  } else {
    return res.json({ success: false, msg: "Email already exist" }).status(400);
  }
};

const verifyController = async (req, res) => {
  if (!req.params.id)
    return res.json({ success: false, msg: "Id not on params" }).status(400);
  regModel
    .updateOne({ _id: req.params.id }, { verified: true })
    .then(() => {
      return res.send("Account Verified!").status(200);
    })
    .catch((err) => {
      return res.json({ success: false, error: err.message });
    });
};

module.exports = { regController, verifyController };
