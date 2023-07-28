import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
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
  const navigate=useNavigate('');
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const[isSubmit,setIsSubmit]=useState(false);
  const handleSubmit=async(event)=>{
    event.preventDefault();


    setIsSubmit(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmit(false);
      return;
    }

    // Validate the email format using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      setError('Invalid email address');
      setIsSubmit(false);
      return;
    }
    
    try{
      const response=await axios.post('http://localhost:8181/api/v1/auth/register',{
        name:name,
        email:email,
        password:password
  
      });
      console.log(response.status);
      if(response.status===200){
        setUsername("");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate("/");
  
        
  
      }
      
    }
    catch(error){
      alert(error);
      setIsSubmit(false);
  
    }
    if(isSubmit){
    }
  };
  return (
    <div style={styles.container}>
        <div className='img' >
      <img align="right" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg" width="500" height="550"></img>
</div>
      <form style={styles.form} onSubmit={handleSubmit}>
     
        <h2 style={styles.title}>Signup</h2>
        {error && <div style={styles.error}>{error}</div>}
        
        <div style={styles.inputContainer}>
          <label style={styles.label}>&nbsp;&nbsp;User Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your user name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Confirm Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{width: '50%'}} type="submit">Sign Up</button>
        </div>
        <br></br>
       
          <Link to="/" style={{ textDecoration: 'none' }}></Link>
        <p style={{marginLeft:"50px"}}>
          Already have an account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/login">Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        </p>
      </form>
      
    </div>
  );
};

export default Signup;