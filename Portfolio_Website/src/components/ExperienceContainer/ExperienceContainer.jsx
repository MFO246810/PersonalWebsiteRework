import React from 'react'
import "./ExperienceContainer.css"

const ExperienceContainer =({Experience}) => (
    <>
        <div className = "experience">
            <h3> Experience.title</h3>
            

            <p className='Experience__description'>{Experience.description}</p>
                {Experience.techstack && (
                    <ul className='Experience__stack'>
                        {Experience.techstack.map((item) => (
                        <li key={uniqid()} className='Experience__stack-item'>
                            {item}
                        </li>
                    ))}
                </ul>)}

        {Experience.github && (
            <a
                href={Experience.github}
                aria-label='source code'
                className='link link--icon'>
                <GitHubIcon />
            </a>
        )}

        </div>
    </>
)