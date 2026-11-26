import './project.css';
import {useNavigate} from 'react-router-dom';

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

    const navigate = useNavigate();

    const handleClickCard = ()=>{
        navigate(`/projects/${project._id}`)
    }
    return (
        <article className="project-card"
        onClick={handleClickCard}
        role='link'
        tabIndex={0}
        onKeyDown={(event)=>{
            if(event.key === 'Enter'){
                handleClickCard();
            }
        }}
        >
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