import React from 'react'
import { UserData } from './UserData'

/**
* @author
* @function UserAddress
**/

export const UserAddress = (props) => {
  
   return(
    <div id="address"><hr/>
    Address:<br/>
    street:{props.Address.street},
    door:{props.Address.door}<br/>
    pincode:{props.Address.pincode},
    city:{props.Address.city}
    
    </div>
   )

 }