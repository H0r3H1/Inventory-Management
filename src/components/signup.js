import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  Signupform: {
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
    backgroundColor: '#808080',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  error: {
    color: 'grey',
    marginBottom: '10px',
  },
};

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [contactno, setContactno] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your signup logic here
    if (password === confirmPassword) {
      // Successful signup, navigate to login page
      setError('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setGender(' ');
      setCountry(' ');
      setContactno(' ');
      alert('Signup successful!');
      navigate('/Home')
    } else {
      // Passwords do not match, display error message
      setError('Passwords do not match');
  
      
    }
  };

  return (
 
    <div style={styles.container}>
      <form style={styles.Signupform} onSubmit={handleSubmit}>
        <h2>Signup&nbsp;&nbsp;&nbsp;</h2>
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
        <input
          style={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

<input
          style={styles.input}
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

<input
          style={styles.input}
          type="text"
          placeholder="Contact no"
          value={contactno}
          onChange={(e) => setContactno(e.target.value)}
          required
        />
    
      
        <button style={styles.button} type="submit">Signup</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>

  );
}

export default Signup;