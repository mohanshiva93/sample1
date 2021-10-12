 import React from 'react';
 import { HashRouter, Route, Switch } from 'react-router-dom';
 import {NavBar} from './Components/NavBar';
 import {Login} from './Components/Login';
 import {Home} from './Components/Home';
 import {Users} from './Components/Users';
 import {AddUser} from './Components/AddUser';
 import {Settings} from './Components/Settings'

function App() {
  return (
    <div className="container">
        <HashRouter>
           <div className="App"> 
            <Switch>
              <Route exact path='/' component={Login}></Route> 
              <Route component={DefaultContainer}/> 
            </Switch>
          </div>
       </HashRouter> 
    </div>
  );
}

function DefaultContainer () {
  return (
  <div> 
  <div className="container">
    <NavBar />
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/users' component={Users}></Route>
      <Route exact path='/addUser' component={AddUser}></Route>
      <Route exact path='/settings' component={Settings}></Route>   
  </div>
  </div>
  )
  }

export default App;
