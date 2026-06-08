import { useEffect, useState } from 'react';

const normalize = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

function Teams() {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceEndpoint = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;
    const endpoint = import.meta.env.VITE_CODESPACE_NAME
      ? codespaceEndpoint
      : 'http://localhost:8000/api/teams/';

    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setRows(normalize(data)))
      .catch(() => setError('Unable to load teams right now.'));
  }, []);

  return (
    <section>
      <h2>Teams</h2>
      {error && <p className="error">{error}</p>}
      <ul className="cards">
        {rows.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <span>ID: {item.id}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Teams;
