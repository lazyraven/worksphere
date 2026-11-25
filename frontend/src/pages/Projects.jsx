import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api';
import ProjectCard from '../features/projects/component/ProjectCard'
import CreateProjectModal from '../features/projects/component/CreateProjectModal';

// const projects = [
//     { id: 1, name: 'Worksphere Dashboard' },
//     { id: 2, name: 'Customer Portal' },
//     { id: 101, name: 'Setting' },
//     { id: 102, name: 'Project-1' },
//     { id: 103, name: 'Project-2' },
//     { id: 104, name: 'Project-3' },
// ]

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError('')
            const response = await apiRequest('/projects');
            setProjects(response.data);

        } catch (error) {
            setError(error.message || 'Failed to fetch projects')
        } finally {
            setLoading(false);
        }
    }

    const navigate = useNavigate();
    function backToDashboard() {
        navigate('/')
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <div>
            {!loading && !error && projects.length > 0 && (
                <div className="projects-grid">
                    {projects.map((project) =>
                        <ProjectCard
                            key={project._id}
                            project={project}
                        />
                    )}
                </div>
            )}
            <div className='projects-page'>
                <div className="projects-headers">
                    <div>
                        <h1>Projects</h1>
                        <p>Manage and track all your projects in one place.</p>
                    </div>
                    <button type='button' onClick={()=> setIsCreateModalOpen(true)}>
                        +Create Project
                    </button>
                </div>

                <button onClick={backToDashboard}>Back to Dashboard</button>
                {projects.map((project) => (
                    <div key={project.id}>
                        <h3>ProjectName: {project.name}</h3>
                        <h3>Description: {project.description}</h3>

                        <Link to={`/projects/${project.id}`}>
                            View Project
                        </Link>
                    </div>

                )
                )}

                <div className="projects-content">
                    <p>Your projects will appear here.</p>
                </div>

                <div className="project-content">
                    {loading && <p>Loading projects....</p>}
                    {error && <p>{error}</p>}

                    {!loading && !error && !projects.length === 0 && (<p>No projects found. Create your first project.</p>)}

                    {!loading && !error && projects.length > 0 && (<p>Total Projects: {projects.length} </p>)}
                </div>
            </div>
            <CreateProjectModal isOpen={isCreateModalOpen} onClose={()=>setIsCreateModalOpen(false)}/>
        </div>
    )
}

export default Projects;