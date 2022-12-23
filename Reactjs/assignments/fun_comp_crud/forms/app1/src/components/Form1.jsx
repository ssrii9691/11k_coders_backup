import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const Form1 = () => {
    const[coach,setCoach]=useState({
        id:"",
        username: "",
        password: "",
        emailaddress: "",
        dateOfbirth: "",
        height: "",
        weight: "",
    })
    const [coaches,setCoaches]=useState([]);
    const [isEdit,setIsEdit]=useState(false)
    useEffect(()=>{
        getCoach();
    },[])

    const getCoach=()=>{
        axios.get("http://localhost:3202/coach/").then((response)=>{
            setCoaches(response.data)
            console.log(response.data)
        })
    }

    const changeCoach=(e)=>{
       let newCoach={...coach}
       newCoach[e.target.name]=e.target.value
       setCoach(newCoach)
    }

    const addCoach=()=>{
        axios.post("http://localhost:3202/coach/",coach).then(()=>{
            getCoach();
            clearform()
            
        })
    }

    const editcoach=(coa)=>{
          setCoach(coa)
          setIsEdit(true)
    }

    const deleteCoach=(coa)=>{
         axios.delete("http://localhost:3202/coach/"+coa.id).then(()=>{
            getCoach()
         })
         
    }

    const updatecoach=()=>{
        axios.put("http://localhost:3202/coach/"+coach.id,coach).then(()=>{
            getCoach();
            clearform();
            setIsEdit()
        })
    }

    const clearform = () => {
      setCoach({
        id:"",
        username: "",
        password: "",
        emailaddress: "",
        dateOfbirth: "",
        height: "",
        weight: "",
      })
      };
  return (
    <div>
        <div>
          <form> 
            <label htmlFor="">id:-</label>
            <input
              type="text"
              name="id"
              value={coach.id} disabled
              onChange={(e) => {
    changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">username:-</label>
            <input
              type="text"
              name="username"
              value={coach.username}
              onChange={(e) => {
                changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">password:-</label>
            <input
              type="password"
              name="password"
              value={coach.password}
              onChange={(e) => {
                changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">emailaddress:-</label>
            <input
              type="text"
              name="emailaddress"
              value={coach.emailaddress}
              onChange={(e) => {
                changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">dateOfbirth:-</label>
            <input
              type="date"
              name="dateOfbirth"
              value={coach.dateOfbirth}
              onChange={(e) => {
                changeCoach(e);
              }}
            />{" "}
            <br />
            <label htmlFor="">height:-</label>
            <input
              type="number"
              name="height"
              value={coach.height}
              onChange={(e) => {
                changeCoach(e);
              }}
            />
            <label htmlFor="">weight:-</label>
            <input
              type="number"
              name="weight"
              value={coach.weight}
              onChange={(e) => {
                changeCoach(e);
              }}
            />{" "}
            <br />
            {isEdit  ? (
              <button type="button" onClick={updatecoach}>
                updatecoach
              </button>
            ) : (
              <button onClick={addCoach} type="button">
                addcoach
              </button>
            )}
          </form>
        </div>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>username</th>
                <th>password</th>
                <th>emailaddress</th>
                <th>dateofbirth</th>
                <th>height</th>
                <th>weight</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((coa, i) => (
                <tr key={i}>
                    <td>{coa.id}</td>
                  <td>{coa.username}</td>
                  <td>{coa.password}</td>
                  <td>{coa.emailaddress}</td>
                  <td>{coa.dateofbirth}</td>
                  <td>{coa.height}</td>
                  <td>{coa.weight}</td>

                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={()=>{editcoach(coa)}}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={()=>{deleteCoach(coa)}}
                      type="button"
                    >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default Form1
