import React, { useEffect, useState } from 'react'; 

function DeleteProject(){

    const [Projects, setProjects] = useState([]);
    const [SucessMessage, SetSucessMessage] = useState('');
    const [selectedProject, setSelectedProject] = useState('');
    const sucessdelBar = document.getElementById("DelSucessMessage");
    const faildelBar = document.getElementById("DelFailMessage");

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = async () => {
        await fetch('http://localhost:3000/project')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Error fetching projects:", err));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        faildelBar.style.display = "none";
        sucessdelBar.style.display = "none";
        console.log(selectedProject);
        const res = await fetch(`http://localhost:3000/project/delete/${selectedProject}`, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' }
        })
        
        if(!res.ok){
            SetSucessMessage(`Project: ${selectedProject} wasn't deleted`);
            faildelBar.style.display = "block";
            sucessdelBar.style.display = "none";
            setSelectedProject('');
        } else {
            SetSucessMessage(`Project: ${selectedProject} was deleted`);
            sucessdelBar.style.display = "block";
            faildelBar.style.display = "none";
            setSelectedProject('');
        }
        fetchdata();
    }

    return(<>
        <div className="max-w-md mx-auto mt-10 mb-10">
            <div id="DelSucessMessage" style = {{display: "none"}}>
                    <div className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Sucess</span> {SucessMessage}.
                        </div>
                    </div>
                </div>

            <div id="DelFailMessage" style = {{display: "none"}}>
                <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                    <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Danger alert!</span> {SucessMessage}.
                    </div>
                </div>
            </div>

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