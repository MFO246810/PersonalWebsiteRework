import router from 'express'
import { CreateNewProject, UpdateProject, deleteProject,  getProjects} from '../controllers/Projectcontroller'

const ProjectRoute = express.router();

ProjectRoute.post('/', CreateNewProject);
ProjectRoute.get('/', getProjects);
ProjectRoute.post('/:title', UpdateProject);
ProjectRoute.post('/:title', deleteProject);