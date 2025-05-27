import React, { useEffect, useState } from 'react'; 

function UpdateProject(){
    const [Projects, setProjects] = useState([]);

    const [formdata, setformdata] = useState({
        title : '',
        description: '',
        github: '',
        starttime: Date(''),
        Last_updated_time: Date(''),
    });
 
    const [techStack, setTechStack] = useState(['']);
    const [selectedProject, setSelectedProject] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/project')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error("Error fetching projects:", err));
    }, []);
    
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setformdata(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleTechChanges = (index, value) => {
        const updatedStack = [...techStack];
        updatedStack[index] = value;
        setTechStack(updatedStack);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedProject);
        for(let i = 0; i < Projects.length; i++){
            if(Projects[i].title == selectedProject){
                formdata.title = Projects[i].title;
                formdata.description = Projects[i].title;
                formdata.github = Projects[i].github;
                formdata.starttime = Projects[i].starttime;
                formdata.Last_updated_time = Projects[i].Last_updated_time;

                formdata.starttime = formdata.starttime.toISOString().split("T")[0]
                formdata.Last_updated_time = formdata.Last_updated_time.toISOString().split("T")[0]
            }
        }
        setSelectedProject('');
    }

    const addTechInput = () => {
        setTechStack([...techStack, '']);
    };
    
    const removeTechInput = (index) => {
        const updatedStack = techStack.filter((_, i) => i !== index);
        setTechStack(updatedStack);
    };

    const handleUpdates = (e) => {
        console.log(formdata);
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
                        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"> Pull Project </button>
                </div>
            </form>
      </div>

      <div className="block max-w-md" id="UpdateSubmit">
            <form onSubmit={handleUpdates}>
                <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">

                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Project Title</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input type="text" name="title" id="title" value={formdata.title} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Title..."/>
                                </div>
                        </div>

                    <div className="sm:col-span-6">
                        <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">Description</label>
                            <div className="mt-2">
                                <textarea
                                id="description"
                                name="description"
                                value={formdata.description}
                                onChange={handleFormChange}
                                rows={3}
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"/>
                            </div>
                    </div>

                    <div className="sm:col-span-6">

                        <label htmlFor="github" className="block text-sm/6 font-medium text-gray-900">Github Uri: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="text" name="github" id="github" value={formdata.github} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Github Url..."/>
                            </div>
                    </div>

                    <div className="sm:col-span-6">

                        <label htmlFor="starttime" className="block text-sm/6 font-medium text-gray-900">Start Date: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="date" name="starttime" id="starttime" value={formdata.starttime} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                    </div>

                    <div className="sm:col-span-6">

                        <label htmlFor="Last_updated_time" className="block text-sm/6 font-medium text-gray-900">Last Update Date: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="date" name="Last_updated_time" id="Last_updated_time" value={formdata.Last_updated_time} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                    </div>

                    <div className="sm:col-span-6">
                        
                        {techStack.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <label className="block text-sm/6 font-medium text-gray-900" htmlFor={`techstack${index + 1}`}>Technology used {index + 1}: </label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input
                                        type="text"
                                        name = {`techstack${index + 1}`}
                                        value={item}
                                        onChange={(e) => handleTechChanges(index, e.target.value)}
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    /> 
                                </div>
                                {techStack.length > 1 && (
                                    <button
                                        type="button"
                                        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-2"
                                        onClick={() => removeTechInput(index)}> Remove </button>
                                    )}
                            </div>))}

                        <button
                            type="button"
                            onClick={addTechInput}
                            className="bg-blue-700 text-white px-4 py-1 rounded hover:bg-blue-800">Add Tech</button>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"> Submit </button>
                    </div>
                </div>
            </form>
      </div>

    </>);
}

export default UpdateProject