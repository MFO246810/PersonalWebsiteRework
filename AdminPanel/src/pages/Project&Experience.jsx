import AddProjectForm from '../components/AddProjectForm'
import UpdateProject from '../components/UpdateProjectForm';
import React from 'react'

export default function project(){
    return(<>
        <p> This is Project I exist</p>
        <AddProjectForm/>
        <UpdateProject/>
    </>
    );
}
