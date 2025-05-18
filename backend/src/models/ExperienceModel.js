import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config();
const {Schema, model} = mongoose;
mongoose.connect(process.env.Database_Uri);

const ExperienceSchema = new Schema({
    title: {type: String, unique: true, required: true},
    position: { type: String, required: true },
    location: { type: String },
    company: {type: String},
    description: {type: String},
    startTime: {type: Date, required: true},
    EndTime: {type: Date} 
});

const experience =  model("experience", ExperienceSchema);

export default experience;