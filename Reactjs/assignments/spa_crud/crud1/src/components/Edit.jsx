import React from "react";
import { useState } from "react";
import UserformN from "./UserformN";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
  const [founder, setfounder] = useState({
    id: "",
    username: "",
    email: "",
    country: "",
    phone: "",
    password: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3201/founder/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setfounder(data);
      });
  }, []);

  const changeFounder = (e) => {
    const newfounder = { ...founder };
    newfounder[e.target.name] = e.target.value;
    setfounder(newfounder);
  };

  const updatefounder = () => {
    fetch("http://localhost:3201/founder/" + params.id, {
      method: "PUT",
      body: JSON.stringify(founder),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h2>welcome to edit founder</h2>
      <UserformN
        founder={founder}
        changeFounder={changeFounder}
        btnfounder="updatefounder"
        handlefounder={updatefounder}
      />
    </div>
  );
};

export default Edit;
