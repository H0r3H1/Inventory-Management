import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css';


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here
    if (email === 'admin@example.com' && password === 'password') {
      // Successful login, navigate to dashboard
      setError('');
      setEmail('');
      setPassword('');
      alert('Login successful!');
      navigate('/Home')
    } else {
      // Invalid credentials, display error message
      setError('Invalid email or password');
    }
  };

  return (
    <div style={styles.container}><center>
      <form style={styles.form} onSubmit={handleSubmit}>
       <center><h2>Login&nbsp;&nbsp;</h2></center> 
        {error && <p style={styles.error}>{error}</p>}
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      
        <button style={styles.button} type="submit">Login</button>

        
        <p>Want to become a memeber? <Link to="/signup">Sign up</Link></p>
      </form></center>
    </div>
  );
};

export default Login;