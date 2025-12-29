import React, { useState } from "react";
import "./css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ProtectedRoutes from "../utils/ProtectedRoutes.jsx";


const Login = () => {
  const [Value, setValue] = useState({
    username: "",
    password: "",
  });

  const [Error, setError] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Value.email === "" || Value.password === "") {
      setError("Please fill in both email and password");
      return;
    }
    setError("");
    console.log("logining in");
    axios.post("http://localhost:3001/login", {
        email: Value.email,
        password: Value.password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        if (response.data === "Login successful") {
          localStorage.setItem("authToken", "true");
          navigate("/dashboard", { replace: true });
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
        onChange={(e) => setValue({ ...Value, email: e.target.value })}
        id="Email"
        type="text"
        name="email"
        placeholder="Email"
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
