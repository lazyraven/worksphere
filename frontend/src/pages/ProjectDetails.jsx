import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiRequest } from '../services/api';
import ProjectOverview from '../features/projects/component/projectOverview.jsx';
import ProjectMembers from '../features/projects/component/ProjectMembers.jsx';

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
        //for testing loading message - i used setTimeout
        // setTimeout(()=>{
        //     fetchProject();
        // }, 1000)
        fetchProject();

}, [projectId]);

    if (loading) {
        return (<div className="project-details-loading">
            <p>Loading project details....</p>
        </div>)
    }
    if (error) {
        return (
            <div className="project-details-error">
                <h2>Unabled to Load project</h2>
                <p>{error}</p>
                {/*For test - to check this you can mistake in apirequest it'll display.. */}
                <button onClick={fetchProject}>Try again</button>
            </div>
        )
    } if (!project) {
        return <p>Project not found.</p>
    }

    return (
        <div>
            <h1>Project Details</h1>
            <p>Project ID: {projectId}</p>

            <div className="project-details-page">
                <h1>{project.name}</h1>

                <p>{project.description || 'No description provided.'}</p>

                <p>Status: {project.status}</p>

                <p>Owner: {project.owner?.name || 'Unknown'}</p>

                <p>Created: {''}
                    {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'unavailable'}
                </p>
            </div>

            <ProjectOverview project = {project}/>
            <ProjectMembers members={project.member || []}
            ownerId={project.owner?._id}
            />
        </div>
    )

}
export default ProjectDetails;