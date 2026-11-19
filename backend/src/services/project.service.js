import mongoose from 'mongoose'
import Project from '../models/Project';

// Create a new project
export const createProject = async (userId, projectData) => {
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

export const getAllProject = async (userId) => {
    const projects = await Project.find({
        $or: [
            { owner: userId },
            { members: userId }
        ]
    })
        .populate('owner', 'name email avatar')
        .populate('members', 'name email avatar')
        .sort({ createdAt: -1 })

    return projects;
}

export const getProjectById = async (projectId, userId) => {

    // Validate MongoDB ObjectId
    if (!mongoose.isValidObjectId(projectId)) {
        throw new Error('Invalid Project id');
    }

    // Find project accessible to the logged-in user
    const project = await Project.findOne({
        _id: projectId,
        $or: [{ owner: userId },
        { members: userId }
        ]
    })
        .populate('owner', 'name email avatar')
        .populate('members', 'name email avatar');

    if (!project) {
        throw new Erros('')
    }
    return project;
}

export const updateProject = async (projectId, userId, updates) => {
    // Validate MongoDB ObjectId
    if (!mongoose.isValidObjectId(projectId)) {
        throw new error('Invalid project ID');
    }

    // Find project owned by the authenticated user
    const project = await Project.findOne({
        _id: projectId,
        owner: userId
    })
    if (!project) {
        throw new error('Project not found or you are not authorized');
    }

    // Allow only specific fields to be updated
    const allowFields = ['name', 'description', 'status'];
    for (const field of allowFields) {
        if (updates[field] !== undefined) {
            project[field] == updates[field]
        }
    }
    // Save and run Mongoose validation
    await project.save();
    
    return project;
}