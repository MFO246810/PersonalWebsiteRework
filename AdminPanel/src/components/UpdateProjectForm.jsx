import React, { useEffect, useState } from 'react'; 

function UpdateProject(){
    const [Projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/project')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error("Error fetching projects:", err));
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedproject = e.target.SelectProject.value;
        console.log("Selected Project", selectedproject);
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
                        onChange= {(e) => e.target.form.requestSubmit()}
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
            </form>
      </div>

      <div className ="block">

      </div>

    </>);
}

export default UpdateProject