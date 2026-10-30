import {
  getMyProfile,
  updateMyProfile
} from '../services/profile.service.js';

export async function getProfile(req, res, next) {
  try {
    const user = await getMyProfile(req.userId);

    return res.status(200).json({
      success: true,
      data: { user }
    });
  } catch (error) {
    next(error);
  }
}

export async function updateProfile(req, res, next) {
  try {
    const allowedFields = ['name', 'avatar'];
    const updates = {};

    for (const field of allowedFields) {
      if (Object.hasOwn(req.body, field)) {
        updates[field] = req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Provide a name or avatar to update'
      });
    }

    for (const [field, value] of Object.entries(updates)) {
      if (typeof value !== 'string') {
        return res.status(400).json({
          success: false,
          message: `${field} must be a string`
        });
      }
    }

    const user = await updateMyProfile(req.userId, updates);

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: { user }
    });
  } catch (error) {
    next(error);
  }
}