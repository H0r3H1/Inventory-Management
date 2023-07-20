import React from 'react';

import './contact.css';
    const Contact =() => {
      return (
        
    
              
       
              

              <div className='img'>
              <img align = "left" src="https://uploads-ssl.webflow.com/6231a9898a805d1c9d8ebbdf/626aaa0de4be84f391bdf2d6_Welcome--5ec7b8b301d036001ad4f948.png" width="500" height="500"></img>

              <form>      
                <center><h2>Contact us</h2></center> 

                <input name="name" type="text" className="feedback-input" placeholder="Name"  required/>   
                <input name="email" type="text" className="feedback-input" placeholder="Email" required/> 
                <textarea name="text" className="feedback-input" placeholder="Comment" defaultValue={""} />
                <input type="submit" defaultValue="SUBMIT" />

              </form>
              </div>
             
            );
          }
      
        
      
        
        
        
        
       
           
                
    
         
            export default Contact;