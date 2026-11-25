import { useState } from 'react'
// import FormField from '../../../components/forms/FormField';
import { validateProject } from '../../../utils/projectValidation';
import './project.css';

const CreateProjectModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        status: 'planning'
    })
    const [errors, setErrors] = useState({});
    // Don't render the modal when it is closed.
    if (!isOpen) {
        return null;
    }

    const handleSubmit = (event) => {
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
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type='submit'> Create Project </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateProjectModal;