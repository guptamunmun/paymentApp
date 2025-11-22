import React, { useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../cssFiles/login.css"; // ⭐ add CSS file

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/auth/login", form);
      const token = response.data.token;
      login(token);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="title">Login</h1>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Login
        </button>

        <p className="redirect">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}
