import { Router } from "express";
import { CreateNewExperience, UpdateExperience, deleteExperience,  getExperiences} from "../controllers/experiencecontroller.js";

const ExperienceRoute = Router();

ExperienceRoute.post('/', CreateNewExperience);
ExperienceRoute.get('/', getExperiences);
ExperienceRoute.post('/update/:title', UpdateExperience);
ExperienceRoute.post('/delete/:title', deleteExperience);

export default ExperienceRoute;