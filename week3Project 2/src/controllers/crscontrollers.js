import mongoose from "mongoose";

import { CourseSchema } from "../models/crsmodels.js";;


const Course = mongoose.model('Course',CourseSchema);

export const addNewCourse = (req, res) =>{
    let newCourse = new Course(req.body);
    newCourse.save().then(() =>{
        res.json(newCourse)
    }).catch((err) =>{
        console.log(err);
    });
};

export const getCourse =  (req,res) => {
    Course.find({}).then(
        data => res.send(data)
    ).catch((err) =>{
        console.log(err);});
    
}

export const getCourseWithId =  (req, res) => {
    Course.findById(req.params.courseid).then(
        data => res.send(data)
    ).catch((err) =>{
        console.log(err);
    });
}

export const updateCourse = async (req, res) => {
         Course.findOneAndUpdate(
            { _id:req.params.courseid},
            req.body,
            { new: true }).then(
                data => res.send(data)    
            ).catch ((err) =>{
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    });
}

export const deleteCourse = async (req, res) => {

        Course.findOneAndDelete({
            _id: req.params.courseid}).then(
       data => res.send({ message: 'Successfully deleted course' })
             ).catch((err) =>{
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    });
}