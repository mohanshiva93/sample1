import React from 'react'
import {UserData} from './UserData'
/**
* @author
* @function Users
**/

export const Users = (props) => {
  var UserObj_list=[
    {
      name:"mohan",
      email:"zzz@mail.com",
      gender:"male",
      age: 22,
      address:{
        street:123,
        door:1,
        pincode:5000001,
        city:"hyderabad"
      },
      companyDetails:{
         name:"TCS",
         designation:"software engineer",
         salary:35000,
         doj:'28-09-2021'
      }

    },

    {
      name:"teja",
      email:"www@mail.com",
      gender:"male",
      age:24,
      address:{
        street:456,
        door:2,
        pincode:5000002,
        city:"chennai"
      },
      companyDetails:{
        name:"TCS",
        designation:"software engineer",
        salary:35000,
        doj:'28-09-2021'
     }
    },
    {
      name:"raja",
      email:"rrr@mail.com",
      age:26,
      gender:"male",
      address:{
        street:789,
        door:3,
        pincode:5000003,
        city:"hyderabad"
      },
      companyDetails:{
        name:"TCS",
        designation:"software engineer",
        salary:35000,
        doj:'28-09-2021'
     }
    },
    {
      name:"dilip",
      email:"ddd@mail.com",
      age:28,
      gender:"male",
      address:{
        street:123,
        door:4,
        pincode:5000004,
        city:"hyderabad"
      },
      companyDetails:{
        name:"TCS",
        designation:"software engineer",
        salary:35000,
        doj:'28-09-2021'
     }
    },
    {
      name:"satish",
      email:"sss@mail.com",
      age:30,
      address:{
        street:123,
        door:5,
        pincode:5000005,
        city:"hyderabad"
      },
      companyDetails:{
        name:"TCS",
        designation:"software engineer",
        salary:35000,
        doj:'28-09-2021'
     }
    },
    
  ]
  return(
    <div>
      
      <UserData userDetails={UserObj_list[0]} ></UserData>
      <UserData userDetails={UserObj_list[1]} ></UserData>
      <UserData userDetails={UserObj_list[2]} ></UserData>
      <UserData userDetails={UserObj_list[3]} ></UserData>
      <UserData userDetails={UserObj_list[4]} ></UserData>
      
    </div>
  )
}