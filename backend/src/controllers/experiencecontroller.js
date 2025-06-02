import experience from "../models/ExperienceModel.js";

export const CreateNewExperience = async (req, res) => {
    try{
        const data = req.body;
            const start = new Date(data.startTime);
            const updated = new Date(data.EndTime);
        
            if (isNaN(start.getTime()) || isNaN(updated.getTime())) {
                return res.status(400).json({ error: 'Invalid date format' });
            }
        
            if (start > updated) {
                return res.status(400).json({ error: 'Start time cannot be later than last updated time' });
            }
        
            const NewExperience = new experience({
                title: data.title,
                position: data.position,
                location: data.location,
                company: data.company,
                description: data.description,
                startTime: data.startTime,
                EndTime: data.EndTime,
                PWstatus: data.PWstatus
            });
        await NewExperience.save();
        res.status(201).json({"Message": "Experience Added Sucessfully"});
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB Saving Failed check the api for error"});
    }
};

export const UpdateExperience = async (req, res) => {
    try{
        await experience.findOneAndUpdate({title: req.params.title}, req.body, {new: true});
        res.status(201).json({"Message": "Experience updated Sucessfully"});
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB Updating Failed check the api for error"});
    }
};

export const deleteExperience = async (req, res) => {
    try{
        await experience.findOneAndDelete({title: req.params.title});
        res.status(200).json({"Message": "Experience Deleted Sucessfully"})
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB didnt update sucessfully"})
    }
}

export const getExperiences = async (req, res) => {
    try{
        const experiences = await experience.find();
        res.json(experiences);
    } catch(e){
        console.log(e);
        res.status(500).json({})
    }
}
