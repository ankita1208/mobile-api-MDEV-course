import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CourseSchema = new Schema({
CourseName :
{
    type:String,
    required: 'Enter your first name'
},
ProgramName:{
    type:String,
    required: 'Enter your program name'
},
College:{
    type:String
},
CollContact:{
    type:Number
},
created_date :{
    type:Date,
    default: Date.now
}
})
