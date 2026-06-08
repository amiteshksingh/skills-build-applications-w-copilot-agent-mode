import { useEffect, useState } from 'react';

const normalize = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

function Users() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const inferredCodespace = window.location.hostname.match(/^(.*)-\d+\.app\.github\.dev$/)?.[1] || '';
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME || inferredCodespace;
    const codespaceEndpoint = `https://${codespaceName}-8000.app.github.dev/api/users/`;
    const endpoint = codespaceName
      ? codespaceEndpoint
      : 'http://localhost:8000/api/users/';

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setRows(normalize(data)))
      .catch(() => setError('Unable to load users right now.'));
  }, []);

  return (
    <section>
      <h2>Users</h2>
      {error && <p className="error">{error}</p>}
      <ul className="cards">
        {rows.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <span>Team: {item.teamId}</span>
            <span>{item.points} pts</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Users;
