const Admin = require('../model/admin')

exports.createAdmin = async(req, res) => {
    try {
        const newadmin = await new Admin(req.body);
        const saveAdmin = await newadmin.save();
        return res.status(200).json({ message: 'Admin Created Successfully' })
    } catch (error) {
        return res.status(200).json(error)
    }
}

exports.adminLogin = async(req, res) => {
    try {

        const eAdmin = await Admin.findOne({ username: req.body.username });

        if (!eAdmin) {
            return res.status(200).json({ message: "Invalid Username" })

        }

        if (eAdmin.username == req.body.username && eAdmin.password == req.body.password) {
            return res.status(200).json({ message: "Login Succesfull" })
        } else {
            res.status(200).json({ message: "Wrong Password" })
        }


    } catch (error) {
        return res.status(200).json(error)

    }

}