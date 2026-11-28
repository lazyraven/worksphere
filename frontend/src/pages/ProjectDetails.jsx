import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { apiRequest } from '../services/api';
import ProjectOverview from '../features/projects/component/projectOverview.jsx';
import ProjectMembers from '../features/projects/component/ProjectMembers.jsx';
import {useAuth} from '../hooks/useAuth.js';
import EditProjectModal from '../features/projects/component/EditProjectModal.jsx';

function ProjectDetails() {
    const { projectId } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const isValidProjectId = /^[0-9a-fA-F]{24}$/.test(projectId);
    const {user} = useAuth();
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

        if(!isValidProjectId){
            setError('Invalid project ID.');
            setLoading(false);
            return;
        }
        fetchProject();
}, [projectId]);

    if (loading) {
        return (<div className="project-details-loading">
            <p>Loading project details....</p>
        </div>)
    }

    if (!isValidProjectId) {
        return <div className="project-details-error">
            <h2>Invalid Project ID</h2>
            <p>The project ID in the URL is not valid.</p>
        </div>
    }
    if (error) {
        const isNotFound = error.toLowerCase().includes('not found');
        return (
            <div className="project-details-error">
                <h2>
                    {isNotFound ? 'Project Not Found' : 'Unable to Load Project'}
                </h2>
                <p>{isNotFound ? "This project doesn't exist or you don't have access to it" : 'error'}</p>
                {/*For test - to check this you can mistake in apirequest it'll display.. */}
                {isNotFound && (<button onClick={fetchProject}>Try again</button>)}
            </div>
        )
    }
    if (!project) {
        return <p>Project not found.</p>
    }
console.log("user", user)
    const isOwner = user?.id === project?.owner?._id;
    console.log("isOwner", isOwner)
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
            {isOwner && (<div className="project-actions">
                <button type='button' onClick={() =>setIsEditModalOpen(true)}>
                    Edit Project 
                </button>
                <button className='delete-project-btn' type='button' onClick={() => console.log('Delete project')}>
                    Delete Project
                </button>
            </div>)}

           
            <ProjectOverview project = {project}/>
            <ProjectMembers members={project.members || []}
            ownerId={project.owner?._id}
            />

             <EditProjectModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                project={project}
                onProjectUpdated={(updatedProject) => {
                    setProject(updatedProject);
                    setIsEditModalOpen(false);
                }}
            />

        </div>
    )

}
export default ProjectDetails;