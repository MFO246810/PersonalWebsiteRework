import experience from "../models/ExperienceModel.js";

export const CreateNewExperience = async (req, res) => {
    try{
        const NewExperience = new experience(req.body);
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
