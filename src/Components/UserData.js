import React from 'react'
import UserImage from '../user.jpg'
import {UserAddress} from './UserAddress'
import { UserCompany } from './UserCompany'
/**
* @author
* @function UserData
**/

export const UserData = (props) => {
 
      return(
        <div>
          <div class="col-sm-6">
            <div class="userContainer" >
              <div class="col-sm-10" >
            <span>Name:{props.userDetails.name}</span>  
            <br/>
            <span>Email:{props.userDetails.email}</span>
            <br/>
            <span>Gender:{props.userDetails.gender}</span>
            <br/>
            <span>Age:{props.userDetails.age}</span>        
           
            </div>
              <div class="col-sm-2" >
                <img src={UserImage} class="img-rounded" alt="Cinque Terre" width="60px"/>
                
              </div>
              <div class="col-sm-6">
                <UserAddress Address={props.userDetails.address}></UserAddress>
              </div>             
              <div class="col-sm-6">
                 <UserCompany 
                 Company={props.userDetails.companyDetails} 
                 name={props.userDetails.name}
                 email={props.userDetails.email}
                 ></UserCompany>
               </div>
          
          </div>
        </div>
      </div>
      )
  }
 