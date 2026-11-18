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

export const getAllProject = async (userId)=> {
    const projects = await Project.find({
        $or: [
            { owner: userId },
            { members: userId }
        ]
    })
    .populate('owner' , 'name email avatar')
    .populate('members', 'name email avatar')
    .sort({createdAt: -1})

    return projects;
}