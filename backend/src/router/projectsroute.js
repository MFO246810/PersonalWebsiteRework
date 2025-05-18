import { Router } from 'express'
import { CreateNewProject, UpdateProject, deleteProject,  getProjects} from '../controllers/projectscontroller.js'

const ProjectRoute = Router();

ProjectRoute.post('/', CreateNewProject);
ProjectRoute.get('/', getProjects);
ProjectRoute.post('/:title', UpdateProject);
ProjectRoute.post('/:title', deleteProject);

export default ProjectRoute;