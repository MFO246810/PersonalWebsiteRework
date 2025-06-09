import React from 'react'
import "./ExperienceContainer.css"

const ExperienceContainer =({Experience}) => {
    const starttime = Experience.startTime.slice(0,10);
    const Endtime = Experience.EndTime.slice(0,10);
    
    return (
    <>
        <div className="p-4 rounded-md mx-auto mb-6 mt-6">
            <div className="grid grid-cols-3 gap-4 items-center">
                <div className="text-left font-semibold text-lg">
                    {Experience.position}
                </div>
                <div className="text-center font-semibold text-lg">
                </div>
                <div className="text-right font-semibold text-lg">
                    {Experience.company}
                </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
                <div>{Experience.location}</div>
                <div>{starttime} – {Endtime}</div>
            </div>

            <div className="mt-4 text-gray-700 leading-relaxed">
                {Experience.description}
            </div>
        </div>
    </>
)}

export default ExperienceContainer;