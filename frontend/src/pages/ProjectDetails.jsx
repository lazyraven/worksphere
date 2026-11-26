import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiRequest } from '../services/api';

function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProject = async () => {
        try {
            setLoading(true);
            setError('');
            const response = await apiRequest(`/projects/${projectId}`);
            setProject(response.data)
        } catch (error) {
            setError(
                error.message || 'Failed to fetch project details'
            );
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
  fetchProject();
}, [projectId]);

    if (loading) {
        return <p>Loading project details..</p>
    } if (error) {
        return <p>{error}</p>
    } if (!project) {
        return <p>Project not found.</p>
    }
    return (
        <div>
            <h1>Project Details</h1>

            <p>
                Project ID: {projectId}
            </p>

            <div className="project-details-page">
                <h1>{project.name}</h1>

                <p>{project.description || 'No description provided.'}</p>

                <p>Status: {project.status}</p>

                <p>Owner: {project.owner?.name || 'Unknown'}</p>

                <p>Created: {''}
                    {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'unavailable'}
                </p>
            </div>
        </div>
    )

}
export default ProjectDetails;