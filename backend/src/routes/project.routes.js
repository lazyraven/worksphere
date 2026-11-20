import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';

import {
    createProject,
    getAllProject,
    getProjectById,
    updateProject,
    deleteProject
} from '../controllers/project.controller.js';

const router = express.Router();

// Create a project
router.post('/', authenticate, createProject);

// Get all projects
router.get('/', authenticate, getAllProject);

// Get a project by ID
router.get('/:projectId', authenticate, getProjectById);

// Update a project
router.patch('/:projectId', authenticate, updateProject);

// Delete a project
router.post('/:projectId', authenticate, deleteProject);

export default router;