const ProjectOverview = ({project})=>{
    const {
        name,
        description,
        status,
        owner,
        createdAt
    } = project;

    const formatedDate = createdAt ? new Date(createdAt).toLocaleDateString() : 'Unavailable';
    const statusLabel = status ? status.replace('-', ' ') : 'Unknown'

    return (
        <section className="project-overview">
            <div className="project-overview-header">
                <div>
                    <h1>{name}</h1>
                    <p>{description || 'No description provided.'}</p>
                </div>

                <span className={`project-status-staus-${status}`}>
                    {statusLabel}
                </span>
            </div>

            <div className="project-info-grid">
                <div className="project-info-item">
                    <span>Project Owner</span>
                    <strong>{owner?.name || 'Unknown'}</strong>
                </div>

                <div className="project-info-item">
                    <span>Project Status</span>
                    <strong>{statusLabel}</strong>
                </div>

                <div className="project-info-item">
                    <span>Created At</span>
                    <strong>{formatedDate}</strong>
                </div>
            </div>
        </section>
    )
}

export default ProjectOverview;