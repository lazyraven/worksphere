export const validateProject = (formData) => {
    console.log("validateProject called")
    const errors = {};

    const name = formData.name.trim();
    const description = formData.description.trim();

   const allowedStatuses = [
    'planning',
    'active',
    'on-hold',
    'completed',
  ];

    // Project name validation
    if (!name) {
        errors.name = 'Project name is required';
    } else if (name.length < 2) {
        errors.name = 'Project name must contain at least 2 characters'
    } else if (name.length > 100) {
        errors.name = 'Project name cannot exceed 100 characters'
    }

    // Description validation
    if (description.length > 2000) {
        errors.description = 'Project description cannot exceed 2000 characters'
    }

    // Status validation

    if (!allowedStatuses.includes(formData.status)) {
        errors.status = 'Please select a valid project status'
    }
    return errors;
}