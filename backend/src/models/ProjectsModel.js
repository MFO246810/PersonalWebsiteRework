import mongoose from 'mongoose'
import "dotenv/config";

dotenv.config();
const {Schema, model} = mongoose;
console.log(process.env.Database_Uri);
mongoose.connect(process.env.Database_Uri);

const ProjectSchema = new Schema({
    title: {string, unique: true, required: true},
    description: string,
    github: string,
    techstack: [string],
    starttime: date,
    Last_updated_time: date 
});

const projects =  model("Projects", ProjectSchema);

export default projects;

