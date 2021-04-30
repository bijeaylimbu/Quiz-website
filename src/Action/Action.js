export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
  export const getUser = () => {
    return  sessionStorage.getItem('user') || null;
     
     
  }


  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
  

  export const setUserSession = (token, user,id) => {
    sessionStorage.setItem('token', token);
   
    
     sessionStorage.setItem('user', user);
     sessionStorage.setItem('id', id);
     
    
     
  }