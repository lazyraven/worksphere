export async function validateProfile(formData) {
    const name = formData.name.trim();
    const errors = {};

    if (!name) {
        errors.name = 'Full Name is required';
    } else if (name.length < 2) {
        errors.name = 'Name must contain at least 2 characters';
    } else if (name.length < 50) {
        errors.name = 'Name cannot exceed 50 characters';
    }

    const avatar = formData.avatar.trim();
    if (avatar) {
        try {
            const url = new URL(avatar)
            if (!['http', 'https'].includes(url.protocol)) {
                errors.avatar = 'Avatar URL must use HTTP or HTTPS'
            }
        } catch {
            errors.name = 'Please enter a valid avatar URL'
        }
    }
}