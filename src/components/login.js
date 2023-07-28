import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setEmail, setPass, setName } from './action';
import './store';
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
    padding: '20px',
    fontSize: '16px',
    width:'20px'
  },
  button: {
    padding: '20px',
    fontSize: '16px',
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width:'200px',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
 
};


function Login({
  email,
  pass,
  name,
  setEmail,
  setName,
  setPass,
}) {
  const check = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        {
          email: email,
          password: pass,
        }
      );

      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      console.log(localStorage.getItem('token'));
      const user = {
        email,
      };

      navigate('/');
    } catch (error) {
      console.log(error);
      window.alert('Invalid Credentials');
    }
  };

  const navigate = useNavigate();
  const [checkpass, setCheckPass] = useState(false);
  return (
    <div className='loginmain'>
      <div style={styles.login}>
        <form onSubmit={check}>
       
        <div className='img'>
              <img  align = "left" src="https://media.istockphoto.com/id/1167143805/vector/electronic-contract-or-digital-signature-concept-modern-flat-cartoon-style-vector.jpg?s=612x612&w=0&k=20&c=VRFxu1rFOKeNMeFRrjVM9hIcyFv5fzN5bshqPUbfcKM=" width="400" height="250"></img></div>
          <h2 style={styles.title}>Login&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        
          <div style={styles.formGroup}>
            <center>

          </center> 
            <input
              style={{height:'37px',width:'50%',fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',}} 
 
              type="email"
              name="email"
              value={email}
              placeholder="&nbsp;&nbsp;Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        
          <br></br>
          <div style={styles.formGroup}>
            <input
            style={{height:'37px',width:'50%',fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',}} 

              type="password"
              name="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="&nbsp;&nbsp;Enter your password"
              required
            />
          </div>
          <br></br>
          <button style={{marginLeft:'40%',padding:'10px',width:'70px'}} type="submit">
            Login
          </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {checkpass && alert('Successful login ' + email)}
          <br></br>
         
          {checkpass && navigate('/')}
          <Link to="/signup" style={styles.registerLink}><br></br>
            Don't have an account? <br></br>Signup
          </Link>
          
        </form>
        
      </div>
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    pass: state.login.pass,
    name: state.login.name,
  };
};

const mapDispatchToProps = {
  setEmail,
  setPass,
  setName,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);