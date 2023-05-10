const VaccineInfo = require('../model/vaccineinfo')

exports.createVaccineInfo = async(req, res) => {
    try {
        const vaccine = await VaccineInfo.findOne({ date: req.body.date })
        if (vaccine) {
            return res.status(200).json({ message: 'This Vaccine already exist' })
        }

        const newvaccine = new VaccineInfo(req.body)
        const savevaccine = await newvaccine.save()
        return res.status(200).json({ message: 'Vaccine is Created' })
    } catch (error) {
        return res.status(400).json(error)
    }
}

exports.fetchvaccine = async(req, res) => {
    try {
        const vaccines = await VaccineInfo.find({})
        return res.status(200).json(vaccines)
    } catch (error) {
        return res.status(200).json(error)
    }

}


exports.updateinfo = async(req, res) => {
    try {
        const updatevaccine = await VaccineInfo.findOneAndUpdate({ _id: req.params.id }, {
            name: req.body.name,
            origin: req.body.origin,
            date: req.body.date,
            place: req.body.place
        }, { new: true });
        return res.status(200).json({ message: 'Edited Successfully' })
    } catch (error) {
        return res.status(200).json(error)

    }
}

exports.deleteVaccine = async(req, res) => {
    try {
        const deletion = await VaccineInfo.findOneAndDelete({ _id: req.params.id });
        return res.status(200).json({ message: 'Deleted Successfully' })

    } catch (error) {
        return res.status(200).json(error)

    }
}