import uniqid from 'uniqid'
import React, { useEffect, useState } from 'react'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import "./experience.css"

let ShownExperiences = [];
const Experience = () => {
    const [Experiences, SetExperiences] = useState([]);

    const fetchExperience = async() => {
        const res = await fetch('http://localhost:3000/experience')
          .catch(err => console.error("Error fetching Experiences:", err));

        const ExperienceList = await res.json();
        const Proj = [];
        for (let i = 0; i < ExperienceList.length; i++){
            if(ExperienceList[i].PWstatus == true){
                Proj.push(ExperienceList[i]);
            }
        }
        SetExperiences(Proj);
        ShownExperiences = Experiences;
    }
    
    useEffect (() => {
        fetchExperience();});

    
    useEffect 
    if (!Experiences.length) return null

    return(
        <>
            <section id='experience' className='section experience'>
                <h2 className='section__title'>Experiences</h2>
                <div className='experience__grid'>
                    {Experiences.map((Experience) => (
                        Experience.PWstatus === true ? (<ExperienceContainer key={uniqid()} Experience={Experience}/>) : null
                    ))}
                </div>
            </section>
        </>
    )
}

export {ShownExperiences};
export default Experience;