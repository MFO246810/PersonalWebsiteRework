import { config } from "dotenv";
import express from "express";
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello This is the backend')
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));

