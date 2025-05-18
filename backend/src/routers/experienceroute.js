import router from 'express'
import { CreateNewExperience, UpdateExperience, deleteExperience,  getExperiences} from '../controllers/experiencecontroller'

const ExperienceRoute = express.router();

ExperienceRoute.post('/', CreateNewExperience);
ExperienceRoute.get('/', getExperiences);
ExperienceRoute.post('/:title', UpdateExperience);
ExperienceRoute.post('/:title', deleteExperience);