import { Router } from "express";
import { CreateNewExperience, UpdateExperience, deleteExperience,  getExperiences} from "../controllers/experiencecontroller.js";

const ExperienceRoute = Router();

ExperienceRoute.post('/', CreateNewExperience);
ExperienceRoute.get('/', getExperiences);
ExperienceRoute.post('/:title', UpdateExperience);
ExperienceRoute.post('/:title', deleteExperience);

export default ExperienceRoute;