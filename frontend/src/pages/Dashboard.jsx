import WelcomeMessage from '../components/dashboard/WelcomeMessage';
import StatCard from '../components/dashboard/StatCard';
import RecentProjects from '../components/dashboard/RecentProjects.jsx';
// in import sectioni can see not use in after filename .jsx why ?
import Badge from '../components/common/Badge';

function Dashboard() {
  return (
    <div className="dashboard">
      <WelcomeMessage name="Nisha" />

      <section className="stats-grid">
        <StatCard
          title="Projects"
          value="12"
          description="Total projects"
        />

        <StatCard
          title="Tasks"
          value="86"
          description="Total tasks"
        />

        <StatCard
          title="Completed"
          value="64"
          description="Completed tasks"
        />

        <StatCard
          title="Team Members"
          value="8"
          description="Active members"
        />
      </section>

      <RecentProjects />

      <Badge text='Completed'/>
      <Badge text="In Progress" />
    </div>
  );
}

export default Dashboard;