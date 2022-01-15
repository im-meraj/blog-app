import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        password,
        email,
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
    }
  };

    return (
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text" placeholder="Enter an username" className="registerInput" onChange={(e) => {
            setUsername(e.target.value);
          }}/>
          <label>Email</label>
          <input type="email" placeholder="Enter an Email" className="registerInput" onChange={(e) => {
            setEmail(e.target.value);
          }}/>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter a password"
            className="registerInput"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerLoginButton">
          <Link className="link" to="/login">Login</Link>
        </button>
        {error && <span className="error">Error! Username or Email already exists!</span>}
      </div>
    );
}
