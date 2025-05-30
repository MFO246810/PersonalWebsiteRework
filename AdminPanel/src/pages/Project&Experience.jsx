import AddProjectForm from '../components/ProjectComponents/AddProjectForm'
import UpdateProject from '../components/ProjectComponents/UpdateProjectForm';
import DeleteProject from '../components/ProjectComponents/DeleteProjectsForm';
import AddExperienceForm from '../components/ExperienceComponents/AddExperienceForm';
import DeleteExperience from '../components/ExperienceComponents/DeleteExperienceForm';
import UpdateExperience from '../components/ExperienceComponents/UpdateExperienceForm';
import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router'

function Project_Exp(){
    const [choices, setchoices] = useState({
        AddProject: false,
        UpdProject: false,
        DelProject: false,
        AddExp: false,
        DelExp: false,
        UpdExp: false,
    });
    
    const RenderAddProject = () => {
        setchoices(prev => ({ ...prev, AddProject: true }));
        setchoices(prev => ({ ...prev, UpdProject: false }));
        setchoices(prev => ({ ...prev, DelProject: false }));
        setchoices(prev => ({ ...prev, AddExp: false }));
        setchoices(prev => ({ ...prev, DelExp: false }));
        setchoices(prev => ({ ...prev, UpdExp: false }));
        console.log("Add Project button works");

    }

    const RenderUpdProject = () => {
        setchoices(prev => ({ ...prev, AddProject: false }));
        setchoices(prev => ({ ...prev, UpdProject: true }));
        setchoices(prev => ({ ...prev, DelProject: false }));
        setchoices(prev => ({ ...prev, AddExp: false }));
        setchoices(prev => ({ ...prev, DelExp: false }));
        setchoices(prev => ({ ...prev, UpdExp: false }));
        console.log("UPD Project button works");
    }

    const RenderUDelProject = () => {
        setchoices(prev => ({ ...prev, AddProject: false }));
        setchoices(prev => ({ ...prev, UpdProject: false }));
        setchoices(prev => ({ ...prev, DelProject: true }));
        setchoices(prev => ({ ...prev, AddExp: false }));
        setchoices(prev => ({ ...prev, DelExp: false }));
        setchoices(prev => ({ ...prev, UpdExp: false }));
        console.log("Del Project button works");
    }

    const RenderAddExp = () => {
        setchoices(prev => ({ ...prev, AddProject: false }));
        setchoices(prev => ({ ...prev, UpdProject: false }));
        setchoices(prev => ({ ...prev, DelProject: false }));
        setchoices(prev => ({ ...prev, AddExp: true }));
        setchoices(prev => ({ ...prev, DelExp: false }));
        setchoices(prev => ({ ...prev, UpdExp: false }));
        console.log("Add Exp button works");
    }

    const RenderUpdExp = () => {
        setchoices(prev => ({ ...prev, AddProject: false }));
        setchoices(prev => ({ ...prev, UpdProject: false }));
        setchoices(prev => ({ ...prev, DelProject: false }));
        setchoices(prev => ({ ...prev, AddExp: false }));
        setchoices(prev => ({ ...prev, DelExp: false }));
        setchoices(prev => ({ ...prev, UpdExp: true }));
        console.log("Del Exp button works");
    }

    const RenderDelExp = () => {
        setchoices(prev => ({ ...prev, AddProject: false }));
        setchoices(prev => ({ ...prev, UpdProject: false }));
        setchoices(prev => ({ ...prev, DelProject: false }));
        setchoices(prev => ({ ...prev, AddExp: false }));
        setchoices(prev => ({ ...prev, DelExp: true }));
        setchoices(prev => ({ ...prev, UpdExp: false }));
        console.log("Upd Exp button works");
    }
    console.log(choices);
    return(<>
    <div className="flex h-screen bg-gray-100">
        <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="sidebar-multi-level-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Projects</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li>
                                <button onClick={RenderAddProject}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Add Project
                                </button>
                            </li>
                            <li>
                            <button onClick={RenderUpdProject}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Update Project
                                </button>
                            </li>
                            <li>
                            <button onClick={RenderUDelProject}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Delete Project
                                </button>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <button type="button" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Experience</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <ul className="ml-6 mt-2 space-y-2">
                            <li>
                                <button onClick={RenderAddExp}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Add Experience
                                </button>
                            </li>
                            <li>
                            <button onClick={RenderUpdExp}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Update Experience
                                </button>
                            </li>
                            <li>
                            <button onClick={RenderDelExp}
                                    className="block px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600 rounded-md">
                                    Delete Experience
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
        <div className="bg-gray-100 p-4 flex-1 items-center justify-center bg-gray-100 p-4">
            {choices.AddProject && <AddProjectForm/>}
            {choices.UpdProject && <UpdateProject/>}
            {choices.DelProject && <DeleteProject/>}
            {choices.AddExp && <AddExperienceForm/>}
            {choices.DelExp && <DeleteExperience/>}
            {choices.UpdExp && <UpdateExperience/>}
        </div>
    </div>
    </>
    );}

export default Project_Exp;
