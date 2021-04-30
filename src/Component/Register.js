import React, { Component,useEffect,useState } from 'react';
import "../css/Register.css";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import {useHistory} from 'react-router-dom';





function Register(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const email = useFormInput('');
  const password2 = useFormInput('');
  const first_name = useFormInput('');
  const last_name = useFormInput('');
 


 
  const [error, setError] = useState(['']);
  const [error_username, setError_username] = useState(['']);
  const [error_username1, setError_username1] = useState(['']);
  const [error_password,setError_password] = useState(['']);
  const [error_password2,setError_password2] = useState(['']);
  const [error_email,setError_email] = useState(['']);
  const [error_first_name,setError_first_name] = useState(['']);
  const [error_last_name,setError_last_name] = useState(['']);
  
  

  const history = useHistory()


  
  const handleRegister = () => {
   
    setLoading(true);
    axios.all([ 
    axios.post('https://quiz-app-api-reactjs.herokuapp.com/api/register/',
    { username: username.value, password: password.value,email:email.value,password2:password2.value ,first_name:first_name.value,last_name:last_name.value}),
    
    
    
  
  
  ]).then(response => {
    setLoading(false);
  


     history.push('/');
  })
   
     .catch(error => {
     
   
     
      if (error.response.status === 401)
      { 
       
        setError(error.response.data.email)
        setError_username(error.response.data.username)
        setError_username1(error.response.data.username)
        setError_password(error.response.data.password)
        setError_password2(error.response.data.password2)
        setError_email(error.response.data.email)
        setError_first_name(error.response.data.first_name)
        setError_last_name(error.response.data.last_name)
      

       
        
         
   
      }
     else setError(error.response.data.email)
     setError_username(error.response.data.username)
     setError_username1(error.response.data.username)
     setError_password(error.response.data.password)
     setError_email(error.response.data.email)
     setError_first_name(error.response.data.first_name)
     setError_last_name(error.response.data.last_name)
     setError_password2(error.response.data.password2)
    
       
      
     
    });
  }

  return (
    <div class="container_reg"> 
   
  
    <div className='container_form'>
<h2>Please Register</h2> 
<br/>

First Name:
 <br/> 
    <input type = "text" placeholder="First Name" className="reg" {...first_name} />
    <br/>
    {error_first_name && <><small style={{ color: 'red' }}>{error_first_name}</small><br /></>}
    Last Name:
 <br/> 
    <input type = "text" placeholder="Last Name" className = "reg" {...last_name} />
    
    <br/>
    {error_last_name && <><small style={{ color: 'red' }}>{error_last_name}</small><br /></>}
 username
 <br/> 
    <input type = "text" placeholder="username" className = "reg" {...username} />
    <br/>
    {error_username && <><small style={{ color: 'red' }}>{error_username}</small><br /></>}

    email <br/> 
    <input type = "text" placeholder="email" className = "reg" {...email} />
    <br/>
    {error_email && <><small style={{ color: 'red' }}>{error_email}</small><br /></>}

    <br/>
    
    
    
   
    
    Password <br/>
     <input type ="password" placeholder="Enter password" className = "reg"  {...password}/>
 <br/>
 {error_password && <><small style={{ color: 'red' }}>{error_password2}</small><br /></>}<br />
 
    Re-Password <br/>
     <input type ="password" placeholder="Enter password" className = "reg" {...password2}/>
   <br/>
    {/* { ( // Conditionally render our errors
        errors.map((error) => (
          <Alert type={error.type} message={error.message} />
        )
      ))} */}
    {error_password && <><small style={{ color: 'red' }}>{error_password}</small><br /></>}<br />
    {/* {error.map(error => <div>{error.data}</div>)} */}
    
    <button  onClick={handleRegister} className='reg_button' >Register</button>
    
    </div>




  </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Register;