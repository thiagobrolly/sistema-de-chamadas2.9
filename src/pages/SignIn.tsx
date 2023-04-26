import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useAuth();

  async function handleSignIn(e: FormEvent) {
    e.preventDefault();

    const data = { email, password };

    await signIn(data);
  }

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">{loadingAuth ? 'Loading...' : 'Send'}</button>
      </form>

      <Link to="/signup">SignUp</Link>
    </div>
  );
}
