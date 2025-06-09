import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { useEffect, useState } from 'react'
 
var ShownProjects = [];
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchprojects();
  }, []);

  const fetchprojects = async() => {
    const res = await fetch('http://localhost:3000/project')
      .catch(err => console.error("Error fetching projects:", err));
    
    const ProjectList = await res.json();
    console.log(ProjectList);
    const Proj = [];
    for (let i = 0; i < ProjectList.length; i++){
      if(ProjectList[i].PWstatus == true){
        Proj.push(ProjectList[i]);
      }
    }
    setProjects(Proj);
    ShownProjects = projects;
  }


  useEffect
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export {ShownProjects}; 
export default Projects;
