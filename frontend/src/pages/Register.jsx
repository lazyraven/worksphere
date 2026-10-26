import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { apiRequest } from '../services/api';
import { useAuth } from '../hooks/useAuth';

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await apiRequest(
        '/auth/register',
        {
          method: 'POST',
          body: JSON.stringify(formData)
        }
      );

      localStorage.setItem(
        'token',
        response.data.token
      );

      login(response.data.user);

      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Create Account</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Creating account...'
            : 'Register'}
        </button>

      </form>
    </div>
  );
}

export default Register;