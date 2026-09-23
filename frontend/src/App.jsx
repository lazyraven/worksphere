import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await fetch(
          'http://localhost:5000/api/health'
        );

        const data = await response.json();

        setMessage(data.message);
      } catch (error) {
        console.error('API request failed:', error);
        setMessage('Backend connection failed');
      } finally {
        setLoading(false);
      }
    }

    checkBackend();
  }, []);

  return (
    <div>
      <h1>WorkSphere</h1>

      {loading ? (
        <p>Checking backend...</p>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}

export default App;