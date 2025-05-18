import { useState } from 'react';
import React from 'react'; 

function AddProjectForm(){
    const [formdata, setformdata] = useState({
        title : '',
        description: '',
        github: '',
        starttime: '',
        Last_updated_time: '',
    }); 

    const [SucessMessage, SetSucessMessage] = useState('');
    
}

export default AddProjectForm;