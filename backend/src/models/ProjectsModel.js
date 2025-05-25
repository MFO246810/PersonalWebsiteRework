import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config();
const {Schema, model} = mongoose;
mongoose.connect(process.env.Database_Uri);

const ProjectSchema = new Schema({
    title: {type: String, unique: true, required: true},
    description: {type: String}, 
    github: {type: String , unique: true, required: true},
    techstack: [String],
    starttime: {type: Date, required: true},
    Last_updated_time: {type: Date} 
});

const projects =  model("Projects", ProjectSchema);

export default projects;

