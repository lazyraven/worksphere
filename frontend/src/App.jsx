
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Projects from './pages/Projects.jsx';
import Tasks from './pages/Tasks.jsx';
import Analytics from './pages/Analytics.jsx';
import Settings from './pages/Settings.jsx';
import NotFound from './pages/NotFound.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Reports from './pages/Reports.jsx'

function App() {
  return (

    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path='/dashboard'
          element={<Dashboard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/analytics' element={<Projects />} />
        <Route path='/reports' element={<Reports/>}/>
      </Route>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/projects/:projectId' element={<ProjectDetails/>}/>
    </Routes>

  );
}

export default App;