import React from 'react'

/**
* @author
* @function Settings
**/

export const Settings = (props) => {
  return(
    <div>
      <h2 className="settingsHeader">Change Password</h2>
      <div className="settings">
        <tr>
          <td>
            <label>Old Password:</label>
          </td>
          <td>
            <input type="password"/>
          </td>
        </tr>

        <tr>
          <td>
            <label>New Password:</label>
          </td>
          <td>
            <input type="password"/>
          </td>
        </tr>

        <tr>
          <td>
            <label>Confirm Password:</label>
          </td>
          <td>
            <input type="password"/>
          </td>
        </tr>

        <button className="addUser">Add User</button>
      </div>

    </div>
   )

 } 