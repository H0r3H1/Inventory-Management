import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
//   const [email, setEmail] = useState('');
//   const [Name, setName] = useState('');
//   const[Subject,setSubject]=useState('');
//   const[Message,setMessage]=useState('');
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    // console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }
  
  
  
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
  
//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };
//   const handleSubjectChange = (event)=>{
//     setSubject(event.target.value);
//   }
//   const handleMessageChange = (event)=>{
//     setMessage(event.target.value);
//   }
  
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     // if (!email || !password) {
//     //   alert("please enter Email and password.");
//     //   return;
//     // }
//     // Add your login logic here
//     console.log('Login form submitted');
//     console.log('Email:', email);
//     console.log('Name:', Name);
//     console.log('Subject',Subject);
//     console.log('Message',Message);
//   //  Navigate('/Home')
//   };

  return (

    <div className="down" >
      <div className="login-form">
      <div className='img'>
              <img  align = "left" src="https://static.vecteezy.com/system/resources/previews/017/181/246/non_2x/customer-satisfaction-survey-2d-isolated-illustration-client-leaving-feedback-to-operator-flat-characters-on-cartoon-background-colorful-editable-scene-for-mobile-website-presentation-vector.jpg" width="350" height="550"></img></div>

        <h2>FEEDBACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <form onSubmit={handleSubmit} >
          <input
          style={{width: '50%',padding:'25px'}}
            type="email"
            placeholder="Email"
            id='email'
            onChange={handleChange}
            required
          /><br></br><br></br>
          <input
          style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Name"
            id='name'
            onChange={handleChange}
            required
          /><br></br><br></br>
             <input
             style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Subject"
            id='subject'
            onChange={handleChange}
            required
          /><br></br><br></br>
            <input
            style={{width: '50%',padding:'25px'}}
            type="name"
            placeholder="Message"
            id='message'
            onChange={handleChange}
            required
          /><br></br><br></br>
          <div className="button">
          <button style={{width: '50%'}} type='submit' wid onChange={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;