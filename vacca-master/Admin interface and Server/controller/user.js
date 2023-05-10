const Users = require("../model/user");

exports.addUser = (req, res) => {
  Users.findOne({ mail: req.body.mail }).exec((error, user) => {
    if (user)
      return res.status(200).json({
        message: "User already exist",
      });
    const { name,mail,password } = req.body;

    const newuser = new Users({
      name,
      mail,
      password
    });

    newuser.save((error, result) => {
      if (error) {
        return res.status(200).json(error);
      }

      if (result) {
        return res.status(200).json({ message: "User created successfully" });
      }
    });
  });
};


exports.userLogin = async(req, res) => {
    try {

        const existedUser = await Users.findOne({ mail: req.body.mail });

        if (!existedUser) {
            return res.status(200).json({ message: "Invalid email" })

        }

        if (existedUser.mail == req.body.mail && existedUser.password == req.body.password) {
            return res.status(200).json({ message: "Login Succesfull" })
        } else {
            res.status(200).json({ message: "Wrong Password" })
        }


    } catch (error) {
        return res.status(200).json(error)

    }

}