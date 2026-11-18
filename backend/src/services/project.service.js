import Project from '../models/Project';

// Create a new project
export const createProject = async (userId, projectData)=>{
    const [name, description, status] = projectData;
    const project = await Project.create({
        name,
        description,
        status,
        owner: userId,
        member: [userId],
    })
    return project;
}

export function getProject(userId) {

}