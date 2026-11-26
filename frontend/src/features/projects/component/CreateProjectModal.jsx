import { useState } from 'react'
// import FormField from '../../../components/forms/FormField';
import { validateProject } from '../../../utils/projectValidation';
import {apiRequest} from '../../../services/api'
import './project.css';

const CreateProjectModal = ({ isOpen, onClose, onProjectCreated }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: 'planning'
    })
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState('');
    const [saving, setsaving] = useState(false);

    // Don't render the modal when it is closed.
    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validateProject(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }
        console.log('Project form is valid:', {
            ...formData,
            name: formData.name.trim(),
            description: formData.description.trim(),
        });
        try {
            setsaving(true);
            setApiError('');
            const payload = {
                name: formData.name.trim(),
                description: formData.description.trim(),
                status: formData.status,
            }

            const response = await apiRequest('/projects', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            // Notify parent component
            await onProjectCreated(response.data);
            // Reset form after successful creation
            setFormData({
                name: '',
                description: '',
                status: 'planning'
            })
            setErrors({}),
            onClose();
        } catch (error) {
            setApiError(error.message || 'Failed to create project')
        } finally {
            setsaving(false);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    }

    return (
        <div className="modal-overlay">
            <div className="project-modal"
                role="dialog"
                aria-modal="true" aria-labelledby="project-modal-title">
                <div className="project-modal-header">
                    <h2 id="project-modal-title">
                        Create New Project
                    </h2>

                    <button type="button" onClick={onClose} aria-label="Close modal"> &times;</button>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="project-modal-body">
                        <div className="form-group">
                            <label htmlFor="name">Project Name</label>
                            <input id="project-name"
                                type="text" name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='Enter project name' />
                            {errors.name && (<p className='field-error'>{errors.name}</p>)}

                            <label htmlFor="project-description">Description</label>
                            <textarea
                                id='project-description'
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder='Describe your project' />
                            {errors.description && (<p className='field-error'>{errors.description}</p>)}

                            <label htmlFor="project-status">Project Status</label>
                            <select id='project-status'
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                            >
                                <option value="planning">Planning</option>
                                <option value="active">Active</option>
                                <option value="on-hold">On Hold</option>
                                <option value="completed">Completed</option>
                                {errors.status && (
                                    <p className="field-error">{errors.status}</p>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="project-modal-footer">
                        <button type="button" onClick={onClose} disabled={saving}>
                            Cancel</button>
                        <button type='submit' disabled={saving}>
                             {saving ? 'Creating....' : 'Create Project'} </button>
                    </div>

                    {apiError && <p className='field-error' role='alert'>{apiError}</p>}
                </form>
            </div>
        </div>
    )
}

export default CreateProjectModal;