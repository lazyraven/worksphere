import {Link} from 'react-router-dom'
const projects = [
    { id: 1, name: 'Worksphere Dashboard' },
    { id: 2, name: 'Customer Portal' }
]

function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <p>Manage your projects here</p>

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