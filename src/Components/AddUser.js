import React from 'react'

/**
* @author
* @function AddUser
**/

export const AddUser = (props) => {
  return(
     <>
     <h2 className="addUserHeader">New User Details</h2>

     <div class="AddUserContainer conatiner">
       
       <tr>
         <td>
           <label>NAME:</label>
         </td>
         <td>
         <input type="text"></input><br/>
         </td>
        </tr> 
       
      
        <tr>
         <td>
           <label>USERNAME:</label>
         </td>
         <td>
         <input type="text"></input><br/>
         </td>
        </tr> 

        <tr>
         <td>
           <label>PASSWORD:</label>
         </td>
         <td>
         <input type="password"></input><br/>
         </td>
        </tr> 

        <tr>
         <td>
           <label>CONFIRM PASSWORD:</label>
         </td>
         <td>
         <input type="password"></input><br/>
         </td>
        </tr> 

        <tr>
         <td>
           <label>EMAIL:</label>
         </td>
         <td>
         <input type="text"></input><br/>
         </td>
        </tr> 

        <tr>
         <td>
           <label>AGE:</label>
         </td>
         <td>
         <input type="text"></input><br/>
         </td>
        </tr> 

       <tr>
         <td>
           <label>Gender:</label>
         </td>
         <td>
           <input type="radio" name="gender"></input>
           <label>MALE</label> 

           <input type="radio" name="gender"></input>
           <label>FEMALE</label>
           </td>
         </tr>
        <br/><br/><br/>
       <button className="addUser">Add User</button>
       </div>
     </>
   )

 }