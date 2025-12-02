import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("⚠️ Please fill in all fields.");
      return;
    }

    if (formData.email === "admin@college.edu" && formData.password === "admin123") {
      alert("✅ Login successful!");
      setError("");
      setFormData({ email: "", password: "" });
    } else {
      setError("❌ Invalid email or password.");
    }
  };

  return (
    <section className="login-shell">
      <div className="login-hero">
        <h1>Secure login</h1>
        <p>Authenticate with your institutional credentials to access job dashboards and request history.</p>
      </div>

      <div className="login-card">
        <h2>Login</h2>
        <p>Access your Supercomputing Dashboard</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your institutional email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
          />

          {error && <div className="error">{error}</div>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="footer-text">
          Don’t have an account? <a href="/request-access">Request access</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
