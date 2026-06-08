import { useEffect, useState } from 'react';

const normalize = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

function Workouts() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const inferredCodespace = window.location.hostname.match(/^(.*)-\d+\.app\.github\.dev$/)?.[1] || '';
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME || inferredCodespace;
    const codespaceEndpoint = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
      : '';

    fetch('/api/workouts/')
      .then(async (res) => {
        if (!res.ok) throw new Error('primary endpoint failed');
        return res.json();
      })
      .then((data) => setRows(normalize(data)))
      .catch(async () => {
        if (!codespaceEndpoint) {
          setError('Unable to load workouts right now.');
          return;
        }

        try {
          const res = await fetch(codespaceEndpoint);
          if (!res.ok) throw new Error('fallback failed');
          const data = await res.json();
          setRows(normalize(data));
        } catch {
          setError('Unable to load workouts right now.');
        }
      });
  }, []);

  return (
    <section>
      <h2>Workouts</h2>
      {error && <p className="error">{error}</p>}
      <ul className="cards">
        {rows.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <span>User: {item.userId}</span>
            <span>{item.intensity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Workouts;
