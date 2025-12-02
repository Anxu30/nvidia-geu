import { useState } from "react";
import "./RequestAccess.css";

const RequestAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    institution: "",
    department: "",
    accessType: "",
    purpose: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(formData).some((val) => !val);
    if (isEmpty) {
      setMessage("⚠️ Please fill in all fields before submitting.");
      return;
    }

    // Simulate form submission
    console.log("Access Request Submitted:", formData);
    setMessage("✅ Your access request has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      contact: "",
      institution: "",
      department: "",
      accessType: "",
      purpose: "",
    });
  };

  return (
    <section className="access-shell">
      <HamburgerMenu />
      <div className="access-hero">
        <h1>Request Access</h1>
        <p>Fill out the form below to request access to the Supercomputing Facility</p>
      </div>

      <div className="access-card">
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your institutional email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter your contact number"
            value={formData.contact}
            onChange={handleChange}
          />

          <label>Institution / Organization</label>
          <input
            type="text"
            name="institution"
            placeholder="Enter your institution name"
            value={formData.institution}
            onChange={handleChange}
          />

          <label>Department</label>
          <input
            type="text"
            name="department"
            placeholder="Enter your department name"
            value={formData.department}
            onChange={handleChange}
          />

          <label>Type of Access</label>
          <select name="accessType" value={formData.accessType} onChange={handleChange}>
            <option value="">Select Access Type</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="researcher">Researcher</option>
            <option value="external">External User</option>
          </select>

          <label>Purpose of Using Supercomputing</label>
          <textarea
            name="purpose"
            rows="4"
            placeholder="Describe your research/project purpose..."
            value={formData.purpose}
            onChange={handleChange}
          ></textarea>

          {message && <div className={`message ${message.includes("⚠️") ? "error" : "success"}`}>{message}</div>}
          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </section>
  );
};

export default RequestAccess;
