import mongoose from 'mongoose'
import "dotenv/config";

dotenv.config();
const {Schema, model} = mongoose;
console.log(process.env.Database_Uri);
mongoose.connect(process.env.Database_Uri);

const ExperienceSchema = new Schema({
    id: {int, unique: true, required: true},
    title: string,
    company: string,
    description: string,
    startTime: date,
    EndTime: date 
});

const experience =  model("experience", ExperienceSchema);

export default experience;