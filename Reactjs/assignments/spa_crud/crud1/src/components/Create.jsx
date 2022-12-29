import React from 'react'
import { useState } from 'react'
import UserformN from './UserformN'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [founder,setfounder]=useState({id:"",username:"",email:"",country:"",phone:"",password:""})
    const navigate =useNavigate()

    const changeFounder=(e)=>{
      const newfounder={...founder}
      newfounder[e.target.name]=e.target.value;
      setfounder(newfounder)
    }

    const addfounder=()=>{
        fetch("http://localhost:3201/founder/",{
            method:"POST",
            body:JSON.stringify(founder),
            headers:{'Content-Type':"application/json"}
        }).then(()=>{
            navigate('/')
            clearfounder()
        })
    }
    const clearfounder=()=>{
        setfounder({id:"",username:"",email:"",country:"",phone:"",password:""})
    }
  return (
    <div className='container'>
      <UserformN changeFounder={changeFounder} founder={founder} handlefounder={addfounder} btnfounder="create user"/>
    </div>
  )
}

export default Create
