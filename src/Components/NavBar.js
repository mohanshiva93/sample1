import React from 'react'
import {Link} from 'react-router-dom';
/**
* @author
* @function NavBar
**/

export const NavBar = (props) => {
  return(
    <div>

           <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand">
                    <Link to="/home">User Info</Link>
                </a>
              </div>
              <ul class="nav navbar-nav">
                 <li><a ><Link to="/home">Home</Link> </a></li>
                 <li><a > <Link to="/users">Users</Link></a></li>
                 <li><a > <Link to="/addUser">Add User</Link></a></li>
                 <li><a > <Link to="/settings">Settings</Link></a></li>
              </ul> 
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="#"> <Link to="/">Logout</Link></a></li>
              </ul>           
            </div>
          </nav>
    </div>
   )

 }