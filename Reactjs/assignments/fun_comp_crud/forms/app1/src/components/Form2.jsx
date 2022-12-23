import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Form2() {
  const [users, setUsers] = useState({
    id: "",
    fname: "",
    lname: "",
    tel: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [allusers, setAllusers] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    getallusers();
  },[]);
  const getallusers = () => {
    axios.get("http://localhost:3200/users/").then((response) => {
      setAllusers(response.data);
      // console.log(response.data)
    });
  };

  const changeUser = (e) => {
    let newuser = { ...users };
    newuser[e.target.name] = e.target.value;
    setUsers(newuser);
  };
  const adduser = () => {
    axios.post("http://localhost:3200/users/",users).then(() => {
      getallusers();
      clearform();
    });
  };
  const edituser = (usr) => {
    setUsers(usr);
    setIsEdit(true);
  };
  const deleteuser = (usr) => {
    axios.delete("http://localhost:3200/users/"+ usr.id).then(() => {
      getallusers();
    });
  };
  const updateuser = () => {
    axios.put("http://localhost:3200/users/" + users.id, users).then(() => {
      getallusers();
      setIsEdit();
      clearform();
    });
  };

  const clearform = () => {
    setUsers({
      id: "",
      fname: "",
      lname: "",
      tel: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div>
      <div>
        <form action="">
          <label htmlFor="">id:</label>
          <input
            type="text"
            name="id"
            value={users.id}
            onChange={(e) => {
              changeUser(e);
            }}
            disabled
          />{" "}
          <br />
          <br />
          <label htmlFor="">fname:</label>
          <input
            type="text"
            name="fname"
            value={users.fname}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">lname:</label>
          <input
            type="text"
            name="lname"
            value={users.lname}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">tel:</label>
          <input
            type="text"
            name="tel"
            value={users.tel}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">address:</label>
          <input
            type="text"
            name="address"
            value={users.address}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">city:</label>
          <input
            type="text"
            name="city"
            value={users.city}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">state:</label>
          <input
            type="text"
            name="state"
            value={users.state}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">zip:</label>
          <input
            type="text"
            name="zip"
            value={users.zip}
            onChange={(e) => {
              changeUser(e);
            }}
          />{" "}
          <br />
          <br />
          {isEdit ? (
            <button type="button" onClick={updateuser}>
              updateuser
            </button>
          ) : (
            <button type="button" onClick={adduser}>
              submit
            </button>
          )}
        </form>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>fname</th>
              <th>lname</th>
              <th>tel</th>
              <th>address</th>
              <th>city</th>
              <th>state</th>
              <th>zip</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allusers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.fname}</td>
                <td>{usr.lname}</td>
                <td>{usr.tel}</td>
                <td>{usr.address}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zip}</td>

                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      edituser(usr);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      deleteuser(usr);
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
    </div>
  );
}
