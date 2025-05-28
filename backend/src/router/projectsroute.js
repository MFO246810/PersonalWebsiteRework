import { Router } from 'express'
import { CreateNewProject, UpdateProject, deleteProject,  getProjects} from '../controllers/projectscontroller.js'

const ProjectRoute = Router();

ProjectRoute.post('/', CreateNewProject);
ProjectRoute.get('/', getProjects);
ProjectRoute.post('/update/:title', UpdateProject);
ProjectRoute.post('/delete/:title', deleteProject);

export default ProjectRoute;