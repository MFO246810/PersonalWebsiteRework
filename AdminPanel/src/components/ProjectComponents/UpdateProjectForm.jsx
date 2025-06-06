import React, { useEffect, useState } from 'react'; 

function UpdateProject(){
    const [Projects, setProjects] = useState([]);

    const [formdata, setformdata] = useState({
        title : '',
        description: '',
        github: '',
        starttime: Date(),
        Last_updated_time: Date(),
    });
 
    const [techStack, setTechStack] = useState([]);
    const [status,  SetStatus] = useState(false);
    const [selectedProject, setSelectedProject] = useState('');
    const [SucessMessage, SetSucessMessage] = useState('');
    const [FailureMessage, SetFailureMessage] = useState('');
    const sucessBar = document.getElementById("SucessMessageBox");
    const FailureBar = document.getElementById("FailureMessageBox");

    useEffect(() => {
        fetchprojects();
    }, []);
    
    const fetchprojects = async() => {
        await fetch('http://localhost:3000/project')
          .then(res => res.json())
          .then(data => setProjects(data))
          .catch(err => console.error("Error fetching projects:", err));
    }

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
        sucessBar.style.display = "none";
        FailureBar.style.display = "none";
        console.log(selectedProject);
        for(let i = 0; i < Projects.length; i++){
            if(Projects[i].title == selectedProject){
                formdata.title = Projects[i].title;
                formdata.description = Projects[i].description;
                formdata.github = Projects[i].github;
                formdata.starttime = new Date(Projects[i].starttime).toISOString().split("T")[0];
                formdata.Last_updated_time = new Date(Projects[i].Last_updated_time).toISOString().split("T")[0];
                const updatedStack = [];
                if (Array.isArray(Projects[i].techstack)) {
                    for(let j = 0; j < Projects[i].techstack.length; j++){
                        updatedStack.push(Projects[i].techstack[j])
                    }
                    setTechStack(updatedStack);
                }
                if(Projects[i].PWstatus == true){
                    SetStatus("Yes");
                } else {
                    SetStatus("No");
                }
                
            }
        }
    }

    const addTechInput = () => {
        setTechStack([...techStack, '']);
    };
    
    const removeTechInput = (index) => {
        const updatedStack = techStack.filter((_, i) => i !== index);
        setTechStack(updatedStack);
    };
    
    const CheckFormdata = () => {
        if(formdata.title == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter a title for the Project");
            return false;
        } else if(formdata.description == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter a description for the Project");
            return false;
        } else if(formdata.github == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter a Github Uri for the Project");
            return false;
        } else if(formdata.starttime == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter a Start Date for the Project");
            return false;
        } else if(formdata.Last_updated_time == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter a Last Updated Date for the Project");
            return false;
        } else if(techStack.length === 0 || techStack.some(tech => tech.trim() === '')){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetFailureMessage("Please Enter at least one Technology used in the Project");
            return false;
        } else{
            return true;
        }
    }

    const UpdateDb = async() => {
        if(!CheckFormdata()){
            console.log("Formdata is not valid");
            return false;
        }
        const FinalSub = {};
        FinalSub.title = formdata.title;
        FinalSub.description = formdata.description;
        FinalSub.github = formdata.github;
        FinalSub.starttime = new Date(formdata.starttime).toISOString().split("T")[0];
        FinalSub.Last_updated_time = new Date(formdata.Last_updated_time).toISOString().split("T")[0];
        FinalSub.techstack = [...techStack];
        if(status == "Yes"){
            FinalSub.PWstatus = true;
        } else {
            FinalSub.PWstatus = false;
        }
        console.log("Final Sub: ",FinalSub);
        const res = await fetch(`http://localhost:3000/project/update/${selectedProject}`, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FinalSub),
        });

        if(!res.ok){
            console.log("An Error has occured")
            return false;
        } else {
            console.log("Form Sent Sucessfully");
            setformdata({
            title : '',
            description: '',
            github: '',
            starttime: '',
            Last_updated_time: ''
        });
            SetSucessMessage(`${FinalSub.title} updated sucessfully`);
            SetFailureMessage(`${FinalSub.title} updated unsucessfully`);
            setSelectedProject('');
            setTechStack(['']);
            fetchprojects();
            return true;
        }

    }
    const handleUpdates = (e) => {
        e.preventDefault();
        if(UpdateDb() == true){
            FailureBar.style.display = "none"; 
            sucessBar.style.display = "block";
        } else {
            FailureBar.style.display = "block"; 
            sucessBar.style.display = "none";
        }
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
                        className="block appearance-none min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
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

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg mx-auto border-b border-gray-900/10 pb-8">
                <div id="FailureMessageBox" style = {{display: "none"}}>
                    <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role="alert">
                        <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium">Danger alert!</span> {FailureMessage}.
                        </div>
                    </div>
                </div>

                <div id="SucessMessageBox" style = {{display: "none"}}>
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

                <h1 className="text-center text-base/7 font-semibold text-gray-1200">Update Project</h1>
            <form onSubmit={handleUpdates}>
                <div className="mt-1 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
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
                    <div className="sm:col-span-6">
                        <label htmlFor="SelectProject" className="block text-sm/6 font-medium text-gray-900">
                            Display on Portfolio Website:
                        </label>
                        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <select
                                id="SelectProject"
                                value={status}
                                onChange= {(e) => SetStatus(e.target.value)}
                                required
                                className="block min-w-0 grow appearance-none py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            </select> 
                        </div>
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"> Submit </button>
                    </div>
                </div>
        </form>
        </div>
    </div>

    </>);
}

export default UpdateProject