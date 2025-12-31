import React, { useState, useEffect } from "react";
import "./css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [Value, setValue] = useState({
    email: "",
    password: "",
  });

  const [Error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (Value.email === "" || Value.password === "") {
      setError("Please fill in both email and password");
      return;
    }
    setError("");
    
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: Value.email, password: Value.password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          console.log("Token received:", data.token);
          localStorage.setItem('token', data.token);
          navigate("/dashboard", { replace: true });
        } else {
          setError(data.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setError("An error occurred. Please try again.");
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
        value={Value.email}
      />

      <br />

      <input
        onChange={(e) => setValue({ ...Value, password: e.target.value })}
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value={Value.password}
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
