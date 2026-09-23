const projects = [
  {
    id: 1,
    name: 'WorkSphere Dashboard',
    status: 'In Progress'
  },
  {
    id: 2,
    name: 'Customer Portal',
    status: 'Completed'
  },
    {
        id: 3,
        name: 'Analytics Platform',
        status: 'In Progress'
    },
    {
        id: 4,
        name: 'Inventory Management',
        status: 'Todo'
    }
];

function RecentProjects() {
  return (
    <section>
      <h2>Recent Projects</h2>

      <div>
        {/* this should be return - i mistake here take small bractets in map so that it'll take return */}
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.status}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentProjects;