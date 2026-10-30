import express from 'express';

import {
  getProfile,
  updateProfile
} from '../controllers/profile.controller.js';

import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/me', authenticate, getProfile);
router.patch('/me', authenticate, updateProfile);

export default router;