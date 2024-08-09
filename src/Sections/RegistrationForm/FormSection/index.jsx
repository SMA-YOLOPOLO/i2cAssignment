import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });

  // Handle form input changes

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // No errors, submit the form
      setErrors({});
      console.log("Form submitted", formData);
    } else {
      // Set errors
      setErrors(validationErrors);
    }
  };
  return (
    <div className="form-section">
      <h2>Registration</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
        tristique senectus dui pharetra sit.
      </p>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
          }}
        >
          <label style={{ marginBottom: "10px", marginTop: "20px" }}>
            Name <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input-field"
            onChange={handleChange}
            style={{
              border: errors.name ? "1px solid #ff0c21" : "1px solid #ccc",
            }}
            value={formData.name}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.name}
            </span>
          )}

          <label style={{ marginBottom: "10px", marginTop: "20px" }}>
            Company
          </label>

          <input
            type="text"
            name="company"
            placeholder="Enter your company name"
            className="input-field"
            onChange={handleChange}
            value={formData.company}
          />

          <label style={{ marginBottom: "10px", marginTop: "20px" }}>
            Email Address <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            className="input-field"
            onChange={handleChange}
            value={formData.email}
            style={{
              border: errors.email ? "1px solid #ff0c21" : "1px solid #ccc",
            }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </span>
          )}

          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
