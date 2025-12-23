import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {


    const [Error, setError] = useState("");

    const [Value, setValue] = useState({
        username: "",
        email: "",
        password: ""
    });



    const navigate = useNavigate();


    const HandleSubmit = (e) => {
        e.preventDefault();

        if (Value.username === "" || Value.email === "" || Value.password === "") {
            setError("Please fill in all fields");
            return;
        }

        setError("");
        console.log("Registering");
        
        axios.post('http://localhost:3001/register', {
            username: Value.username,
            email: Value.email,
            password: Value.password
        })
        .then(response => {
            console.log("Registration successful:", response.data);
            navigate('/');
        })
        .catch(error => {
            console.error("Registration failed:", error);
        });
    };

  return (
    <div id="register-container">

      <h1>CREATE ACCOUNT</h1>

      {Error && <p style={{ color: "red" }}>{Error}</p>}
      <input onChange={(e) => setValue({...Value, username: e.target.value})} id="username" type="text" placeholder="Username" />

      <br />

      <input onChange={(e) => setValue({...Value, email: e.target.value})} id="email" type="email" placeholder="Email" />
      <br />

      <input onChange={(e) => setValue({...Value, password: e.target.value})} id="password" type="password" placeholder="Password" />

      <br />

      <button onClick={HandleSubmit} id="register-button">
        Register
      </button>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );

};

export default Register;
