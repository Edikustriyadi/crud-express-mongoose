const StudentModel = require('../models/StudentModel');

exports.index = async (req,res) => {
    try {
        await StudentModel.find({},(err,result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json(err);
            }
        });
    } catch (err) {
        res.status(404).json(err);
    }
};
exports.create = async (req,res) => {
    const { nim,name,majors } = req.body;
    try {
        const student = new StudentModel({nim,name,majors});
        await student.save((err,result) => {
            if (result) {
                res.status(201).json(result);
            } else {
                res.status(404).json(err);
            }
        });
    } catch (err) {
        res.status(404).json(err);
    }
}
exports.delete = async (req,res) => {
    try {
        await StudentModel.findByIdAndDelete({_id:req.params.id},(err,result) =>{
            if (result) {
                res.status(200).json(result);    
            } else {
                res.status(404).json(err);    
            }
        });
    } catch (err) {
        res.status(404).json(err);
    }
}
exports.update = async (req,res) => {
    try {
        const { nim,name,majors } = req.body;
        await StudentModel.findOneAndUpdate({_id:req.params.id},{nim,name,majors},{new: true},(err,result) =>{
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(400).json(err);
            }
        });
    } catch (err) {
        res.status(404).json(err);
    }
}