import cors from 'cors';
import path from 'path';
import dotenv from "dotenv";
import express from "express";
import mongoose from 'mongoose';
import ExperienceRoute from './router/experienceroute.js'
import ProjectRoute from './router/projectsroute.js'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.Database_Uri)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/experience', ExperienceRoute);
app.use('/project', ProjectRoute);
app.get('/', (req, res) => {
    res.send('Hello This is the backend')
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));

