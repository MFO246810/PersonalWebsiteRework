import React, { useEffect, useState } from 'react'; 
import { useNavigate } from "react-router-dom";

function DeleteProject(){

    const [Projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/project')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error fetching projects:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectedProject);
        const res = await fetch(`http://localhost:3000/project/delete/${selectedProject}`, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        
        if(!res.ok){
            console.log("An Error has occured")
        } else {
            console.log("Project Deleted Sucessfully");
        }
        navigate(0); 
    }

    return(<>
        <div className="max-w-md mx-auto mt-10 mb-10">
            <form onSubmit={handleSubmit}>
                <label htmlFor="SelectProject" className="block mb-2 text-sm font-medium text-gray-700">
                    Select a Project:
                </label>
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <select
                        id="SelectProject"
                        value={selectedProject}
                        onChange= {(e) => setSelectedProject(e.target.value)}
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    >
                    <option value="" disabled>Select a project</option>
                    {Projects.map((project, index) => (
                    <option key={index} value={project.title}>
                        {project.title}
                    </option>
                    ))}
                    </select> 
                </div>
                <div className="mt-4">
                        <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"> Delete Project </button>
                </div>
            </form>
      </div>
    </>)
}

export default DeleteProject