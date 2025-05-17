import mongoose from 'mongoose'
import { config } from "dotenv";

dotenv.config();
const {Schema, model} = mongoose;
console.log(process.env.Database_Uri);
mongoose.connect(process.env.Database_Uri);

const Project = new.Schema({
    
})

