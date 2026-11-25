import './project.css';

const statusStyles = {
    planning: 'status-planning',
    active: 'status-active',
    'on-hold': 'status-on-hold',
    completed: 'status-completed'
}

const ProjectCard = (({ project }) => {

    const { name, description, status, owner, createdAt } = project;

    const formatedDate = createdAt ? new Date(createdAt).toLocaleDateString() : 'Date unavailable';

    const statusLabel = status ? status.replace('-', ' ') : 'Unknown';

    return (
        <article className="project-card">
            <div className="project-card-header">
                <h3>Name: {name}</h3>

                <span className={`project-status ${statusStyles[status] || ''}`}>
                   Status:  {statusLabel}
                </span>
            </div>

            <p className="project-decription">
                {description || 'No description provided'}
            </p>

            <div className="project-card-footer">
                <span>
                    Owner: {owner?.name || 'Unknown'}
                </span>

                <span>
                    Created: {formatedDate}
                </span>
            </div>
        </article>
    )
})

export default ProjectCard;