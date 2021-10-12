import React from 'react'
import {Link} from 'react-router-dom';

/**
* @author
* @function Login
**/

export const Login = (props) => {
  return(
    <>
    <h1 className="header">USER INFO</h1>
    <div className="col-sm-4"></div>
    <div className="col-sm-4 logIn">
    <form>
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" ></input>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" ></input>
    </div>
  </form>
        <button type="button" class="btn btn-primary">
          <Link to="/home">Login</Link>
        </button>
        
   
     </div>

    </>
  )
    

 }