import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await fetch("/djangoapp/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.status === "Registered") {
      window.location.href = "/";
    } else {
      alert(data.error || "Registration failed");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "60px auto", padding: "32px", background: "white", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,.1)" }}>
      <h2 style={{ marginBottom: 24, color: "#1a1a2e" }}>Create Account</h2>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 5, fontSize: 13 }}>Username</label>
        <input name="username" value={formData.username} onChange={handleChange}
          placeholder="Enter username"
          style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", borderRadius: 4, fontSize: 13, boxSizing: "border-box" }} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 5, fontSize: 13 }}>First Name</label>
        <input name="firstName" value={formData.firstName} onChange={handleChange}
          placeholder="Enter first name"
          style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", borderRadius: 4, fontSize: 13, boxSizing: "border-box" }} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 5, fontSize: 13 }}>Last Name</label>
        <input name="lastName" value={formData.lastName} onChange={handleChange}
          placeholder="Enter last name"
          style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", borderRadius: 4, fontSize: 13, boxSizing: "border-box" }} />
      </div>

      <div style={{ marginBottom: 14 }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 5, fontSize: 13 }}>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange}
          placeholder="Enter email"
          style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", borderRadius: 4, fontSize: 13, boxSizing: "border-box" }} />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: "block", fontWeight: 600, marginBottom: 5, fontSize: 13 }}>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange}
          placeholder="Enter password"
          style={{ width: "100%", padding: "9px 12px", border: "1px solid #ccc", borderRadius: 4, fontSize: 13, boxSizing: "border-box" }} />
      </div>

      <button onClick={handleSubmit}
        style={{ width: "100%", background: "#e94560", color: "white", border: "none", padding: 11, borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
        Register
      </button>
    </div>
  );
};

export default Register;
