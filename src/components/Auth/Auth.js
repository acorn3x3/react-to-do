// import { useUserContext } from '../../context/userContext';
import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import { authUser } from '../../services/auth';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUserContext();
  if (user) {
    return <Redirect to="/items" />;
  }
  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Auth">
      <div className="sign-in-or-up-container"></div>
      <NavLink className="to sign in" to="/auth/sign-in">
        Sign In
      </NavLink>
      <NavLink className="to sign in" to="/auth/sign-up">
        Sign up
      </NavLink>

      <div className="form"></div>

      <div>
        <label>Email</label>
        <div>
          <input
            className="email-input"
            type="email"
            placeholder="sample@sample.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className="password-input"
              type="password"
              placeholder="*******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button onClick={submitAuth} className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
