import React from "react";
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import './App.css';
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import Quiz from './Component/Quiz';
function App() {
  return (
<>

<BrowserRouter>
<Switch>

<Route path='/' exact component={Login}/>

<Route path='/login' exact component={Login}/>
<Route path='/register' exact component={Register}/>
<Route path='/quiz_page' exact component={Quiz}/>



</Switch>

</BrowserRouter>

</>
  );
}

export default App;
