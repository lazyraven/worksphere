import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    localStorage.removeItem('token');
    logout();
    navigate('/login');
  }

  return (
    <header className="navbar">

      <div className="navbar-logo">
        WorkSphere
      </div>

      <div className="navbar-actions">
        <span>
          {user?.name}
        </span>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;