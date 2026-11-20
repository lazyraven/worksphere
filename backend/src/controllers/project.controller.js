import { createProject as createProjectService } from '../services/project.service.js';
import { getAllProject as getAllProjectsService } from '../services/project.service.js';
import { getProjectById as getProjectByIdService } from '../services/project.service.js';
import { updateProject as updateProjectService } from '../services/project.service.js';
import { deleteProject as deleteProjectService } from '../services/project.service.js';

export const createProject = async (req, res, next) => {
    try {
        const userId = req.userId;
        const project = await createProjectService(userId, req.body);

        return res.status(201).json({
            success: true,
            message: 'Project created successfully',
            data: project
        })
    } catch (err) {
        next(err);
    }
}

export const getAllProject = async (req, res, next) => {
    const userId = req.userId;
    const projects = await getAllProjectsService(userId);
    try {
        return res.status(200).json({
            success: true,
            message: 'Projects fetched successfully',
            count: projects.length,
            data: projects
        })
    } catch (err) {
        next(error)
    }
}

export const getProjectById = async (req, res, next) => {
    try {
        const { projectId } = req.params;
        const userId = req.userId;
        const projects = await getProjectByIdService(projectId, userId);

        return res.status(200).json({
            success: true,
            message: 'Project fetched successfully',
            data: projects,
        })
    } catch (err) {
        next(err)
    }
}

export const updateProject = async (req, res, next) => {
    try {
        const { projectId } = req.params;
        const userId = req.userId;
        const updates = req.body;

        const project = await updateProjectService(projectId, userId, updates)
        return res.status(200).json({
            success: true,
            message: 'Project updated successfully',
            data: project
        })
    } catch (err) {
        next(err)
    }
}

export const deleteProject = async (req, res, next) => {
    try { 
        const { projectId } = req.params;
        const userId = req.userId;

        await deleteProjectService(projectId, userId);

        return res.status(200).json({
            success: true,
            message: 'Project deleted successfully',
            data: projects
        })
    } catch (err) {
        next(err)
    }
}