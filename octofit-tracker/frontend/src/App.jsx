import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

const links = [
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function App() {
  const codeSpaceName = import.meta.env.VITE_CODESPACE_NAME;
  const apiBaseUrl = codeSpaceName
    ? `https://${codeSpaceName}-8000.app.github.dev/api`
    : 'http://localhost:8000/api';

  return (
    <div className="app-shell">
      <header className="topbar">
        <h1>OctoFit Tracker</h1>
        <p className="subtitle">React 19 presentation tier for the OctoFit APIs</p>
      </header>

      <aside className="sidebar">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className="nav-link">
            {link.label}
          </NavLink>
        ))}
      </aside>

      <main className="content">
        <section className="api-hint">
          <strong>API base:</strong> {apiBaseUrl}
        </section>

        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
