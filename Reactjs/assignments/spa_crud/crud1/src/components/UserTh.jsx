import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserTb from './UserTb';

const UserTh = () => {

    const [founder,setfounder]=useState([]);
    useEffect(()=>{
     getallfounders()
    },[])
   const getallfounders= async ()=>{
   const data=await (await fetch("http://localhost:3201/founder/")).json();
   setfounder(data)
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>username</th>
                <th>country</th>
                <th>phone</th>
                <th>password</th>
                <th>edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {founder.map((founders,i)=>
            <UserTb fou={founders} key={i}/>
            )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTh
