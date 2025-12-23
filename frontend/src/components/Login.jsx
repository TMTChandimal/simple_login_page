import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Value, setValue] = useState({
    username: "",
    password: "",
  });

  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Value.username === "" || Value.password === "") {
      setError("Please fill in both username and password");
      return;
    }
    setError("");
    console.log("logining in");
    axios.post("http://localhost:3001/login", {
        username: Value.username,
        password: Value.password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        if (response.data === "Login successful") {
          navigate("/dashboard");
        } else {
          setError(response.data);
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError(error.response.data);
      });
  };

  return (
    <div id="login-container">
      <h2>LOGIN</h2>

      {Error && <p style={{ color: "red" }}>{Error}</p>}

      <input
        onChange={(e) => setValue({ ...Value, username: e.target.value })}
        id="username"
        type="text"
        name="username"
        placeholder="Username"
      />

      <br />

      <input
        onChange={(e) => setValue({ ...Value, password: e.target.value })}
        id="password"
        type="password"
        name="password"
        placeholder="Password"
      />

      <br />

      <button onClick={HandleSubmit} id="login-button">
        Login
      </button>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
