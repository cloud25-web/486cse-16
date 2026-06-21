import React, { useEffect, useState } from "react";
function Exp9() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validateForm = () => {
    let newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
      console.log(formData);
      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "black",
            boxSizing: "border-box",
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "40px",
            lineHeight: "1.2"
          }}
        >
          Registration Form
        </h1>
        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
              boxSizing: "border-box"
            }}
          />
          {
            errors.name && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.name}
              </p>
            )
          }
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
              boxSizing: "border-box"
            }}
          />
          {
            errors.email && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.email}
              </p>
            )
          }
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "10px",
              marginBottom: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
              boxSizing: "border-box"
            }}
          />
          {
            errors.password && (
              <p
                style={{
                  color: "red",
                  marginTop: "0px"
                }}
              >
                {errors.password}
              </p>
            )
          }
          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "20px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Register
          </button>
        </form>
        {/* Success Message */}
        {
          success && (
            <p
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "15px",
                fontWeight: "bold"
              }}
            >
              {success}
            </p>
          )
        }
        {/* API Data Section */}
        <div
          style={{
            marginTop: "30px"
          }}
        >
          <h2
            style={{
              textAlign: "center", color: "black"
            }}
          >
            User Data from API
          </h2>
          {
            loading ? (
              <p
                style={{
                  textAlign: "center"
                }}
              >
                Loading...
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    backgroundColor: "#f4f4f4",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "5px"
                  }}
                >
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
}
export default Exp9;