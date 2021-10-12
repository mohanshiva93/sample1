import React from 'react'
import { UserData } from './UserData'
/**
* @author
* @function UserCompany
**/

export const UserCompany = (props) => {
  return(
    <div id="company"><hr/>
      Company Details:<br/>
      Company Name:{props.Company.name}<br/>
      Designation:{props.Company.designation}<br/>
      Salary:{props.Company.salary}<br/>
      DOJ:{props.Company.doj}
      unique id:{props.name}_{props.email}
      </div>
   )

 }