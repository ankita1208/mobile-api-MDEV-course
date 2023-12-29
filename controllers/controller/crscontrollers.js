import mongoose from "mongoose";

import { CourseSchema } from "../models/crsmodels";;


const Course = mongoose.model('Course',CourseSchema);

export const addNewCourse = (req, res) =>{
    let newCourse = new Course(req.body);
    newCourse.save((err,course)=>{
        if (err) {
            res.send(err)
        } 
        res.json(course);
    })
};