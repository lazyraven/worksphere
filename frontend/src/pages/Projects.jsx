import { Link, useNavigate } from 'react-router-dom'
const projects = [
    { id: 1, name: 'Worksphere Dashboard' },
    { id: 2, name: 'Customer Portal' },
    { id: 101, name: 'Setting' },
    { id: 102, name: 'Project-1' },
    { id: 103, name: 'Project-2' },
    { id: 104, name: 'Project-3' },
]


function Projects() {
    const navigate = useNavigate();
    function backToDashboard() {
        navigate('/')
    }
    return (
        <div>
            <h1>Projects</h1>
            <p>Manage your projects here</p>
            <button onClick={backToDashboard}>Back to Dashboard</button>
            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>

                    <Link to={`/projects/${project.id}`}>
                      View Project
                    </Link>
                </div>

            )
            )}

        </div>
    )
}

export default Projects;