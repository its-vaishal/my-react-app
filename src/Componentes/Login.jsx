import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import Home from "./Home";
import Navbar2 from "./Navbar2";

function Login() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    address: "",
    pincode: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorize/google";
  };

  return (
   <> <Navbar2/>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f6fa",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Login</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email or Mobile"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="address"
          placeholder="Your Address"
          onChange={handleChange}
          style={{ ...inputStyle, height: "60px" }}
        ></textarea>
        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={{ fontSize: "14px" }}>
          <input type="checkbox" style={{ marginRight: "8px" }} /> Remember Me
        </label>

        <button type="submit" style={loginBtn}>
          Login
        </button>

        <button type="button" onClick={handleGoogleLogin} style={googleBtn}>
          <NavLink href="/user/Sinup" style={{ color: "white", textDecoration: "none" }}>
            Login with Google
          </NavLink>
        </button>
      </form>
    </div></>
  );
}

// ✅ Reusable styles
const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "15px",
};

const loginBtn = {
  padding: "10px",
  borderRadius: "8px",
  backgroundColor: "#007bff",
  color: "white",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

const googleBtn = {
  padding: "10px",
  borderRadius: "8px",
  backgroundColor: "#db4437",
  color: "white",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
};

export default Login;
