import { title } from "process";
import projects from "../models/ProjectsModel.js";

export const CreateNewProject = async (req, res) => {
    try{
        const data = req.body;
        const start = new Date(data.starttime);
        const updated = new Date(data.Last_updated_time);

        if (isNaN(start.getTime()) || isNaN(updated.getTime())) {
            return res.status(400).json({ error: 'Invalid date format' });
        }

        if (start > updated) {
            return res.status(400).json({ error: 'Start time cannot be later than last updated time' });
        }

        const NewProject = new projects({
            title: data.title,
            description: data.description,
            github: data.github,
            techstack: data.techstack,
            starttime: data.starttime,
            Last_updated_time: data.Last_updated_time
        });
        await NewProject.save();
        res.status(200).json({"Message": "Project Added Sucessfully"});
    } catch(e){
        console.log(e);
        res.status(500).json({"Error": "DB Saving Failed check the api for error"});
    }
};

export const UpdateProject = async (req, res) => {
    try{
        console.log(req.params['title']);
        await projects.findOneAndUpdate({title: req.params['title']}, req.body, {new: true});
        res.status(200).json({"Message": "Project updated Sucessfully"});
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
        const Projects = await projects.find();
        res.json(Projects);
    } catch(e){
        console.log(e);
        res.status(500).json({})
    }
}
