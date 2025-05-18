import projects from "../models/ProjectsModel";

export const CreateNewProject = async (req, res) => {
    try{
        const NewProject = new projects(req.body);
        await NewProject.save();
        res.status(201).json({"Message": "Project Added Sucessfully"});
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB Saving Failed check the api for error"});
    }
};

export const UpdateProject = async (req, res) => {
    try{
        await projects.findOneAndUpdate({title: req.params.title}, req.body, {new: true});
        res.status(201).json({"Message": "Project updated Sucessfully"});
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB Updating Failed check the api for error"});
    }
};

export const deleteProject = async (req, res) => {
    try{
        await projects.findOneAndDelete({title: req.params.title});
        res.status(200).json({"Message": "Project Deleted Sucessfully"})
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB didnt update sucessfully"})
    }
}

export const getProjects = async (req, res) => {
    try{
        const projects = await projects.find();
        res.json(projects);
    } catch(e){
        console.log(e);
        res.status(500).json({})
    }
}
