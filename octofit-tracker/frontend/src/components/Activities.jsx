import { useEffect, useState } from 'react';

const normalize = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

function Activities() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const inferredCodespace = window.location.hostname.match(/^(.*)-\d+\.app\.github\.dev$/)?.[1] || '';
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME || inferredCodespace;
    const codespaceEndpoint = `https://${codespaceName}-8000.app.github.dev/api/activities/`;
    const endpoint = codespaceName
      ? codespaceEndpoint
      : 'http://localhost:8000/api/activities/';

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setRows(normalize(data)))
      .catch(() => setError('Unable to load activities right now.'));
  }, []);

  return (
    <section>
      <h2>Activities</h2>
      {error && <p className="error">{error}</p>}
      <ul className="cards">
        {rows.map((item) => (
          <li key={item.id}>
            <strong>{item.type}</strong>
            <span>{item.durationMinutes} mins</span>
            <span>{item.points} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Activities;
