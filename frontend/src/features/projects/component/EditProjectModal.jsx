const EditProjectModal = ({isOpen, onClose, project, onProjectUpdated}) => {
    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-overlay">
            <div className="model-content"
                role="dialog"
                aria-modal='true'
                aria-labelledby="edit-project-title"
            >
                <div className="modal-header">
                    <h2 id="edit-project-title">Edit Project</h2>
                    <button type="button"
                        onClick={onClose}
                        aria-label="Close modal"
                    >&times;</button>
                </div>
                <p>Edit your project details here.</p>
                <div className="modal-actions">
                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditProjectModal;