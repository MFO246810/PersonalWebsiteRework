import { useState } from 'react';
import React from 'react'; 
@import "tailwindcss";

function AddProjectForm(){
    const [formdata, setformdata] = useState({
        title : '',
        description: '',
        github: '',
        starttime: '',
        Last_updated_time: '',
    }); 

    const [techStack, setTechStack] = useState(['']);

    const [SucessMessage, SetSucessMessage] = useState('');

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

    const addTechInput = () => {
        setTechStack([...techStack, '']);
    };

    const removeTechInput = (index) => {
        const updatedStack = techStack.filter((_, i) => i !== index);
        setTechStack(updatedStack);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tech Stack:', techStack.filter(Boolean)); // Filter out empty fields
        // Send techStack to backend here
    };

    return(
        <>
            <div class="space-y-12">
                <div class="border-b border-gray-900/10 pb-12">
                    <h2 class="text-base/7 font-semibold text-gray-900">Add New Project</h2>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            
                            <label for="title" class="block text-sm/6 font-medium text-gray-900">Project Title</label>
                                <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input type="text" name="title" id="title" value={formdata.title} onChange={handleFormChange} class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Title..."/>
                                </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );


    
}

export default AddProjectForm;