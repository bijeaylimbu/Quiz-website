import React from 'react';
import {getUser, getToken,removeUserSession} from '../Action/Action';
import {useHistory} from 'react-router-dom';

function Home(props){
	const token = getToken();
    const user=getUser();
   

    let history=useHistory();

	function Login(){


		history.push("./login")
	}

	function Register(){


		history.push("./register")
	}


	// if (user) {
    //     history.push('./')
    //   }
	return (
<>
<button className='login_button' onClick={Login} >Login</button>
<button className='register_button' onClick={Register} >Register</button>
</>

	);
}

export default Home;