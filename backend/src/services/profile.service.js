import User from '../models/User.js';

function toPublicProfile(user) {
  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    avatar: user.avatar
  };
}

export async function getMyProfile(userId) {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  return toPublicProfile(user);
}

export async function updateMyProfile(userId, updates) {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  if (updates.name !== undefined) {
    const name = updates.name.trim();

    if (name.length < 2 || name.length > 50) {
      const error = new Error(
        'Name must be between 2 and 50 characters'
      );
      error.statusCode = 400;
      throw error;
    }

    user.name = name;
  }

  if (updates.avatar !== undefined) {
    const avatar = updates.avatar.trim();

    if (avatar.length > 2048) {
      const error = new Error('Avatar URL is too long');
      error.statusCode = 400;
      throw error;
    }

    if (
      avatar !== '' &&
      !/^https?:\/\/\S+$/i.test(avatar)
    ) {
      const error = new Error(
        'Avatar must be a valid HTTP or HTTPS URL'
      );
      error.statusCode = 400;
      throw error;
    }

    user.avatar = avatar;
  }

  await user.save();

  return toPublicProfile(user);
}