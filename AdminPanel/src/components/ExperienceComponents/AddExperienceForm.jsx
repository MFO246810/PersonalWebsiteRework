import { useState } from 'react';
import React from 'react'; 

function AddExperienceForm(){
    const [formdata, setformdata] = useState({
        title : '',
        position : '',
        location : '',
        company : '',
        description: '',
        startTime: Date(),
        EndTime: Date(),
    }); 

    const [SucessMessage, SetSucessMessage] = useState('');

    const sucessBar = document.getElementById("SucessMessage");
    const FailureBar = document.getElementById("MessageBox");

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setformdata(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    const CheckFormdata = () => {
        if(formdata.title == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a title for this Experience");
            return false;
        } else if(formdata.description == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a description for this Experience");
            return false;
        }else if(formdata.position == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a Position for this Experience");
            return false;
        } else if(formdata.location == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a location for this Experience");
            return false;
        } else if(formdata.company == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a company for this Experience");
            return false;
        } else if(formdata.startTime == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a Start Date for this Experience");
            return false;
        } else if(formdata.EndTime == ""){
            FailureBar.style.display = "block";
            sucessBar.style.display = "none";
            SetSucessMessage("Please Enter a Last Updated Date for this Experience");
            return false;
        } 
        return true;
    }

    const sendDb = async () => {
        if(!CheckFormdata()){;
            return;
        }
        const FinalSub = {};
        FinalSub.title = formdata.title;
        FinalSub.description = formdata.description;
        FinalSub.position = formdata.position;
        FinalSub.location = formdata.location;
        FinalSub.company = formdata.company;
        FinalSub.startTime = new Date(formdata.startTime).toISOString().split("T")[0];
        FinalSub.EndTime = new Date(formdata.EndTime).toISOString().split("T")[0];
        console.log("Final Sub: ",FinalSub)
        const res = await fetch('http://localhost:3000/experience', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FinalSub),
        });

        if(!res.ok){
            console.log("An Error has occured")
        } else {
            console.log("Form Sent Sucessfully");
            setformdata({
            title : '',
            position : '',
            location : '',
            company : '',
            description: '',
            startTime: Date(),
            EndTime: Date(),
        });
            SetSucessMessage(`${FinalSub.title} Added Sucessfully`);
            FailureBar.style.display = "none";
            sucessBar.style.display = "block";
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendDb();
    };

    return(<>
        <form onSubmit={handleSubmit}>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="w-full max-w-lg mx-auto border-b border-gray-900/10 pb-8">
                <div id="MessageBox" style = {{display: "none"}}>
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

                <div id="SucessMessage" style = {{display: "none"}}>
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
                    <h1 className="text-center text-base/7 font-semibold text-gray-1200">Add New Experience</h1>
                    <div className="mt-3 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">

                            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">Experience Title</label>
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input type="text" name="title" id="title" value={formdata.title} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Title..."/>
                                </div>
                        </div>

                        <div className="sm:col-span-6">

                        <label htmlFor="position" className="block text-sm/6 font-medium text-gray-900">Position: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="text" name="position" id="position" value={formdata.position} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
                            </div>
                        </div>

                        <div className="sm:col-span-6">

                        <label htmlFor="company" className="block text-sm/6 font-medium text-gray-900">Company: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="text" name="company" id="company" value={formdata.company} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
                            </div>
                        </div>

                        <div className="sm:col-span-6">

                        <label htmlFor="location" className="block text-sm/6 font-medium text-gray-900">Location: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="text" name="location" id="location" value={formdata.location} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder=""/>
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

                        <label htmlFor="startTime" className="block text-sm/6 font-medium text-gray-900">Start Date: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="date" name="startTime" id="startTime" value={formdata.startTime} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                    </div>

                    <div className="sm:col-span-6">

                        <label htmlFor="EndTime" className="block text-sm/6 font-medium text-gray-900">End Date: </label>
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <input type="date" name="EndTime" id="EndTime" value={formdata.EndTime} onChange={handleFormChange} className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"/>
                            </div>
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"> Submit </button>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </>);


    
}

export default AddExperienceForm;