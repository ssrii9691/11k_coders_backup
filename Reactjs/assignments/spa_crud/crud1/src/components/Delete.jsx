import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Delete() {
  const [founder, setfounder] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:3201/founder/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setfounder(data);
      });
  }, []);

  const confirmdelete = () => {
    fetch("http://localhost:3201/founder/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <ul>
        <li>{founder.id}</li>
        <li>{founder.email}</li>
        <li>{founder.username}</li>
        <li>{founder.country}</li>
        <li>{founder.phone}</li>
        <li>{founder.password}</li>
      </ul>
      <button type="button" className="btn btn-danger" onClick={confirmdelete}>
        confirmdelete
      </button>
    </div>
  );
}

export default Delete;
