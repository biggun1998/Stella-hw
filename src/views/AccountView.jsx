import { useState } from 'react';

export default function AccountView({ onCreateAccount }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(username.trim() && password.trim()
      ? 'Login form is valid.' : 'Please enter username and password.');
  }

  return (
    <section className="account-form mx-auto">
      <h1 className="mb-4">Login</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">Username</label>
          <input id="username" className="form-control" autoComplete="username" required
            value={username} onChange={event => { setUsername(event.target.value); setMessage(''); }} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input id="password" className="form-control" type="password" autoComplete="current-password" required
            value={password} onChange={event => { setPassword(event.target.value); setMessage(''); }} />
        </div>
        <button className="btn btn-primary me-2" type="submit">Login</button>
        <button className="btn btn-outline-secondary" type="button" onClick={onCreateAccount}>Create Account</button>
        {message && <p className="mt-3" role="status">{message}</p>}
      </form>
    </section>
  );
}
