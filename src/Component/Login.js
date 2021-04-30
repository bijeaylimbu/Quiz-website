import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { getUser, setUserSession } from '../Action/Action';
import {useHistory} from 'react-router-dom';
import "../css/Login.css";
function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  let history=useHistory();


  const [error_username, setError_username] = useState(['']);

  const [error_password,setError_password] = useState(['']);

  function Register(){
history.push('./register')

  }


//   if (user) {
//     history.push('./login_home')
//   }
  
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('https://quiz-app-api-reactjs.herokuapp.com/login/',
 
     { username: username.value, password: password.value })
    
     .then(response => {
      setLoading(false);

     setUserSession(response.data.token,username.value,);

     
      props.history.push('/quiz_page');

    }).catch(error => {
      setLoading(false);
       if (error.response.status === 401)
       {
        setError(error.response.data.non_field_errors)
       setError_username(error.response.data.username)
       
        setError_password(error.response.data.password)
    }
       else {
        setError(error.response.data.non_field_errors)
        setError_username(error.response.data.username)
   
     setError_password(error.response.data.password)
       }
      
       if(error.toJSON().message === 'Network Error'){
        alert('no internet connection');
        
    }

    });



    
  }

  return (
    <div className='login_main'>

 
  

    
    <div class="login_page"> 

<label><center>Login</center></label>
<br/>
 
<label>Username </label>
    <br/>
    <input type = "text" placeholder="username" className = "username" {...username} />
    <br/>
    {error_username && <><small style={{ color: 'red' }}>{error_username}</small><br /></>}
    <br/>
  <label> Password </label>
     <br/>
     <input type = "password" placeholder="Enter password" className = "password" {...password}/>
    <br/>
    {error_password && <><small style={{ color: 'red' }}>{error_password}</small><br /></>}<br />

   
    <br/>
    { error &&
  <h5> { error } </h5> }<br/>
    
    <br/>
    <button  onClick={handleLogin}  className='login_button'>Login</button>
    <button  onClick={Register}  className='login_button'>Register</button>


    

    
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

export default Login;