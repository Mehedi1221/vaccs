const User = require("../model/registeredperson.js");
const nodemailer = require("nodemailer");

exports.createUser = (req, res) => {
  User.findOne({ mail: req.body.mail }).exec((error, candidate) => {
    if (candidate)
      return res.status(200).json({
        message: "User already exist",
      });
    const { name, phone, mail, age, address, gender, vdate, vname, status } =
      req.body;

    const newuser = new User({
      name,
      phone,
      mail,
      age,
      address,
      gender,
      vdate,
      vname,
      status
    });

    newuser.save((error, result) => {
      if (error) {
        return res.status(200).json(error);
      }

      if (result) {
        return res.status(200).json({ message: "Submitted successfully" });
      }
    });
  });
};


exports.fetchAUser = async (req, res) => {
  try {

    const Getuser = await User.findOne({mail: req.params.id});
    if (Getuser) {
          return res.status(200).json(Getuser);
    }else{
      return res.status(400).json({message: 'User not found'});
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.fetchUser = async (req, res) => {
  try {
    const Getuser = await User.find({status: 'registered'});
    return res.status(200).json(Getuser);
  } catch (error) {
    return res.status(200).json(error);
  }
};




exports.fetchMailSentUser = async (req, res) => {
  try {
    const Getuser = await User.find({status: 'mailSent'});
    return res.status(200).json(Getuser);
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.fetchVaccinatedUser = async (req, res) => {
  try {
    const Getuser = await User.find({status: 'vaccinated'});
    return res.status(200).json(Getuser);
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletion = await User.findOneAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(200).json(error);
  }
};


exports.updateVaccinatedUser = async (req, res) => {
  try {

      const id = req.params.id;

    const UpdateStatus = await User.findOneAndUpdate({ _id:id }, {status:'vaccinated'}, {new: true});
    if(UpdateStatus){
      return res.status(200).json({ message: "Vaccinated Successfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.updatedUserInfo = async (req, res) => {
  try {

      const mail = req.params.mail;
      const { name, phone, age, address, gender, vdate, vname, status } =
      req.body;

    const UpdateStatus = await User.findOneAndUpdate({ mail:mail }, {
      name, phone, age, address, gender, vdate, vname, status 
    }, {new: true});
    if(UpdateStatus){
      return res.status(200).json({ message: "Edited Successfully" });
    }
  } catch (error) {
    return res.status(200).json(error);
  }
};

exports.sendMail = async (req, res) => {
  const email = req.params.email;
  

  const user = await User.findOne({ mail: email });
  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  const updateStatus = await User.findOneAndUpdate({ mail: email },{status:'mailSent'}, {new: true})


  // Create a nodemailer transporter with the SMTP transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "mehedi132435@gmail.com",
      pass: "neerhirxqfbfwnit",
    },
  });

  // Define email options
  const mailOptions = {
    from: "mehedi132435@gmail.com",
    to: email,
    subject: "Vaccination email",
    text: `Dear ${user.username},

Thank you for your interest in our vaccination program. Your tocken is ${user._id}

Thank you for your cooperation in helping to keep our community safe and healthy.

Location
${user.address}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("Error sending email");
    } else {
      return res.status(200).json({ message: "Email sent successfully" });

    }
  });
};
