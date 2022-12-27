import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Form3 = () => {
  const [founder, setfounder] = useState({
    id: "",
    email: "",
    username: "",
    country: "",
    phone: "",
    password: "",
  });
  const [allfounders, setallfounders] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getallfounders();
  }, []);

  const getallfounders = () => {
    axios.get("http://localhost:3201/founder/").then((response) => {
      setallfounders(response.data);
    });
  };

const changeFounder=(e)=>{
    var newfounder={...founder}
    newfounder[e.target.name]=e.target.value
    setfounder(newfounder)
}

const addFounder=()=>{
    axios.post("http://localhost:3201/founder/",founder).then(()=>{
        getallfounders()
        changeFounder()
    })
}
const editFounder=(fou)=>{
    setfounder(fou)
    setIsEdit(true)
}
const deleteFounder=(fou)=>{
    axios.delete("http://localhost:3201/founder/"+fou.id).then(()=>{
        getallfounders()
    })
}
const updateFounder=()=>{
    axios.put("http://localhost:3201/founder/"+founder.id,founder).then(()=>{
        getallfounders()
        setIsEdit()
        clearform()
    })
}

const clearform=()=>{
    setfounder({
        id: "",
        email: "",
        username: "",
        country: "",
        phone: "",
        password: "",
    })
}





  return (
    <div>
      <form action="">
        <label htmlFor="">id:</label>
        <input
          type="text"
          name="id"
          value={founder.id}
          onChange={(e) => {
            changeFounder(e);
          }}
          disabled
        />{" "}
        <br />
        <br />
        <label htmlFor="">email:</label>
        <input
          type="email"
          name="email"
          value={founder.email}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">username:</label>
        <input
          type="username"
          name="username"
          value={founder.username}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">country:</label>
        <input
          type="country"
          name="country"
          value={founder.country}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">phone:</label>
        <input
          type="phone"
          name="phone"
          value={founder.phone}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">password:</label>
        <input
          type="password"
          name="password"
          value={founder.password}
          onChange={(e) => {
            changeFounder(e);
          }}
        />{" "}
        <br />
        <br />
        {isEdit ? (
            <button type="button" onClick={updateFounder}>
              updateFounder
            </button>
          ) : (
            <button type="button" onClick={addFounder}>
              addFounder
            </button>
          )}
      </form>


      <hr />

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
            {allfounders.map((fou,i)=>(
                <tr>
                    <td>{fou.id}</td>
                    <td>{fou.email}</td>
                    <td>{fou.username}</td>
                    <td>{fou.country}</td>
                    <td>{fou.phone}</td>
                    <td>{fou.password}</td>

                    <td>
                        <button  className="btn btn-primary" type="button" onClick={()=>{editFounder(fou)}}>edit

                        </button>
                    </td>
                    <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteFounder(fou);
                    }}
                    type="button"
                  >
                    delete
                  </button>
                </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form3;
