import { config } from "dotenv";
import express from "express";
import cors from 'cors';
import path from 'path';
import ExperienceRoute from '.routers/experienceroute'
import ProjectRoute from '.routers/projectsroute'
const app = express();

app.use(express.json());
app.use(cors());
app.use('/experience', ExperienceRoute);
app.use('/project', ProjectRoute);
app.get('/', (req, res) => {
    res.send('Hello This is the backend')
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));

